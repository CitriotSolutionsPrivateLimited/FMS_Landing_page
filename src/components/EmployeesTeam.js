import React, { useEffect, useState } from 'react';
import { e1,e2,e3,e4,e5,e6 } from '../images/constants';
import { useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";
import {  IoSearch } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

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
    {img: e1, name: 'Brooklyn Simmons', designation:'Cashier', status:'Working', department:'Department', date:'12/12/2023', mail:'Simons@gmail.com', phone:'(239) 555-0108'},

    {img: e2, name: 'Leslie Alexander', designation:'Cashier', status:'Offduty', department:'Department', date:'11/10/2023', mail:'alma.lawson@example.com', phone:'(406) 555-0120'},

    {img: e3, name: 'Kathryn Murphy', designation:'Chef', status:'Working', department:'Department', date:'10/12/2023', mail:'Murphy@example.com', phone:'(704) 555-0127'},

    {img: e4, name: 'Eleanor Pena', designation:'Cashier', status:'Offduty', department:'Department', date:'12/12/2023', mail:'Pena@example.com', phone:'(316) 555-0116'},

    {img: e5, name: 'Robert Fox', designation:'Cashier', status:'Working', department:'Department', date:'11/12/2023', mail:'fox@example.com', phone:'(219) 555-0114'},

    {img: e6, name: 'Guy Hawkins', designation:'Housekeeping', status:'Offduty', department:'Department', date:'09/11/2023', mail:'hawkins@example.com', phone:'(808) 555-0111'},
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
          <span className='text-[#8C68CD] text-sm'>Team Members</span>
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
              <Option value="option1" className='text-xs'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
          <div className="ml-6 ">
            <Select
              defaultValue="Department"
              style={{ width: 160, height: 40, fontSize: '20px' }}
            >
              <Option value="option1" className='text-xl'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
        </div>
        <div className='flex flex-wrap flex-grow mt-6'>
          {employeesData.map((empl) => (
            <div className='flex flex-col bg-white mt-6 rounded-lg p-3 mr-5 mb-4 w-56 h-72' >
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <img src={empl.img} className='w-16 h-16' />
                </div>
                <div>
                  <RiDeleteBinLine size={28} color='#C76153' className='cursor-pointer'/>
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