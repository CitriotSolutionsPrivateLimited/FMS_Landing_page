import React,{useState, useRef, useEffect} from 'react';
import { d1, emp1, emp2, emp3, emp4 } from '../images/constants';
import {  IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Menu, Dropdown, Button } from 'antd';
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { TbClockRecord, TbCheck } from "react-icons/tb";
import { MdOutlinePunchClock } from "react-icons/md";
import { PiTextAlignCenterLight } from "react-icons/pi";

const menuOptions = [
  { key: '1', label: 'All Designation' },
  { key: '2', label: 'Designation 1' },
  { key: '3', label: 'Designation 2' },
  { key: '4', label: 'Designation 3'}
];

const teamMembersData = [
  {img: emp1 ,name: 'Wade Warren', designation: 'Designation', time: '14h 30min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: emp2, name: 'Jenny Wilson', designation: 'Designation', time: '4h 30min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: emp3, name: 'Albert Flores', designation: 'Designationr', time: '2h 20min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: emp3, name: 'Albert Flores', designation: 'Designation', time: '2h 20min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },

];

const TeamMembers = () => {

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All Designation');
  const [selectedKey, setSelectedKey] = useState('1');
  const [memberDataVisibility, setMemberDataVisibility] = useState(Array(teamMembersData.length).fill(false));
  const [teamNumber, setTeamNumber] = useState(1);

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


  // Function to handle changes in the select element
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const toggleMemberDataVisibility = (index) => {
    const updatedVisibility = [...memberDataVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setMemberDataVisibility(updatedVisibility);
  };



  const handleMenuSelect = ({ key }) => {
    const selected = menuOptions.find(option => option.key === key);
    setSelectedKey(key);
    setSelectedOption(selected ? selected.label : 'All Designation');
  };

  const menu = (
    <Menu onClick={handleMenuSelect}>
      {menuOptions.map(option => (
        <Menu.Item key={option.key}>
          <div className='flex flex-row text-[#2D3436] text-xs font-Lato'>
        <span className={`mr-10 mb-2 ${selectedKey === option.key ? 'text-[#575C5E]' : 'text-[#2D3436]'}`}>{option.label}</span>
        {selectedKey === option.key && <TbCheck size={18} color='#6F42C1'  style={{ marginLeft: 'auto' }} />}
        </div>
      </Menu.Item>
      ))}
    </Menu>
  );
 

  return (
    <div className="flex flex-col w-max md:p-5 bg-white rounded-lg" style={{width:'500px', maxHeight:'350px', overflowY:'auto'}}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-[#2D3436] font-Lato text-base font-semibold">Team Members</span>
          <span className=' text-[#818586] font-Lato text-xs'>{teamNumber > 0 ? `14 At Work` : 'No members added'}</span>
        </div>
        <div className={`flex items-center rounded-lg px-3 py-2 bg-[#F8F9FA] w-60 h-11 border ${isFocused ? 'border-[#6F42C1]' : 'border-gray-100'}`} style={{width:'210px', height:'36px'}}>
          <IoSearch color={isFocused ? '#6F42C1' : '#E1D8F2'} size={16} className='mr-2'/>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Search Team Member"
            className=" outline-none placeholder-[#B2B5B9] flex-grow text-black bg-[#F8F9FA] font-Lato text-xs"
          />
        </div>
        <div className="flex items-center ml-1 text-sm text-[#8185] w-28" style={{width:'120px'}}>
          <Dropdown overlay={menu} trigger={['click']}  >
            <div className="flex items-center" style={{ cursor: 'pointer' }}>
              <PiTextAlignCenterLight color='#6F42C1' size={20}/>
            </div>
          </Dropdown>
          <span className="ml-1 text-[#6F42C1] text-xs">{selectedOption}</span>
        </div>


      </div>

      {teamNumber > 0 ? 

      <div className="flex-col items-center justify-between " >
        
        {teamMembersData.map((member, index) => (
          <><div style={{ width: '480px', height: '50px' }} className='flex items-center relative'>
            <div className='flex flex-col items-center w-16'>
              <div className={`w-5 h-5 border-4 ${memberDataVisibility[index] ? 'border-[#3498DB]' : 'border-[#8C68CD]'} rounded-full`} />
              <span className="text-[#818586] font-Lato text-xs mt-1">{member.time}</span>
            </div>
            <div className={`flex flex-row ${memberDataVisibility[index] ? 'bg-[#3498DB]' : 'bg-[#8C68CD]'}  rounded-lg items-center ml-4`} style={{ width: '380px', height: '40px' }}>
              <img src={member.img} className="flex w-12 h-12   -ml-2" />
              <span className='text-[#FDFDFD] ml-3 font-Lato'>{member.name}</span>
              <button className={`flex bg-white  ${memberDataVisibility[index] ? 'text-[#3498DB]' : 'text-[#8C68CD]'}  rounded-3xl h-7 w-24 items-center justify-center font-Lato ml-5 text-xs`}>{member.designation}</button>
              {memberDataVisibility[index] ? (
                <HiChevronUp size={24} color="#fff" className="ml-24 cursor-pointer" onClick={() => toggleMemberDataVisibility(index)} />
              ) : (
                <HiChevronDown size={24} color="#fff" className="ml-24 cursor-pointer" onClick={() => toggleMemberDataVisibility(index)} />
              )}
              <div>
                {index !== teamMembersData.length - 1 && ( // Render line for all members except the last one
                <div className={`absolute top-10 left-8 border-l border-dotted border-[#818586] ${memberDataVisibility[index] ? 'h-36' :'h-full'}`} />
                )}
              </div>
            </div>
          </div>
          <div className='flex items-center ml-16 mt-5 mb-3'>
              {memberDataVisibility[index] && (
                <div className='flex flex-col text-[#2D3436] font-Lato font-semibold'>
                  <div className='flex flex-row'>
                    <MdOutlinePunchClock color='#575C5E' size={18} />
                    <span className='ml-1 text-xs '>Designated Time {member.dTime}</span>
                  </div>
                  <div className='flex flex-row mt-4'>
                    <TbClockRecord color='#575C5E' size={18} />
                    <span className='ml-1 text-xs'>Actual Time {member.aTime}</span>
                  </div>
                  <button className="flex bg-white text-[#8C68CD] border-[#8C68CD] border rounded-lg h-7 w-28 items-center justify-center font-Lato text-xs mt-4 font-thin">View Time Sheet</button>

                </div>
              )}
          </div></>
        ))}
      </div> : <div className='flex flex-col items-center justify-center font-Lato mt-20' >
        <span className='text-[#2D3436] font-semibold text-xl'>No Data To Show</span>
        <span className='text-[#818586] text-base '>Please Add Your Employees</span>
      </div>  }    
    </div>
  );
};

export default TeamMembers;
