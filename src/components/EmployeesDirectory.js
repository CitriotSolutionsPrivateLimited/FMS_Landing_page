import React, { useEffect, useState } from 'react';
import { e1,e2,e3,e4,e5,e6,empl2, empl3, empl4, empl5,empl6,empl7, empl8, empl9 } from '../images/constants';
import { useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";
import {  IoSearch } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { TbTrash } from 'react-icons/tb';
const { Option } = Select;

function EmployeesTeam() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const employeesData = [
    {img: empl9 ,name: 'Amrish Ilyas', designation: 'Waiter', status:'Working', department:'Department', date:'12/12/2023', mail:'amrish@gmail.com', phone:'9786765436'},

    { img: empl2, name: 'Avantas Ghosal', designation: 'Cashier', status:'Offduty', department:'Department', date:'11/10/2023', mail:'avantas@example.com', phone:'8971438294'},

    { img: empl3, name: 'Jayadev Mitali', designation: 'Chef', status:'Working', department:'Department', date:'10/12/2023', mail:'jayadev@example.com', phone:'9453275432'},

    { img: empl5, name: 'Vijai Sritharan', designation: 'Assistant Manager',status:'Offduty', department:'Department', date:'12/12/2023', mail:'vijai@example.com', phone:'7654398765'},

    { img: empl6, name: 'Hardeep Suksma', designation: 'Waiter',status:'Working', department:'Department', date:'11/12/2023', mail:'hardeep@example.com', phone:'8126745923'},

    { img: empl7, name: 'Barsati Sandipa', designation: 'Chef', status:'Offduty', department:'Department', date:'09/11/2023', mail:'barsati@example.com', phone:'9283626183'},
  ]

  return (
    <div className='p-8 w-full'>
      <div className="flex-grow  ">
        <div className='flex flex-row font-Lato text-3xl mt-24'>
          <h1 className='flex text-[#6F42C1] mr-2'>6</h1>
          <h1 className='flex'>Employees</h1>
        </div>
        <div className="flex mt-4  items-center">
          <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
          <div className="w-1 h-1  bg-[#818586] rounded-full ml-2 mr-2"></div>
          <span className='text-[#818586] text-sm'>Employees</span>
          <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
          <span className='text-[#8C68CD] text-sm'>Employee Directory</span>
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
          <div className='ml-6'>
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
          <div className="ml-6 ">
            <Select
              defaultValue="Department"
              style={{ width: 160, height: 40, fontSize: '20px' }}
            >
              <Option value="today" className='text-xl'>Today</Option>
                <Option value="week" className='text-xl'>This Week</Option>
                <Option value="month" className='text-xl'>This Month</Option>
                <Option value="custom" className='text-xl'>Custom</Option>
            </Select>
          </div>
        </div>
        <div className='flex flex-wrap flex-grow mt-6'>
          {employeesData.map((empl) => (
            <div className='flex flex-col bg-white mt-6 rounded-lg p-3 mr-5 mb-4 w-56 h-72' >
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <img src={empl.img} className='w-16 h-16 rounded-full' />
                </div>
                <div>
                  <TbTrash size={28} color='#C76153' className='cursor-pointer'/>
                </div>
              </div>
              <span className=' font-Lato text-xs mt-2'>{empl.name}</span>
              <span className='text-[#818586] font-Lato text-xs mt-1'>{empl.designation}</span>
              <span className={` ${empl.status === 'Working' ? 'text-[#317159]' : 'text-[#B93A28]' } font-Lato text-xs mt-1` }>{empl.status}</span>
              <div className='bg-[#F8F9FA] mt-6 rounded-md p-2' >
                <div className='flex flex-row font-Lato text-xs justify-between '>
                  <div className='flex flex-col'>
                  <span className='text-[#818586] '>{empl.department}</span>
                  <span className='mt-1'>{empl.designation}</span>
                  </div>
                  <div className='flex flex-col'>
                  <span className='text-[#818586]'>Joined On</span>
                  <span className='mt-1'>{empl.date}</span>
                  </div>
                </div>
                <div className='flex flex-col font-Lato text-xs mt-3'>
                  <div className='flex flex-row'>
                  <CiMail size={17} /> <span className='ml-2'>{empl.mail}</span>
                  </div>
                  <div className='flex flex-row mt-2'>
                  <FiPhone size={17}/><span className='ml-2'>{empl.phone}</span>
                  </div>
                </div>
              </div>


            </div>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default EmployeesTeam