import React, { useState } from 'react';
import { Row, Col, Empty } from "antd";
import WorkStatus from './workstatus';
import Camera from './Camera';
import { useNavigate } from "react-router-dom";
import TeamMembers from './teamMembers';
import Performers from './performers';
import Attentiveness from './attentiveness';
import { Select, DatePicker } from 'antd';
import {  TbMasksTheater, TbUsersGroup, TbFlame, TbLuggage, TbShoppingCartOff, TbBox, TbWalk, TbRuler2 } from "react-icons/tb";
import { rest1, rest2 } from '../images/constants';
import { TbLivePhoto, TbDeviceCctv } from "react-icons/tb";
import {  GoChevronRight, GoChevronLeft } from "react-icons/go";


const { Option } = Select;
const { RangePicker } = DatePicker;

const cardData = [
  { id: 1, icon: <TbMasksTheater size={28}/>, title: 'Aggressive Behaviour', activity: 1,   green: true },
  { id: 2, icon: <TbUsersGroup size={28}/>, title: 'Unusual Gatherings', activity: 0,    green: true },
  { id: 3, icon: <TbWalk size={28}/>, title: 'Excessive Linger Time', activity: 2,   green: TbRuler2 },
  { id: 4, icon: <TbShoppingCartOff size={28}/>, title: 'Suspected Theft or Shoplifting', activity: 0, green: false },
  { id: 5, icon: <TbLuggage size={28}/>, title: 'Unattended Bags or Packages', activity: 0,    green: false },
  { id: 6, icon: <TbFlame size={28}/>, title: 'Fire or Safety Hazards', activity: 0,    green: false },
  // { id: 1, icon: <TbKarate size={28}/>,  title: 'Altercations', activity: 2,   green: true},
  // { id: 2, icon: <TbFaceMask size={28}/>,  title: 'Masked Individuals', activity: 0,   green: true },
  // { id: 9, icon: <TbBox size={28}/>, title: 'Abandoned Items', activity: 0,   green: false },

];

const popData1 = [
  {id:1, time:'12:10pm Sat 14,2024', img: rest1},
  {id:2, time:'12:45pm Sat 14,2024', img: rest2}
]

const popData2 = [
  {id:1, time:'12:10pm Sat 14,2024', img: rest1}
]


function Dashboard() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedId, setSelectedId] = useState(1)
  const [image, setImage] = useState(rest1);
  const [popData, setPopData] = useState([])
  const [selectedOption, setSelectedOption] = useState("Date and Time");

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  }

  const handleDatePickerChange = () => {

  }

  const handleCardClick = (card) => {
      setSelectedCard(card);
      if(card.activity === 1){
        setPopData(popData2)
      } else {
        setPopData(popData1)
      }

  };

  const handleClosePopup = () => {
    setSelectedCard(null);
    setImage(rest1);
    setSelectedId(1);
  };

  const handleSideCardClick = (card, image, rest1, rest2) => {
    setImage(image === rest2 ? rest1 : rest2 )
    setSelectedId(card.id)
  }

  


  return (

    // style={{width:'560px', height:'350px'}}
      <div className="flex-grow p-10 font-Lato"> 
        <div className="flex  mt-24 items-center">
            <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={()=>navigate('/')}>Home</div>
            <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
            <span className='text-[#8C68CD] text-sm mr-52'>Dashboard</span>
            <div className="ml-72 ">
              <Select 
                defaultValue="Select Franchise"
                style={{ width: 150, height:35, fontSize: '20px' }}
                >
                <Option value="Indiranagar" className='text-xs'>Indiranagar</Option>
                <Option value="Kormangala" className='text-xs'>Kormangala</Option>
                <Option value="HSR Layout" className='text-xs'>HSR Layout</Option>
                <Option value="Jayanagar" className='text-xs'>Jayanagar</Option>
                <Option value="Electronic City" className='text-xs'>Electronic City</Option>
                <Option value="all" className='text-xs'>All Franchise</Option>

                </Select>
            </div>
            <div className="ml-3 ">
              <Select
                defaultValue="Date and Time"
                style={{ width: 150, height:35, fontSize: '20px' }}
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
       <Row  className="flex-row mt-3 ">
        <Col className="md:flex-col md:p-5 rounded-lg flex flex-row  lg:w-5/12 h-96 bg-white" 
        >
          <div className="flex items-center ">
            <span className=" text-lg font-Lato font-bold text-[#B93A28]">Alerts and Critical Alerts</span>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-4" >
        {cardData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-3  mt-5" onClick={() => handleCardClick(card)}>
            <div className="flex flex-row items-center gap-1">
              <div className={` ${card.green ? 'bg-[#BD992A]' : 'bg-[#B93A28]'} text-white h-10 w-10 flex items-center justify-center rounded-full `}>{card.icon}</div>
              <div className='flex flex-col -mr-3'>
              <h2 className="text-lg font-Lato">{card.activity}</h2>
              <h2 className="text-xs font-Lato text-[#575C5E]">{card.title}</h2>
              </div>
            </div>
           </div>
        ))}
        </div>
        </Col>
        <TeamMembers />
        <div className='flex flex-row w-full mt-5  justify-between'>
          <Camera />
        </div>
        <div className='flex flex-row w-full mt-5  justify-between'>
          <WorkStatus />
        </div>
        <div className='flex flex-row w-full mt-5  justify-between'>
          <Attentiveness />
        </div>
        <Performers />
          </Row>


          {selectedCard && selectedCard.activity > 0 &&  (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-2/3">
            <div className="flex items-center justify-between">
              <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">{selectedCard.title}</span>
              <button onClick={handleClosePopup} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

            </div>
            <div className='mt-3 flex flex-row'>
              <div className='flex flex-col w-3/5'>
                <div className='flex flex-row w-full h-10 bg-[#F8F9FA] rounded-lg items-center p-3'>
                  <span>Camera 1</span>
                  <TbLivePhoto size={22} className='ml-1 mr-12' color='#317159' />
                  <span className='ml-80'>1/2</span>
                  <TbDeviceCctv size={22} className='ml-1' />
                </div>
                <div className=' mt-3'>
                  <img src={image} alt="" className='w-full h-72'/>

                </div>
                <div className='flex mt-3 font-Lato justify-between'>
                  <div className="flex flex-col">
                    <div>
                      <span className='text-[#818586]'>Checked In </span>
                      <span>: 11:45am</span>
                    </div>
                    <div>
                      <span className='text-[#818586]'>Checked Out </span>
                      <span>: 01:00pm</span>
                    </div>
                  </div>
                  <div className='flex items-center'>
                  {popData.length > 1 && (
                  <> {image !== rest1 && <button className='bg-[#8C68CD] flex flex-row items-center w-28 h-9 rounded-lg text-white mr-2' onClick={() => setImage(image === rest2 ? rest1 : rest2)}>
                        <GoChevronLeft size={24} className='ml-2'/>
                        <span className='mr-3'>Previous </span>

                      </button>}
                      <button className='bg-[#8C68CD] flex flex-row items-center w-20 h-9 rounded-lg text-white' onClick={() => setImage(image === rest1 ? rest2 : rest2)}>
                          <span className='ml-3'>Next </span>
                          <GoChevronRight size={24} />
                        </button></>)}
                    <input type="number" id="quantity" value={image === rest2 ? '2' : '1'} class="mr-2 ml-2 w-12 h-8 rounded-lg border border-[#8C68CD] focus:border-[#8C68CD] outline-none" /> 
                    <span>of {popData.length}</span>

                  </div>
                </div>


              </div>
              <div className='flex flex-col ml-4'>
                {popData.map((card) => (
                <div key={card.id} className={`flex flex-row ${selectedId === card.id ? 'bg-[#EFEFF0]' : '' } h-28 rounded-lg items-center p-3 cursor-pointer mb-2`} onClick={()=>handleSideCardClick(card, image, rest1, rest2)}>
                  <div className='flex flex-col'>
                    <span className='text-[#BD992A]'>{selectedCard.title} {card.id}</span>
                    <span>Camera 1</span>
                    <span className='text-[#818586]'>{card.time}</span>
                  </div>
                <img src={card.img} alt="" className='h-20 w-28 ml-4'/>
                </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      )}

        {selectedCard && selectedCard.activity === 0 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={()=> handleClosePopup()}>
            <div className="bg-white rounded-lg shadow-lg p-6">
          <Empty />
          </div>
          </div>
        )}
      </div>



    
  );
}

export default Dashboard;
