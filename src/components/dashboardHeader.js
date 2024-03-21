import React, { useState } from 'react';
import { LuCalendarDays } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { newLogo, profile } from '../images/constants';


function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
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

  const getCurrentDateTime = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hour = date.getHours();
    const minute = date.getMinutes();
  
    let amPm = 'AM';
    if (hour >= 12) {
      amPm = 'PM';
      hour -= 12;
    }
    if (hour === 0) {
      hour = 12;
    }
  
    const formattedDate = `${day}${getOrdinalSuffix(day)} ${month} ${year}, ${hour}:${minute < 10 ? '0' : ''}${minute} ${amPm}`;
    return formattedDate;
  };
  
  // Function to get the ordinal suffix for the day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-white p-4 flex justify-evenly items-center z-50">
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <img src={newLogo} style={{ cursor: 'pointer' }} className="md:w-40 md:h-14 sm:w-24 sm:h-8" />

          <div className=" ml-20 h-14 w-14 bg-[#EFEFF0] rounded-full flex items-center justify-center">
            <LuCalendarDays color='#6F42C1' size={40}/>
          </div>
          
          <div className="flex flex-col ml-3">
            <span className="mr-2 text-[#818586] font-Lato text-lg">{getCurrentDateTime()}</span>
            <span className='text-[#2D3436] font-Lato text-lg'>Bean Bliss Café, Bengaluru</span>
          </div>
        </div>
      </div>
      
      <div className={`flex items-center rounded-2xl px-3 py-2 bg-[#F8F9FA] w-96 h-14 border ${isFocused ? 'border-[#6F42C1]' : 'border-gray-100'} font-maven `}>
        <FiSearch color={isFocused ? '#6F42C1' : '#E1D8F2'} size={26} className='mr-2'/>
        <input
        type="text"
        placeholder="Search your Employees or Store here..."
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="outline-none placeholder-[#B2B5B9] flex-grow text-black bg-[#F8F9FA]  text-base border-transparent  placeholder-light font-extralight "
        style={{fontWeight: 100}}
      />
      </div>

      <div className='h-12 w-12 bg-[#D6EAF7] flex items-center justify-center rounded-md'>
          <IoNotificationsOutline color='#3498DB' size={30}/>
      </div>
      
      <div className="flex items-center ">
        <img src={profile} alt="User Profile" className="w-16 h-16 " />
        <div className="flex flex-col ml-3">
          <span className="mr-2  text-[#2D3436] font-Lato text-lg">Advitiya Sujeet</span>
          <span className='text-[#818586] font-Lato'>Manager</span>
        </div>
      </div>
    </div>



  );
}

export default DashboardHeader;
