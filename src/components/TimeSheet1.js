import React, { useEffect, useState, useRef } from 'react';
import { ts1,timesheet1,timesheet2,timesheet3,timesheet4, } from '../images/constants';
import { useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";
import {  IoSearch } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import ImageCarousel from './timeSheetSlider';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const { Option } = Select;

const timelineTimes = [
  '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

function TimeSheet() {
  const navigate = useNavigate();
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const employeesData = [
    {img: timesheet1, name: 'Jerome Bell', designation:'Waiter', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min',
    timeline:[
    {
    start:'9:00',
    stop:'10:00',
    status:'active'
    },
    {
    start:'10:00',
    stop:'11:00',
    status:'phone'
    },
    {
    start:'11:00',
    stop:'12:00',
    status:'idle'
    },
    {
    start:'12:00',
    stop:'13:00',
    status:'phone'
    },
    {
    start:'13:00',
    stop:'14:00',
    status:'away'
    },
    {
    start:'14:00',
    stop:'15:00',
    status:'violation'
    },
    {
    start:'15:00',
    stop:'16:00',
    status:'exit'
    },

]},

    {img: timesheet2, name: 'Jenny Wilson', designation:'Cashier', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min'},

    {img: timesheet3, name: 'Robert Fox', designation:'Chef', checkIn:'9:00AM', CheckOut:'working', active:'4h:20 Min'},

    {img: timesheet4, name: 'Bessie Cooper', designation:'Waiter', checkIn:'9:00AM', CheckOut:'5:00PM', active:'6h:20 Min'},

  ]

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };


  const handleSlideChange = (event, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handleNextClick = () => {
    
    sliderRef.current.next();
  };

  const handlePrevClick = () => {
    sliderRef.current.prev();
  };

  const carouselSettings = {
    loop: false,
    mouseDrag: false,
    autoplay: false,
    items: isMobile ? 1 : 3,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      600: {
        items: 3,
        slideBy: 1,
      },
      1280: {
        items: 8,
        slideBy: 1,
      },
    },
    onSlideChanged: handleSlideChange,
  };

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
        <div className="grid grid-cols-2">
  <div className='grid grid-cols-3 text-[#8C68CD] font-Lato mt-8 font-bold text-lg gap-2'>
    <span>Employee Name</span>
    <span>Working Timing</span>
    <span>Active Time</span>
  </div>
  <div className="pt-4 pb-4 grid grid-cols-3 items-center">
  <div className="flex justify-end">
    <FaChevronLeft onClick={handlePrevClick} className="text-xl cursor-pointer" />
  </div>
  <div className="col-span-1">
    <OwlCarousel ref={sliderRef} {...carouselSettings} className="overflow-hidden">
      {timelineTimes.map((time, index) => (
        <div className="text-center" key={index}>
          {time}
        </div>
      ))}
    </OwlCarousel>
  </div>
  <div className="flex justify-start">
    <FaChevronRight onClick={handleNextClick} className="text-xl cursor-pointer" />
  </div>
</div>


</div>



        {/* <div className='flex bg-white border mt-5 p-3 items-center font-Lato' style={{width:'43%', height:'80px'}}>
            <img src={timesheet1} alt="Employee" className='w-14 h-14'/>
          <div className='flex flex-col ml-2'>
            <span>Jerome Bell</span>
            <span>Waiter</span>
          </div>
          <div className='ml-8'>
            <div>
              <span className='text-[#818586]'>Check In </span>
              <span >: 9:00AM</span>
            </div>
            <div>
              <span className='text-[#818586]'>Check Out </span>
              <span>: 05:00PM</span>
            </div>
          </div>
          <span className='ml-14'>6h:20 Min</span>
        </div> */}
        <div>
          {employeesData.map((empl) => 
            <table className="border border-collapse mt-5 ">
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 w-20">
                    <img src={empl.img} alt="Employee" className="w-14 h-14" />
                  </td>
                  <td className="w-32">
                    <div className="flex flex-col">
                      <span>{empl.name}</span>
                      <span>{empl.designation}</span>
                    </div>
                  </td>
                  <td className="p-3 w-48">
                    <div>
                      <div>
                        <span className="text-[#818586]">Check In</span>
                        <span>: {empl.checkIn}</span>
                      </div>
                      <div>
                        <span className="text-[#818586]">Check Out</span>
                        <span>: {empl.CheckOut}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 ">
                    <span>{empl.active}</span>
                  </td>
                  <td className='border p-2 '>
                    <div className='flex flex-row'>
                    <div className="border border-[#9B59B6] p-4 rounded-md bg-[#C39BD3] h-16 w-28"></div>
                    <div className="border border-white rounded-lg h-16 w-9">
                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full mr-2 inline-block"></div>

                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full inline-block"></div>
                    </div>
                    <div className="border border-[#5CACE2] p-4 rounded-md bg-[#85C1E9] h-16 w-12"></div>
                    <div className="border border-white rounded-lg h-16 w-11">
                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full mr-2 inline-block"></div>

                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full inline-block"></div>

                    </div>
                    <div className="border border-[#B93A28] p-4 rounded-md bg-[#D5897E] h-16 w-14"></div>
                    <div className="border border-[#FEA94B] p-4 rounded-md bg-[#FFC585] h-16 w-7 ml-1"></div>
                    <div className="border border-[#BD992A] p-4 rounded-md bg-[#D7C17F] h-16 w-16 ml-1 mr-1"></div>
                    <div className="border border-[#9B59B6] p-4 rounded-md bg-[#C39BD3] h-16 w-24"></div>
                    <div className="border border-white rounded-lg h-16 w-11">
                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full mr-2 inline-block"></div>

                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full mr-2 inline-block"></div>
                      <div className="border border-black h-full inline-block"></div>
                    </div>
                    <div className="border border-[#9B59B6] p-4 rounded-md bg-[#C39BD3] h-16 w-20"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            )}
        </div>


      </div>


    </div>
  )
}

export default TimeSheet