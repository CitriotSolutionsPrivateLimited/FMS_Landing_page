import React, { useEffect, useState } from 'react';
import { ts1,timesheet1,timesheet2,timesheet3,timesheet4 } from '../images/constants';
import { useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";
import {  IoSearch } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const { Option } = Select;

function TimeSheet() {
  const navigate = useNavigate();

  // const employeesData = [
  //   {img: e1, name: 'Brooklyn Simmons', designation:'Cashier', status:'Working', department:'Department', date:'12/12/2023', mail:'Simons@gmail.com', phone:'(239) 555-0108'},

  //   {img: e2, name: 'Leslie Alexander', designation:'Cashier', status:'Offduty', department:'Department', date:'11/10/2023', mail:'alma.lawson@example.com', phone:'(406) 555-0120'},

  //   {img: e3, name: 'Kathryn Murphy', designation:'Chef', status:'Working', department:'Department', date:'10/12/2023', mail:'Murphy@example.com', phone:'(704) 555-0127'},

  //   {img: e4, name: 'Eleanor Pena', designation:'Cashier', status:'Offduty', department:'Department', date:'12/12/2023', mail:'Pena@example.com', phone:'(316) 555-0116'},

  //   {img: e5, name: 'Robert Fox', designation:'Cashier', status:'Working', department:'Department', date:'11/12/2023', mail:'fox@example.com', phone:'(219) 555-0114'},

  //   {img: e6, name: 'Guy Hawkins', designation:'Housekeeping', status:'Offduty', department:'Department', date:'09/11/2023', mail:'hawkins@example.com', phone:'(808) 555-0111'},
  // ]

  return (
    <div className=' p-8'>
      <div className="flex-grow  ">
          <h1 className=' flex flex-row font-Lato text-3xl mt-24'>Time Sheet</h1>

        <div className="flex mt-4  items-center">
          <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
          <div className="w-1 h-1  bg-[#818586] rounded-full ml-2 mr-2"></div>
          <span className='text-[#818586] text-sm'>Employees</span>
          <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
          <span className='text-[#8C68CD] text-sm'>View Timesheet</span>
        </div>
      </div>
      <div className='flex flex-col mt-9'>
        <div className='flex flex-row items-center'>
          <div className="flex items-center rounded-lg px-3 py-2 bg-[white] w-60 h-11 border hover:border-[#6F42C1]" style={{width:'290px', height:'53px'}}>
            <IoSearch color='#E1D8F2' size={20} className='mr-2'/>
            <input
              type="text"
              placeholder="Search Team Employees"
              className=" outline-none placeholder-[#B2B5B9] flex-grow text-black bg-[white] font-Lato text-base"
            />
          </div>
          <div className='ml-5'>
            <Select
              defaultValue="Select Franchise"
              style={{ width: 160, height: 40, fontSize: '20px' }}
            >
              <Option value="option1" className='text-xs'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
          <div className="ml-5 ">
            <Select
              defaultValue="Department"
              style={{ width: 160, height: 40, fontSize: '20px' }}
            >
              <Option value="option1" className='text-xl'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
          <div className="ml-5 ">
            <Select
              defaultValue="Date and Time"
              style={{ width: 160, height: 40, fontSize: '20px' }}
            >
              <Option value="option1" className='text-xl'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
          <button className='bg-[#8C68CD] text-[#FDFDFD] w-28 ml-4 h-11 font-Lato text-sm rounded-lg'>Export</button>
        </div>
        <div className='flex flex-row font-Lato mt-6 gap-4'>
          <div className='flex bg-white w-36 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#C39BD3] w-5 h-5 rounded-full'></div>
            <span>Active Time</span>
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
          <div className='flex bg-white w-44 h-10 rounded-lg items-center justify-center gap-2'>
            <div className='bg-[#FFC585] w-5 h-5 rounded-full'></div>
            <span>Uniform Violation</span>
          </div>
          <div className='flex bg-white w-36 h-10 rounded-lg items-center justify-center gap-2'>
            <img src={ts1} className=' w-5 h-5 rounded-full' />
            <span>Phone Usage</span>
          </div>
        </div>

        <div className='flex flex-row text-[#8C68CD] font-Lato mt-8 gap-20 font-bold text-lg'>
          <span>Employee Name</span>
          <span>Working Timing</span>
          <span>Active Time</span>
        </div>
        <div className='flex bg-white border mt-5 p-3' style={{width:'49%', height:'80px'}}>
            <img src={timesheet1} alt="Employee" className='w-14 h-14'/>
          <div>
            <span></span>
            <span></span>
          </div>
          <div></div>
          <div></div>
        </div>


      </div>
      
    </div>
  )
}

export default TimeSheet