import React, { useState } from 'react';
import { d1, emp1, emp2, emp3, emp4 } from '../images/constants';
import Sidebar from './sidebar';
import DashboardHeader from './dashboardHeader';
import { Row, Col, Input, Form, message } from "antd";
import WorkStatus from './workstatus';
import OrderTable from './orderActivity';
import { useNavigate } from "react-router-dom";


import TeamMembers from './teamMembers';

import Performers from './performers';
import Attentiveness from './attentiveness';



function Dashboard() {
  const navigate = useNavigate();


  return (


      <div className="flex-grow p-8 "> 
      <div className="flex  mt-24 items-center">
            <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={()=>navigate('/')}>Home</div>
            <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
            <span className='text-[#8C68CD] text-sm'>Dashboard</span>
        </div>
      <Row  className="flex-row mt-3 ">
        <Col className="dashboard md:flex-row md:p-5 rounded-lg flex flex-row items-center justify-between" style={{width:'560px', height:'350px'}}>
          <div className='flex flex-col w-2/3'>
            <h1 className="md:text-4xl lg:text-3xl sm:text-xl text-white  leading-tight font-Lato"> Welcome,</h1>
            <p className="mt-1 md:text-xl lg:text-xl sm:text-2xl text-white  leading-tight  font-medium font-Lato">Ralph Edwards</p>
            <p className="text-white md:text-base sm:text-lg my-5 leading-relaxed font-Lato">Enhanced monitoring capabilities for detailed insights, improving employee assessments</p>
            <button className="add-employee-button bg-white rounded-lg w-32 h-9 text-[#6F42C1] font-Lato">Add Employees</button>
          </div>
          <div className='flex flex-row w-7/12'>
            <img src={d1} />
          </div>
        </Col>
        <TeamMembers />
        <div className='flex w-full flex-row mt-5  justify-between'>
          <WorkStatus />
        </div>
        <div className='flex w-full flex-row mt-5  justify-between'>
          <Attentiveness />
        </div>
        <Performers />
          </Row>
      </div>


    
  );
}

export default Dashboard;
