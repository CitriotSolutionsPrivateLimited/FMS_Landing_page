import React, {  useState, } from 'react';
import { empl2, empl3, empl5,empl6,empl7, empl9, } from '../images/constants';
import { useNavigate } from "react-router-dom";
import { Select, DatePicker } from 'antd';
import {  IoSearch, IoChevronDownCircleOutline, IoChevronUpCircleOutline } from "react-icons/io5";


const { Option } = Select;
const { RangePicker } = DatePicker;

const employeesData = [
  {img: empl9 ,name: 'Amrish Ilyas', designation: 'Waiter', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min', productivity:'70%', 
  timesheets:[
  {
    timing: [
      {activities:[
        {  range:'Productive Time', status:'active', duration:'30 Minutes'},
        {  range:'Idle Time', status:'idle', duration:'10 Minutes'},
        {  range:'Store Exit', status:'exit', duration:'20 Minutes'},
        ],
      startTime:'9:00am'}
    ]
  },
  {
    timing: [
      {activities:[
        {  range:'Away Time', status:'away', duration:'5 Minutes'},
        {   range:'Productive Time', status:'active', duration:'55 Minutes'},
        ],
      startTime:'10:00am'}
    ]
  },
  {
    timing: [
      {activities:[
        {  range:'Phone Usage', status:'phone', duration:'20 Minutes'},
        {  range:'Compliance Violation', status:'violation', duration:'5 Minutes'},
        ],
        startTime:'11:00am'}
    ]
  },
  {
    timing: [
        {startTime:'12:00pm'}
    ]
  },
  {
    timing: [
        {startTime:'1:00pm'}
    ]
  },
  {
    timing: [
        {startTime:'2:00pm'}
    ]
  },
  // {
  //   timing: [
  //       {startTime:'3:00pm'}
  //   ]
  // },
  // {
  //   timing: [
  //       {startTime:'4:00pm'}
  //   ]
  // },

]},

  { img: empl2, name: 'Avantas Ghosal', designation: 'Cashier', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min', productivity:'68%'},

  {img: empl3, name: 'Jayadev Mitali', designation: 'Chef', checkIn:'9:00AM', CheckOut:'working', active:'4h:20 Min', productivity:'74%'},

  {img: empl5, name: 'Vijai Sritharan', designation: 'Assistant Manager', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min', productivity:'66%'},
  {img: empl6, name: 'Hardeep Suksma', designation: 'Waiter', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min', productivity:'62%'},
  {img: empl7, name: 'Barsati Sandipa', designation: 'Chef', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min', productivity:'56%'},
]

function TimeSheet() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Date and Time");

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  }

  const handleDatePickerChange = () => {

  }

  const [memberDataVisibility, setMemberDataVisibility] = useState(Array(employeesData.length).fill(false));

  const toggleEmployeeDetails = (index) => {
    const updatedVisibility = [...memberDataVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setMemberDataVisibility(updatedVisibility);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className=' p-8'>
      <div className="flex-grow  ">
          <h1 className=' flex flex-row font-Lato text-3xl mt-24'>Time Sheet</h1>

        <div className="flex mt-4 font-Lato items-center">
          <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
          <div className="w-1 h-1  bg-[#818586] rounded-full ml-2 mr-2"></div>
          <span className='text-[#818586] text-sm'>Employees</span>
          <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
          <span className='text-[#8C68CD] text-sm'>View Timesheet</span>
        </div>
      </div>
      <div className='flex flex-col mt-9'>
        <div className='flex flex-row items-center'>
          <div className={`flex items-center rounded-lg px-3 py-2 bg-[white] w-60 h-11 border ${isFocused ? 'border-[#6F42C1]' : 'border-gray-100'}`} style={{width:'290px', height:'53px'}}>
            <IoSearch color={isFocused ? '#6F42C1' : '#E1D8F2'} size={20} className='mr-2'/>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Search Team Employees"
              className=" outline-none placeholder-[#B2B5B9] flex-grow text-black bg-[white] font-Lato text-base"
            />
          </div>
          <div className='ml-5'>
            <Select
              defaultValue="Select Franchise"
              style={{ width: 160, height: 40, fontSize: '20px' }}
            >
              <Option value="Indiranagar" className='text-xs'>Indiranagar</Option>
                <Option value="Kormangala" className='text-xs'>Kormangala</Option>
                <Option value="HSR Layout" className='text-xs'>HSR Layout</Option>
                <Option value="Jayanagar" className='text-xs'>Jayanagar</Option>
                <Option value="Electronic City" className='text-xs'>Electronic City</Option>
                <Option value="all" className='text-xs'>All Franchise</Option>
            </Select>
          </div>
          <div className="ml-5 ">
            <Select
              defaultValue="Date and Time"
              style={{ width: 160, height: 40, fontSize: '20px' }}
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
              <div className="ml-3 ">
                <RangePicker 
                style={{  height:40, width: 210, fontSize: '20px' }}
                showTime
                onChange={handleDatePickerChange} />
              </div>
            )}
          {/* <button className='bg-[#8C68CD] text-[#FDFDFD] w-28 ml-4 h-11 font-Lato text-sm rounded-lg'>Export</button> */}
        </div>
        <div className='flex flex-row font-Lato mt-6 gap-4'>
          <div className='flex bg-white w-36 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#C39BD3] w-5 h-5 rounded-full'></div>
            <span>Productive Time</span>
          </div>
          <div className='flex bg-white w-32 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#85C1E9] w-5 h-5 rounded-full'></div>
            <span>Idle Time</span>
          </div>
          <div className='flex bg-white w-32 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#D5897E] w-5 h-5 rounded-full'></div>
            <span>Away Time</span>
          </div>
          <div className='flex bg-white w-36 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#D7C17F] w-5 h-5 rounded-full'></div>
            <span>Store Exit</span>
          </div>
          <div className='flex bg-white w-52 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#FFC585] w-5 h-5 rounded-full'></div>
            <span>Compliance Violation</span>
          </div>
          <div className='flex bg-white w-36 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#AAADAE] w-5 h-5 rounded-full'></div>
            <span>Phone Usage</span>
          </div>
        </div>
        <div className='flex flex-col'>
          {employeesData.map((empl, index) => (
            <><table className="border border-collapse mt-5 bg-white w-full">
              <thead className=" text-[#6F42C1]  font-Lato ">
                <tr>
                  <th className="p-2 font-Lato text-left">Employee Name</th>
                  <th className="p-2 whitespace-nowrap font-Lato text-left">Check In</th>
                  <th className="p-2 whitespace-nowrap font-Lato text-left">Check Out</th>
                  <th className="p-2 whitespace-nowrap font-Lato text-left">Total Worked Hours</th>
                  <th className="p-2 whitespace-nowrap font-Lato text-left">Productivity</th>

                  <th className="p-2 whitespace-nowrap font-Lato text-left cursor-pointer" onClick={() => toggleEmployeeDetails(index)}>{memberDataVisibility[index] ? <IoChevronUpCircleOutline size={24} /> : <IoChevronDownCircleOutline size={24} />}</th>
                </tr>
              </thead>
              <tbody className="  font-Lato p-2">
                <tr className="">

                  <td className="w-44 flex flex-row p-1">
                    <img src={empl.img} alt="Employee" className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col ml-1">
                      <span>{empl.name}</span>
                      <span className='text-[#818586]'>{empl.designation}</span>
                    </div>
                  </td>
                  <td className="p-2">
                    <span>{empl.checkIn}</span>
                  </td>
                  <td className="p-2 ">
                    <span>{empl.CheckOut}</span>
                  </td>
                  <td className="p-2 ">
                    <span>{empl.active}</span>
                  </td>
                  <td className="p-2 ">
                    <span>{empl.productivity}</span>
                  </td>

                </tr>
              </tbody>
            </table>

               {memberDataVisibility[index] && (
              <div className='bg-white h-64 border p-3' style={{ overflowY:'auto'}}>
              {empl && empl.timesheets && empl.timesheets.map((tt)=> (
                <><div className="border-t ml-24"></div><div className="  font-Lato p-2 ">
                  {tt && tt.timing && tt.timing.map((tg) => (  
                  <div className=" flex flex-row">
                    <div className="p-2 items-start w-16 mr-6">
                      <span>{tg.startTime}</span>
                    </div>
                    {tg && tg.activities && tg.activities.map((e) => (
                    <div className={`w-36 h-9 ${e.status === 'violation' ? 'text-[#A35600] bg-[#FFC585] border-[#A35600]': e.status === 'idle' ? 'text-[#005B98] bg-[#85C1E9] border-[#005B98]' : e.status === 'away' ? 'text-[#B93A28] bg-[#D5897E] border-[#B93A28]' : e.status === 'exit' ? 'text-[#684F00] bg-[#D7C17F] border-[#684F00]' : e.status === 'phone' ? 'text-[#2D3436] bg-[#AAADAE] border-[#2D3436]' : 'text-[#59007D] bg-[#C39BD3] border-[#59007D]'} flex flex-col  text-xs items-center justify-center rounded-lg border  mr-5 `}>
                      <span>{e.range}</span>
                      <span>{e.duration}</span>
                    </div>
                      ))} 
                  </div>
                  ))}
                 
                </div></>
              ))}
                  </div>
            )}
            </>
            
))}
        </div>


      </div>


    </div>
  )
}

export default TimeSheet