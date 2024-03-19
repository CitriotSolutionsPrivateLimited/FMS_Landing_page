import React, { useState } from 'react';
import { Row, Col, Input, Form, message } from "antd";
import WorkStatus from './workstatus';
import OrderTable from './orderActivity';
import Camera from './Camera';
import { useNavigate } from "react-router-dom";
import TeamMembers from './teamMembers';
import Performers from './performers';
import Attentiveness from './attentiveness';
import { Select, DatePicker, TimePicker } from 'antd';
import { TbKarate, TbFaceMask, TbMasksTheater, TbUsersGroup, TbFlame, TbLuggage, TbShoppingCartOff, TbBox, TbWalk } from "react-icons/tb";

const { Option } = Select;
const { RangePicker } = DatePicker;

const cardData = [
  { id: 1, icon: <TbKarate size={28}/>,  title: 'Altercations', activity: 2,   green: true},
  { id: 2, icon: <TbFaceMask size={28}/>,  title: 'Masked Individuals', activity: 0,   green: true },
  { id: 3, icon: <TbMasksTheater size={28}/>, title: 'Aggressive Behaviour', activity: 1,   green: true },
  { id: 4, icon: <TbUsersGroup size={28}/>, title: 'Unusual Gatherings', activity: 0,    green: true },
  { id: 5, icon: <TbFlame size={28}/>, title: 'Fire or Safety Hazards', activity: 0,    green: true },
  { id: 6, icon: <TbLuggage size={28}/>, title: 'Unattended Bags', activity: 1,    green: false },
  { id: 7, icon: <TbShoppingCartOff size={28}/>, title: 'Theft or Shoplifting', activity: 0, green: false },
  { id: 8, icon: <TbWalk size={28}/>, title: 'Excessive Linger Time', activity: 1,   green: false },
  { id: 9, icon: <TbBox size={28}/>, title: 'Abandoned Items', activity: 0,   green: false },

];


function Dashboard() {
  const navigate = useNavigate();
  const [showCustom, setShowCustom] = useState(false);

  const handleSelectChange = (value) => {
    if (value === 'custom') {
      setShowCustom(true);
    } else {
      setShowCustom(false);
    }
  };


  return (

    // style={{width:'560px', height:'350px'}}
      <div className="flex-grow p-10 "> 
        <div className="flex  mt-24 items-center">
            <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={()=>navigate('/')}>Home</div>
            <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
            <span className='text-[#8C68CD] text-sm'>Dashboard</span>
        </div>
       <Row  className="flex-row mt-3 ">
        <Col className="md:flex-col md:p-5 rounded-lg flex flex-row  lg:w-1/2 h-96 bg-white" 
        >
          <div className="flex items-center ">
            <span className=" text-lg font-Lato font-bold text-[#B93A28]">Alerts and Critical Alerts</span>
            <div className="ml-3 ">
              <Select 
                defaultValue="Select Franchise"
                style={{ width: 150, height:35, fontSize: '20px' }}
                >
                <Option value="option1" className='text-xs'>Option 1</Option>
                <Option value="option2" className='text-xl'>Option 2</Option>
                <Option value="option3" className='text-xl'>Option 3</Option>
                </Select>
            </div>
            <div className="ml-3 ">
              <Select 
                defaultValue="Date and Time"
                style={{ width: 150, height:35, fontSize: '20px' }}
                onChange={handleSelectChange}
                >
                <Option value="today" className='text-xl'>Today</Option>
                <Option value="week" className='text-xl'>This Week</Option>
                <Option value="month" className='text-xl'>This Month</Option>
                <Option value="custom" className='text-xl'>Custom</Option>
                </Select>
                {showCustom && (
        <div style={{ marginTop: 10 }}>
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}
            style={{ marginRight: 10 }}
          />
        </div>)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4" >
        {cardData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-3  mt-2">
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
      </div>


    
  );
}

export default Dashboard;
