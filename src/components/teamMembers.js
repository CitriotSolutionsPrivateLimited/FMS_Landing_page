import React,{useState, useRef, useEffect} from 'react';
import { emp1, emp2, emp3, emp4, empl2, empl3, empl4, empl5,empl6,empl7, empl8, empl9 } from '../images/constants';
import {  IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Menu, Dropdown, Button } from 'antd';
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { TbClockRecord, TbCheck } from "react-icons/tb";
import { MdOutlinePunchClock } from "react-icons/md";
import { PiTextAlignCenterLight } from "react-icons/pi";

const menuOptions = [
  { key: '1', label: 'All Designation' },
  { key: '2', label: 'Waiter' },
  { key: '3', label: 'Cashier' },
  { key: '4', label: 'Assistant Manager'},
  { key: '4', label: 'Chef'}
];

const teamMembersData = [
  {img: empl9 ,name: 'Amrish Ilyas', designation: 'Waiter', time: '14h 30min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: empl2, name: 'Avantas Ghosal', designation: 'Cashier', time: '4h 30min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: empl3, name: 'Jayadev Mitali', designation: 'Chef', time: '2h 20min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: empl5, name: 'Vijai Sritharan', designation: 'Assistant Manager', time: '2h 20min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: empl6, name: 'Hardeep Suksma', designation: 'Waiter', time: '2h 20min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },
  { img: empl7, name: 'Barsati Sandipa', designation: 'Chef', time: '2h 20min', dTime: '9:00 am to 6:00pm', aTime: '9:20 am to 6:20pm' },

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
    // style={{width:'500px', maxHeight:'350px', overflowY:'auto'}}
    <div className="flex flex-col md:p-3 bg-white rounded-lg lg:w-5/12 h-96 ml-4" style={{width:'470px', overflowY:'auto'}}>
      <div className="flex items-center  mb-4">
        <div className="flex flex-col">
          <span className="text-[#2D3436] font-Lato text-sm font-semibold">Team Members</span>
          <span className=' text-[#818586] font-Lato text-xs'>{teamNumber > 0 ? `6 At Work` : 'No members added'}</span>
        </div>
        <div className={`ml-2 flex items-center rounded-lg px-3 py-2 bg-[#F8F9FA] w-48 h-9 border ${isFocused ? 'border-[#6F42C1]' : 'border-gray-100'}`} >
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
        <div className="flex items-center ml-1 text-sm text-[#8185] w-28">
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
        {/* style={{ width: '450px', height: '50px' }} */}
        {teamMembersData.map((member, index) => (
          <><div  className='flex items-center relative lg:w-12/12 h-11'>
            <div className='flex flex-col items-center w-16'>
              <div className={`w-5 h-5 border-4 ${memberDataVisibility[index] ? 'border-[#3498DB]' : 'border-[#8C68CD]'} rounded-full`} />
              <span className="text-[#818586] font-Lato text-xs mt-1">{member.time}</span>
            </div>
            <div className={`flex flex-row ${memberDataVisibility[index] ? 'bg-[#3498DB]' : 'bg-[#8C68CD]'}  rounded-lg items-center ml-4 w-96 h-10`} >
              <img src={member.img} className="flex w-12 h-12 rounded-full  -ml-2" />
              <span className='text-[#FDFDFD] ml-1 font-Lato w-32'>{member.name}</span>
              <button className={`flex bg-white  ${memberDataVisibility[index] ? 'text-[#3498DB]' : 'text-[#8C68CD]'}  rounded-3xl h-7 w-24 items-center justify-center font-Lato  text-xs`}>{member.designation}</button>
              {memberDataVisibility[index] ? (
                <HiChevronUp size={24} color="#fff" className="ml-16 cursor-pointer" onClick={() => toggleMemberDataVisibility(index)} />
              ) : (
                <HiChevronDown size={24} color="#fff" className="ml-16 cursor-pointer" onClick={() => toggleMemberDataVisibility(index)} />
              )}
              <div>
                {index !== teamMembersData.length - 1 && ( // Render line for all members except the last one
                <div className={`absolute top-10 left-7 border-l border-dotted border-[#818586] ${memberDataVisibility[index] ? 'h-32' :'h-full top-9'}`} />
                )}
              </div>
            </div>
          </div>
          <div className='flex items-center ml-16 mt-5 mb-3'>
              {memberDataVisibility[index] && (
                <div className='flex flex-col text-[#2D3436] font-Lato '>
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
