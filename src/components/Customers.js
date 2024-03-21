import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Select, DatePicker } from 'antd';
import { TbHourglass, TbBuildingStore } from "react-icons/tb";
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RedialSeparators';
import GradientSVG from './GradientSVG';
import { GoArrowUp, GoArrowDown, GoChevronRight, GoChevronLeft } from "react-icons/go";
import Line from './charts/Line';


const { Option } = Select;
const { RangePicker } = DatePicker;



function Customers() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [customer, setCustomer] = useState('29');
  const [orders, setOrders] = useState('completed')
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Date and Time");

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  }

  const handleDatePickerChange = () => {

  }


  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const data = [
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

  const CustomTooltip = ({ point }) => {
    return (
        <div className='bg-white shadow-2xl p-3'>
          <span>Customers In Franchise</span>
            <div className='text-[#6F42C1]'>{ parseInt(point.data.yFormatted)}</div>
            <div className='text-[#818586]'>{point.data.xFormatted}</div>
        </div>
    );
};


  const idCSS = "hello";



  const cardData = [
    { id: 1, title: 'Average Selection Time', icon: <TbHourglass size={35}/>, time:'2 Min 30 Sec'},
    { id: 2, title: 'Average Time at Franchise', icon: <TbBuildingStore size={35}/>, time:'20 Min 12 Sec' },
  ];

  return (
    <div className='p-8 '>
      <div className="flex-grow  ">
      <div className="flex  mt-24 items-center">
        <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
        <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
        <span className='text-[#8C68CD] text-sm mr-44'>Customers</span>
        <div className="ml-72 ">
            <Select
              defaultValue="Select Franchise"
              style={{ width: 150, height: 35, fontSize: '20px' }}
            >
              <Option value="Indiranagar" className='text-xs'>Indiranagar</Option>
                <Option value="Kormangala" className='text-xs'>Kormangala</Option>
                <Option value="HSR Layout" className='text-xs'>HSR Layout</Option>
                <Option value="Jayanagar" className='text-xs'>Jayanagar</Option>
                <Option value="Electronic City" className='text-xs'>Electronic City</Option>
                <Option value="all" className='text-xs'>All Franchise</Option>
            </Select>
          </div>
          <div className="ml-7 ">
            <Select 
              defaultValue="Date and Time"
              style={{ width: 150, height: 35, fontSize: '20px' }}
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
                style={{  height:35, fontSize: '20px' }}
                showTime
                onChange={handleDatePickerChange} />
              </div>
            )}
      </div>
      </div>
      <div className='flex w-full flex-row mt-6'>
      <div className=" rounded-lg shadow-md overflow-hidden w-full bg-white p-4">
        <div className="flex items-center ">
          <span className="mr-48 text-2xl font-Lato font-bold text-[#2D3436]">Customers</span>
          
        </div>

        {/* <div className='flex flex-row border border-grey rounded-2xl p-5 items-center mt-4 gap-8'>
          { customersData.map((cmr) => (
            <div className={`flex flex-col items-center justify-between ${customer === cmr.age ? 'bg-[#D3DAF0]' : 'bg-white hover:bg-[#F8F9FA]'}  rounded-md p-2`} style={{width:'100px', height:'140px'}} onClick={()=>setCustomer(cmr.age)}>
              <img src={cmr.img} className='w-20 h-20'/>
              
              <div className='bg-[#5470C6] text-white w-16 h-7 flex items-center justify-center rounded-md font-Lato text-sm mt-3 '>Age {cmr.age}</div>
            </div>
          ))}
        </div> */}

        <div className='mt-7 flex flex-row gap-10 mb-4'>
          {cardData.map((card) => 
          <div key={card.id} className="bg-white rounded-2xl shadow-lg p-5 font-Lato " style={{width:'230px', height:'150px'} } onClick={() => handleCardClick(card)}>
            <div className="flex flex-col gap-2" >
              <div className="bg-[#E1D8F2] h-12 w-12 flex items-center justify-center rounded-lg text-[#6F42C1]">
             {card.icon}
              </div>
              <span className='text-base'>{card.title}</span>
              <span className='text-[#6F42C1] text-xl'>{card.time}</span>
            </div>
          </div>
          )}
          </div>
        
      </div>
      </div>

      <div className='flex flex-row w-full gap-10'>
        <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5 p-3" style={{width:'520px', height:'630px', overflowY:'auto'}}>
          <div className="flex flex-col  p-4 gap-4">
            <span className=" text-2xl font-Lato font-bold text-[#2D3436]">Check Out Status</span>
              <div className='flex items-center justify-center font-Lato mt-5 ml-3'>
                <div style={{ position: 'relative' }}>
                  <GradientSVG  type={orders}/>
                  <div style={{  width: '94%' }}>
                    <CircularProgressbarWithChildren
                      value={orders === 'completed' ? 60 : 10 }
                      text={orders === 'completed' ? `${60}%` : `${10}%`}
                      strokeWidth={10}
                      styles={{
                        ...buildStyles({
                          strokeLinecap: "butt",
                          textColor: orders === 'completed' ? "#6F42C1" : "#B93A28"
                        }),
                        path: { stroke: `url(#${idCSS})` }
                      }}
                    >
                      <RadialSeparators
                        count={55}
                        style={{
                          background: "#fff",
                          width: "6px",
                          height: `${12}%`,
                        }}
                      />
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center font-Lato gap-3 ' >
              <div className={` ${orders === 'completed' ? 'bg-[#D6EAF7] text-[#3498DB]' : 'text-[#AAADAE]'} w-44 h-12 flex items-center justify-center rounded-xl  text-2xl cursor-pointer`} style={{width:'180px', height:'52px'}} onClick={()=>setOrders('completed')}>Completed</div>

              <div className={` ${orders === 'abandoned' ? 'bg-[#F0D7D3] text-[#B93A28]' : 'text-[#AAADAE]'} w-44 h-12 flex items-center justify-center rounded-xl text-2xl cursor-pointer`} style={{width:'180px', height:'52px'}} onClick={()=>setOrders('abandoned')}>Abandoned</div>

                  <span className='text-[#818586] text-xl font-semibold'>{orders === 'completed' ? 321 : 27} Orders in Total</span>
                  <div className='flex flex-row'>
                  <div className={` h-6 w-14 flex items-center justify-center rounded-md font-Lato  ${orders === 'completed' ? 'bg-[#D5E2DD] text-[#317159]' : 'bg-[#F0D7D3] text-[#B93A28]' } text-xs`}>
                    <GoArrowUp size={16}/><span className='text-base'>0{orders === 'completed' ? 8 : 4}%</span>
                  </div>
                  <h2 className="text-base   text-[#818586] ml-1">vs Last week</h2>
                  </div>
              </div>

            
          </div>

        </div>

        <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5 p-3 " style={{width:'530px', height:'630px', overflowY:'auto'}}>
          <div className="flex flex-col  p-4 gap-4">
            <span className=" text-2xl font-Lato font-bold text-[#2D3436]">Age Demographic</span>


            <div className="flex items-center justify-center font-Lato relative mt-20 mr-20">
              <div className="flex items-center justify-center h-52 w-52 rounded-full bg-[#3498DB]">
                <div className="text-white text-5xl font-bold">50%</div>
              </div>
              <div className="absolute left-1/2 transform translate-x-14 -translate-y-0">
                <div className="flex items-center justify-center h-40 w-40 rounded-full bg-[#A88DD9] border-4 border-white">
                  <div className="text-white text-4xl font-bold">30%</div>
                </div>
                <div className=" left-1/2 transform -translate-x-2 -translate-y-11">
                <div className="flex items-center justify-center h-28 w-28 rounded-full bg-[#D7C17F] border-4 border-white">
                  <div className="text-white text-2xl font-bold">15%</div>
                </div>
                </div>
              </div>
              <div className="absolute top-32 left-16">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#10007F] border-2 border-white">
                  <div className="text-white text-xl font-bold">5%</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center  font-Lato text-lg text-[#575C5E] mt-20 gap-8">
              <div className='flex flex-row'>
                <div className="flex items-center justify-center w-7 h-7  bg-[#3498DB]"></div>
                <div className="ml-3 ">0-20 Age</div>
                <div className="flex items-center justify-center w-7 h-7 ml-16 bg-[#A88DD9]"></div>
                <div className=" ml-3 ">21-40 Age</div>
              </div>

              <div className='flex flex-row'>
                <div className="flex items-center justify-center w-7 h-7  bg-[#D7C17F]"></div>
                <div className=" ml-3">41-60 Age</div>
                <div className="flex items-center justify-center w-7 h-7 ml-14 bg-[#10007F]"></div>
                <div className="ml-3  ">61-80 Age</div>
              </div>
            </div>




            
          </div>

        </div>
        
      </div>

      {selectedCard &&  (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">{selectedCard.title}</span>
              <button onClick={handleClosePopup} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

            </div>

                <h2 className="text-lg  font-Lato mt-3  font-bold text-[#6F42C1]">{selectedCard.time}</h2>

            <div className="flex ">
              <div className={`mt-2 h-6 w-11 flex items-center justify-center rounded-md font-Lato  bg-[#D5E2DD] text-[#317159]'text-xs`}>
                <GoArrowUp color='#317159'/> <span className='text-[#317159]'>08%</span>
              </div>
              <h2 className="text-xs  font-Lato text-[#818586] mt-3 ml-1">vs Last week</h2>
            </div>
            
            <div className="mb-10 " style={{width:'1050px', height:'370px'}}>
             <Line data={data} CustomTooltip={CustomTooltip} ylegend = {true}/>
            </div>


          </div>
        </div>
      )}
      
    </div>
  )
}

export default Customers