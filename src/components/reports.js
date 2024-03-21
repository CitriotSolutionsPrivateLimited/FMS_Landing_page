import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Select, Modal, DatePicker } from 'antd';
import {  TbSearch} from "react-icons/tb";
import { g1, g2, g3, empl2, empl3, empl5,empl6,empl7, empl9, rank4, rank5, } from '../images/constants';
import ProgressBar from "@ramonak/react-progress-bar";
import Pie from './charts/pie';
import Line from './charts/Line';
import Chart from 'chart.js/auto';

import { GoArrowUp, GoArrowDown } from "react-icons/go";

const { Option } = Select;
const { RangePicker } = DatePicker;
const data = [
  { id: "Productivity", value: 73 },
  { id: "Idle Time", value: 40 },
  { id: "Away Time", value: 20 },
  { id: "Store Exit", value: 30 },
  { id: "Compliance Violation", value: 18 },
  { id: "Phone Usage", value: 15 },

];



function Reports() {
  const navigate = useNavigate();
  const [section, setSection] = useState('employees');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [selectedEA, setSelectedEA] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Date and Time");

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  }

  const handleDatePickerChange = () => {

  }

  const handleViewResult = (employee) => {
    setSelectedEmployee(employee); // Set selected employee details
    setIsModalVisible(true); // Show modal
  };

  const handleModalCancel = () => {
    setIsModalVisible(false); // Hide modal
  };
 
  const handleViewGraph = (data) => {
    setSelectedEA(data)
  }

  const handleClosePopup = () => {
    setSelectedEA(null);
  };

  const CustomTooltip = ({ point }) => {
    return (
        <div className='bg-white shadow-2xl p-3'>
          <span>Customers Attended</span>
            <div className='text-[#6F42C1]'>{ parseInt(point.data.yFormatted)}</div>
            <div className='text-[#818586]'>{point.data.xFormatted}</div>
        </div>
    );
  };

  const CustomTooltipforCustomer = ({ point }) => {
    return (
        <div style={{ background: 'white', padding: '5px' }}>
          <span>Customers</span>
            <div className='text-[#6F42C1]'>{ parseInt(point.data.yFormatted)}</div>
            <div>{point.data.xFormatted}</div>
        </div>
    );
  };


  const PerformersData = [
    {img: empl9 ,name: 'Amrish Ilyas', designation: 'Waiter', productivity:'89%', rank: g1 },
    { img: empl2, name: 'Avantas Ghosal', designation: 'Cashier', productivity:'87%', rank: g2 },
    { img: empl3, name: 'Jayadev Mitali', designation: 'Chef', productivity:'78%', rank: g3 },
    { img: empl5, name: 'Vijai Sritharan', designation: 'Assistant Manager', productivity:'76%', rank: rank4 },
    { img: empl6, name: 'Hardeep Suksma', designation: 'Waiter', productivity:'73%', rank: rank5 },
    // { img: empl6, name: 'Hardeep Suksma', designation: 'Waiter', productivity:'73%', rank: 5 },

  ];

  const EPTableData = [
    {img: empl9 ,name: 'Amrish Ilyas', designation: 'Waiter', productivity:'60', joiningDate: '26/11/23' },
    { img: empl2, name: 'Avantas Ghosal', designation: 'Cashier', productivity:'70', joiningDate: '12/11/23' },
    { img: empl3, name: 'Jayadev Mitali', designation: 'Chef', productivity:'50', joiningDate: '21/10/23' },
    { img: empl5, name: 'Vijai Sritharan', designation: 'Assistant Manager', productivity:'20', joiningDate: '19/11/23' },
    { img: empl6, name: 'Hardeep Suksma', designation: 'Waiter', productivity:'80', joiningDate: '04/02/23' },
    { img: empl7, name: 'Barsati Sandipa', designation: 'Chef', productivity:'65', joiningDate: '04/02/23' },

  ];

  const EATableData = [
    {img: empl9 ,name: 'Amrish Ilyas', designation: 'Waiter', score:'75', date: '26/11/23',  joiningDate: '26/11/23', count:'261', present: true },
    { img: empl2, name: 'Avantas Ghosal', designation: 'Cashier', score:'85', date: '26/11/23', joiningDate: '12/11/23', count:'285', present: false },
    { img: empl3, name: 'Jayadev Mitali', designation: 'Chef', score:'72', date: '26/11/23', joiningDate: '21/10/23', count:'258', present: true},
    { img: empl5, name: 'Vijai Sritharan', designation: 'Assistant Manager', score:'78', date: '26/11/23', joiningDate: '19/11/23',count:'272', present: true},
    { img: empl6, name: 'Hardeep Suksma', designation: 'Waiter', score:'80', date: '26/11/23', joiningDate: '04/02/23', count:'282', present: false},
    { img: empl7, name: 'Barsati Sandipa', designation: 'Chef', score:'50', date: '26/11/23', joiningDate: '04/02/23', count:'282', present: false},

  ];

  const cardData = [
    { id: 1, title: 'Total Customers',  percentage: '15%', time:'', arrow:<GoArrowUp />  , active: '72', green: true},
    { id: 2, title: 'Average Time',  percentage: '20%', time:'Minutes', arrow:<GoArrowUp />  , active: '15', green: true },
    { id: 3, title: 'Conversion Rate', percentage: '5%', time:'', arrow:<GoArrowDown />  , active: '60%', green: false },
    { id: 4, title: 'Abandoned Rate',   percentage: '5%', time:'', arrow:<GoArrowDown />  , active: '20%', green: false },
  ];


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  

  const lineData = [
    {
      id: 'timeToServe',
      color: '#F79044',
      data: [
        { x: '8:00AM', y: 10 },
        { x: '9:00AM', y: 8 },
        { x: '10:00AM', y: 12 },
        { x: '11:00AM', y: 9 },
        { x: '12:00PM', y: 15 },
        { x: '01:00PM', y: 13 },
        { x: '02:00PM', y: 16 },
        { x: '03:00PM', y: 10 },
        { x: '04:00PM', y: 11 },
        { x: '06:00PM', y: 8 },
        { x: '08:00PM', y: 16 },
        { x: '10:00PM', y: 8 },
      ],
    }
  ];


  return (
    <div className=' p-8 font-Lato'>
      <div className="flex-grow  ">
        <div className='flex items-center justify-between '>
          <h1 className='  font-Lato text-3xl mt-24'>Reports</h1>
          <button className=' bg-[#8C68CD] w-28 h-11 rounded-lg text-white mt-24'>Export All</button>
        </div>
        <div className="flex mt-4 font-Lato items-center">
          <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
          <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
          <span className='text-[#8C68CD] text-sm'>Reports</span>
        </div>
      </div>

      <div className='flex flex-row mt-10 gap-8 text-lg text-[#818586] '>
        <button onClick={()=>setSection('employees')} className={`${section === 'employees' ? 'text-[#6F42C1]' : ''}`}>Employees</button>
        <button onClick={()=>setSection('customers')} className={`${section === 'customers' ? 'text-[#6F42C1]' : ''} mr-44`}>Customers</button>
        <div className="ml-44">
                <Select
                  defaultValue="Select Franchise"
                  style={{ width: 150, height: 40, fontSize: '20px' }}
                >
                 <Option value="Indiranagar" className='text-xs'>Indiranagar</Option>
                <Option value="Kormangala" className='text-xs'>Kormangala</Option>
                <Option value="HSR Layout" className='text-xs'>HSR Layout</Option>
                <Option value="Jayanagar" className='text-xs'>Jayanagar</Option>
                <Option value="Electronic City" className='text-xs'>Electronic City</Option>
                <Option value="all" className='text-xs'>All Franchise</Option>
                </Select>
              </div>
              <div className=" ">
                <Select
                  defaultValue="Date and Time"
                  style={{ width: 150, height: 40, fontSize: '20px' }}
                  value={selectedOption} 
                onChange={handleSelectChange}
                >
                 <Option value="today" className='text-xl'>Today</Option>
                <Option value="week" className='text-xl'>This Week</Option>
                <Option value="month" className='text-xl'>This Month</Option>
                <Option value="custom" className='text-xl'>Custom</Option>
                </Select>
              </div>
              {selectedOption === "custom" && (
              <div className=" ">
                <RangePicker 
                style={{  height:40, fontSize: '20px' }}
                showTime
                onChange={handleDatePickerChange} />
              </div>
            )}
      </div>

      { section === 'employees' && (
      <><div className='flex flex-col mt-5'>
          <div className='flex flex-row items-center gap-2'>
            <span className='text-xl'>Top Employees By Performance</span>
            <span className='text-xs text-[#818586] mt-2'>Last updated on 26/02/2024</span>
          </div>
          <div className='flex flex-row  mt-10 gap-8'>
            {PerformersData.map((dt, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg shadow-xl p-3  mt-4 h-32 w-56">
                <div className='flex flex-row h-10'>
                  <img src={dt.img} alt="" className='w-9 h-9 rounded-full' />
                  <div className='flex flex-col text-xs ml-1 w-28'>
                    <span>{dt.name}</span>
                    <span className='text-[#818586]'>{dt.designation}</span>
                  </div>
                  {typeof (dt.rank) === 'number' ? <span className='font-Lato ml-3 '>{dt.rank}</span> : <img src={dt.rank} alt={index + 2} className="w-9 h-9 ml-3" />}
                </div>
                <span className='mt-4 text-xs text-[#2D3436]'>Total Productivity</span>
                <span className='text-[#6F42C1] text-3xl mt-1'>{dt.productivity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" justify-between rounded-lg shadow-md  bg-white mt-14">
            <div className="flex items-center p-4 justify-between">
              <div className='flex flex-row'>
              <span className="mr-10 text-2xl font-Lato font-bold ">Employee Performance</span>
              <div className={` flex items-center rounded-xl px-3 py-2 bg-[#F8F9FA] w-60 h-11 border ${isFocused ? 'border-[#6F42C1]' : 'border-[#F8F9FA]'}`} style={{ width: '290px', height: '53px' }}>
                <TbSearch color={isFocused ? '#6F42C1' : '#E1D8F2'} size={20} className='mr-2' />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder="Search Team Employees"
                  className=" outline-none placeholder-[#B2B5B9] flex-grow  bg-[#F8F9FA]  text-base" />
              </div>
              </div>
              <div>
              <button className='border border-[#8C68CD] w-28 h-11 rounded-lg text-[#8C68CD] ml-36'>Export</button>
              </div>
            </div>
            <div className='p-4'>
              <table className="w-full text-left table-auto p-4 font-Lato">
                <thead className="text-base text-white bg-[#8C68CD]   ">
                  <tr>
                    <th className="p-2 whitespace-nowrap ">Employee Name</th>
                    <th className="p-2 whitespace-nowrap ">Designation</th>
                    <th className="p-2 whitespace-nowrap ">Joining Date</th>
                    <th className="p-2 whitespace-nowrap ">Productivity</th>
                    <th className="p-2 whitespace-nowrap ">Result</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {EPTableData.map((data, index) => (
                    <tr key={index} className=" hover:bg-gray-100">
                      <td className="flex flex-row p-2 whitespace-nowrap items-center">
                        <img src={data.img} alt="" className='w-9 h-9 rounded-full' />
                        <div className="text-[#2D3436] ml-2">{data.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.designation}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.joiningDate}</div>
                      </td>
                      <td className="flex flex-row p-2 whitespace-nowrap  ">
                        <ProgressBar completed={data.productivity} bgColor={`${data.productivity > '70' ? '#317159' : data.productivity > '50' ? '#3498DB' : data.productivity > '30' ? '#BD992A' : '#B93A28'}`} height='8px' baseBgColor='#F8F9FA' isLabelVisible={false} className='w-64 ' />
                        <div className="text-[#2D3436] ml-3 -mt-2">{data.productivity}%</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <button className='text-[#6F42C1]' onClick={() => handleViewResult(data)}>View Result</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg shadow-md  bg-white mt-14">
            <div className="flex items-center p-4 ">
              <span className="mr-10 text-2xl font-Lato font-bold ">Employee Attentiveness</span>
              <div className={` mr-8 flex items-center rounded-xl px-3 py-2 bg-[#F8F9FA] w-60 h-11 border ${isFocused ? 'border-[#6F42C1]' : 'border-[#F8F9FA]'}`} style={{ width: '290px', height: '53px' }}>
                <TbSearch color={isFocused ? '#6F42C1' : '#E1D8F2'} size={20} className='mr-2' />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder="Search Team Employees"
                  className=" outline-none placeholder-[#B2B5B9] flex-grow  bg-[#F8F9FA]  text-base" />
              </div>
              
              <button className='border border-[#8C68CD] w-28 h-11 rounded-lg text-[#8C68CD] ml-96'>Export</button>
            </div>
            <div className='p-4'>
              <table className="w-full text-left table-auto p-4 font-Lato">
                <thead className="text-base text-white bg-[#8C68CD]   ">
                  <tr>
                    <th className="p-2 whitespace-nowrap ">Employee Name</th>
                    <th className="p-2 whitespace-nowrap ">Designation</th>
                    <th className="p-2 whitespace-nowrap ">Date</th>
                    <th className="p-2 whitespace-nowrap ">Attentiveness Score</th>
                    <th className="p-2 whitespace-nowrap ">Graph</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {EATableData.map((data, index) => (
                    <tr key={index} className=" hover:bg-gray-100">
                      <td className="flex flex-row p-2 whitespace-nowrap items-center">
                        <img src={data.img} alt="" className='w-9 h-9 rounded-full' />
                        <div className="text-[#2D3436] ml-2">{data.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.designation}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.date}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap items-center ">
                        <div className="text-[#2D3436] ml-3">{data.score}%</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <button className='text-[#6F42C1]' onClick={() => handleViewGraph(data)}>View Graph</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div><div className="rounded-lg shadow-md  bg-white mt-14">
            <div className="flex items-center p-4 ">
              <span className="mr-10 text-2xl font-Lato font-bold ">Employee Presence</span>
              <div className={`mr-20 flex items-center rounded-xl px-3 py-2 bg-[#F8F9FA] w-60 h-11 border ${isFocused ? 'border-[#6F42C1]' : 'border-[#F8F9FA]'}`} style={{ width: '290px', height: '53px' }}>
                <TbSearch color={isFocused ? '#6F42C1' : '#E1D8F2'} size={20} className='mr-2' />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder="Search Team Employees"
                  className=" outline-none placeholder-[#B2B5B9] flex-grow  bg-[#F8F9FA]  text-base " />
              </div>
              
              <button className='border border-[#8C68CD] w-28 h-11 rounded-lg text-[#8C68CD] ml-96'>Export</button>
            </div>
            <div className='p-4'>
              <table className="w-full text-left table-auto p-4 font-Lato">
                <thead className="text-base text-white bg-[#8C68CD]   ">
                  <tr>
                    <th className="p-2 whitespace-nowrap ">Employee Name</th>
                    <th className="p-2 whitespace-nowrap ">Designation</th>
                    <th className="p-2 whitespace-nowrap ">Joining Date</th>
                    <th className="p-2 whitespace-nowrap ">Date</th>
                    <th className="p-2 whitespace-nowrap ">Overall Presence Percentage</th>
                    <th className="p-2 whitespace-nowrap ">Presence</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {EATableData.map((data, index) => (
                    <tr key={index} className=" hover:bg-gray-100">
                      <td className="flex flex-row p-2 whitespace-nowrap items-center">
                        <img src={data.img} alt="" className='w-9 h-9 rounded-full' />
                        <div className="text-[#2D3436] ml-2">{data.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.designation}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.joiningDate}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-[#2D3436] ">{data.date}</div>
                      </td>
                      <td className=" p-2 whitespace-nowrap  ">
                        <div className="text-[#2D3436] ml-3">{data.score}% {data.count} Out of 300</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        {data.present ? <span className='text-[#6F42C1]'>Present</span> : <span className='text-[#B93A28]'>Absent</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Modal
            visible={isModalVisible}
            onCancel={handleModalCancel}
            footer={null}
          >
            {selectedEmployee && (
              <div className='font-Lato mt-8'>
                <div className='flex flex-row items-center justify-between'>
                  <span className='text-xl'>Employee Result</span>

                </div>
                <div className='flex flex-row items-center mt-12'>
                  <img src={selectedEmployee.img} alt="Employee" className="w-24 h-24 rounded-full" />
                  <div className='ml-2 text-lg'>
                    <h2 className='text-[#6F42C1] '>{selectedEmployee.name}</h2>
                    <p>{selectedEmployee.designation}</p>
                    <span className='text-[#818586]'>Working Since 2022</span>
                  </div>
                </div>
                <div className='w-full h-72 mt-5'>
                  <Pie data={data} />
                </div>
                <div className='flex flex-col text-sm font-Lato items-center -mt-6  gap-4'>
                  <div className='flex flex-row gap-6'>
                    <div className='flex flex-row w-32'>
                      <div className='rounded-full h-5 w-5 bg-[#C39BD3]'></div>
                      <span className=' ml-3'> Productivity</span>
                    </div>
                    <div className='flex flex-row w-32'>
                      <div className='rounded-full h-5 w-5 bg-[#85C1E9]'></div>
                      <span className=' ml-3'>Idle Time</span>
                    </div>
                    <div className='flex flex-row w-32'>
                      <div className='rounded-full h-5 w-5 bg-[#D5897E]'></div>
                      <span className=' ml-3'>Away Time</span>
                    </div>

                  </div>
                  <div className='flex flex-row'>
                    <div className='flex flex-row w-36'><div className='rounded-full h-5 w-5 bg-[#D7C17F]'></div>
                      <span className=' ml-3'>Store Exit</span></div>
                    <div className='flex flex-row w-40'><div className='rounded-full h-5 w-5 bg-[#FFC585]'></div>
                      <span className=' ml-3'>Compliance Violation</span></div>
                    <div className='flex flex-row w-32'><div className='rounded-full h-5 w-5 bg-[#C4C4C4]'></div>
                      <span className=' ml-3'>Phone Usage</span></div>

                  </div>
                </div>
              </div>

            )}
          </Modal>

      {selectedEA &&  (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <span className="mr-40 text-2xl font-Lato font-bold text-[#2D3436]">Employee Attentivenss</span>
              <button onClick={handleClosePopup} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
            </div>
            <div className='flex flex-row items-center mt-12'>
              <img src={selectedEA.img} alt="Employee" className="w-20 h-20 rounded-full" />
              <div className='ml-2 text-base'>
                <h2 className='text-[#6F42C1] '>{selectedEA.name}</h2>
                <p>{selectedEA.designation}</p>
                <span className='text-[#818586]'>Working Since 2022</span>
              </div>
              <div className="flex  items-center ">
                <div className=" text-[#6F42C1] text-4xl font-Lato"></div>
                <h2 className="text-sm  font-Lato text-[#818586] mt-3 ml-2"></h2>
            </div>
            <div className="flex flex-col  border border-gray-300 w-36 h-16 rounded-lg ml-5 p-1">
              <span className='text-[#6F42C1]'>{selectedEA.score}%</span>
              <div className='flex flex-row'>
                <div className={`mt-2 h-6 w-11 flex items-center justify-center rounded-md font-Lato  bg-[#D5E2DD] text-[#317159] text-sm`}>
                <GoArrowUp/> 08
                </div>
                <h2 className="text-xs  font-Lato text-[#818586] mt-3 ml-1">vs Last week</h2>
              </div>
              
            </div>
            </div>
            
            
            <div className=" " style={{width:'1050px', height:'370px'}}>
              <Line data={lineData} CustomTooltip={CustomTooltip}/>
            </div>


          </div>
        </div>
      )}</>
     )}

     {section === 'customers' && 
      <div className='flex-col mt-5'>
        <div className='flex flex-row items-center gap-2'>
            <span className='text-xl mr-80'>Customers Performance Report</span>

              <button className='border border-[#8C68CD] w-28 h-11 rounded-lg text-[#8C68CD] ml-96'>Export</button>
          </div>
          <div className='flex flex-row  mt-10 gap-8'>
          {cardData.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md p-3 mr-5 mt-4" >
              <div className="flex  ">
                <h2 className="text-lg font-semibold font-Lato">{card.title}</h2>
                <div className=" ml-7 ">
                <div className={`ml-6 h-6 w-11 flex items-center justify-center rounded-md font-Lato  ${card.green ? 'bg-[#D5E2DD] text-[#317159]' : 'bg-[#F0D7D3] text-[#B93A28]'} text-xs `}>
                      {card.arrow} {card.percentage}</div>
                    <h2 className="text-xs  font-Lato text-[#818586] mt-1 ">vs Last week</h2>
                </div>
              </div>
              {cardData.length > 0 ? 
              <div className='flex flex-row justify-between mt-2'>
              <div className="flex  items-center ">
                  <div className=" text-[#6F42C1] text-4xl font-Lato">{card.active}</div>
                  <h2 className="text-sm  font-Lato  mt-3 ml-2 text-[#6F42C1]">{card.time}</h2>
                </div>
                <div className="flex  items-center justify-center  -mb-6">
                    <div className='w-24 h-20 ml-1'>
                      <canvas ref={(ref) => {
                        if (ref && !ref.chart) {
                          ref.chart = new Chart(ref.getContext('2d'), {
                            type: 'line',
                            data: {
                              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                              datasets: [{
                                data: card.green ? [0, 1, 4, 5, 2, 8, 10] : [10, 8, 2, 5, 4, 1, 0],
                                fill: true,
                                borderColor: card.green ? '#317159' : '#B93A28',
                                borderWidth: 1.5,
                                tension: 0.4,
                                pointRadius: 0,
                                backgroundColor: card.green ? '#D5E2DD' : '#F0D7D3',
                              }]
                            },
                            options: {
                              plugins: {
                                legend: {
                                  display: false
                                }
                              },
                              scales: {
                                x: {
                                  display: false
                                },
                                y: {
                                  display: false
                                }
                              }
                            }
                          });
                        }
                      } }></canvas>
                    </div>

                  </div></div> : <div className='text-[#6F42C1] font-bold text-3xl mt-4'>-</div> }
            </div>
          ))}
          </div>
          <div className="rounded-lg shadow-md  bg-white mt-14">
            <div className="flex items-center p-4 ">
              <span className="mr-96 text-2xl font-Lato font-bold ">Customers In The Store</span>
             
              <button className='border border-[#8C68CD] w-28 h-11 rounded-lg text-[#8C68CD] ml-96'>Export</button>
            </div>
            <div className='p-4' style={{width:'1050px', height:'370px'}}>
              <Line data={lineData} customerGraph={true} CustomTooltip={CustomTooltipforCustomer}/>
            </div>
          </div>
          </div>


     }
     


    </div>
  )
}

export default Reports