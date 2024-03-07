import React, { useState,useEffect } from 'react';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';
import { FaSearchDollar } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import {  FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';
import { dashboard, setting} from '../images/constants';
import { IoLogOutOutline } from "react-icons/io5";
import { TbUsersGroup, TbReportAnalytics, TbChevronLeft, TbBriefcase } from "react-icons/tb";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { TbChartPie } from "react-icons/tb";



function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [employeesView, setEmployeesView] = useState(true);
  const [subSection, setSubSection] = useState('TeamMembers')
  const patha= window.location.pathname;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleClick = () => {

  }


  useEffect(() => {
    if (patha === '/Userhome/dashboard') {
      setActiveSection(`Dashboard`)
    } else if (patha === '/Userhome/Employees') {
      setActiveSection(`Employees`)
    } else if (patha === '/Userhome/Customers') {
      setActiveSection(`Customers`)
    } else if (patha ==='/Userhome/Employees/TeamMembers' || patha === '/Userhome/Employees/ViewTimeSheet'){
      setActiveSection(`Employees`)
    } else {
      setActiveSection(`Dashboard`)
    }
	},[])
  return (
    <div className="bg-white h-screen p-12 flex flex-col sticky top-0" style={{width: '280px'}}>
      <ul className="flex flex-col flex-grow text-base font-Lato mt-20 gap-2">
        <li className={`p-4  flex items-center text-base ${activeSection === 'Dashboard' ? 'h-20 w-48 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `} style={{height:'50px'}}
        onClick={() => setActiveSection('Dashboard')}>
          <Link to="/Userhome/dashboard" className="flex items-center">
            <TbChartPie size={24}  className={`mr-2 ${ activeSection === 'Dashboard' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Dashboard
          </Link>
          {activeSection === 'Dashboard' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-[#F8F9FA] h-14 w-14 rounded-full -mr-56 items-center justify-center">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
              </div>
            </div>
          )}
        </li>

        <li className={`p-4 flex items-center text-base ${activeSection === 'Employees' ? 'h-20 w-48 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `} style={{height:'50px'}}
        onClick={() => setActiveSection('Employees')}>
          <Link to="/Userhome/Employees/TeamMembers" className="flex items-center">
            <TbBriefcase size={24}  className={`mr-2 ${ activeSection === 'Employees' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Employees
          </Link>
          {employeesView ? <HiChevronUp size={24} className={` ml-8 cursor-pointer ${ activeSection === 'Employees' ? 'text-white' : 'text-[#AAADAE]' } `} onClick={()=> setEmployeesView(false)}/> : <HiChevronDown size={24} className={` ml-8 cursor-pointer ${ activeSection === 'Employees' ? 'text-white' : 'text-[#AAADAE]' } `} onClick={()=> setEmployeesView(true)} /> }
          {activeSection === 'Employees' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-[#F8F9FA] h-14 w-14 rounded-full -mr-32 items-center justify-center">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
              </div>
            </div>
          )}
        </li>

        {activeSection === 'Employees' && employeesView && (
        <div className={`flex text-base pl-8`} onClick={()=>handleClick()}>
            <div className="">
                  <ul>
                    {/* <div className='flex flex-row items-center justify-center'>
                      {subSection === 'timeSheet' && <div className='bg-[#6F42C1] rounded-full h-3 w-3 '></div>}
                      <li className={`p-4 flex items-center text-base ${subSection === 'timeSheet' ? 'text-[#6F42C1]  font-Lato' :  'text-[#818586]'} `} onClick={() => setSubSection('timeSheet')}>
                      <Link to='/Userhome/Employees/ViewTimeSheet'>View Time Sheet</Link> 
                      </li>
                    </div> */}
                      <div className='flex flex-row items-center justify-center'>
                      {subSection === 'TeamMembers' && <div className='bg-[#6F42C1] rounded-full h-3 w-3 '></div>}
                      <li className={`p-4 flex items-center text-base ${subSection === 'TeamMembers' ? 'text-[#6F42C1]  font-Lato' :  'text-[#818586]'} `} onClick={() => setSubSection('TeamMembers')}>
                      <Link to='/Userhome/Employees/TeamMembers'>Team Members</Link></li>
                    </div>
                  </ul>
                </div>
          
        </div>
        )} 



        <li className={`p-4  flex items-center text-base ${activeSection === 'Customers' ? 'h-20 w-48 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `} style={{height:'50px'}}
        onClick={() => setActiveSection('Customers')}>
          <Link to="/Userhome/Customers" className="flex items-center">
            <TbUsersGroup size={24}  className={`mr-2 ${ activeSection === 'Customers' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Customers
          </Link>
          {activeSection === 'Customers' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-[#F8F9FA] h-14 w-14 rounded-full -mr-56 items-center justify-center">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
              </div>
            </div>
          )}
        </li>

        <li className={`p-4 flex items-center text-base ${activeSection === 'Reports' ? 'h-20 w-48 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `} style={{height:'50px'}}
        onClick={() => setActiveSection('Reports')}>
          <Link to="/dashboard" className="flex items-center">
            <TbReportAnalytics size={24}  className={`mr-2 ${ activeSection === 'Reports' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Reports
          </Link>
          {activeSection === 'Reports' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-[#F8F9FA] h-14 w-14 rounded-full -mr-72 items-center justify-center">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
              </div>
            </div>
          )}
        </li>

        <li className="mt-60 p-4 text-[#818586]">
          <Link to="/dashboard" className="flex items-center">
          <FiSettings  size={23} color='#AAADAE' className="mr-2" />
            Settings
          </Link>
        </li>
        <li className="p-4 text-[#818586]">
          <Link to="/dashboard" className="flex items-center">
          <FaSearchDollar size={23} color='#AAADAE' className="mr-2" />
            
            Help & Support
          </Link>
        </li>
        <li className="p-4 text-[#B93A28]">
          <Link to="/dashboard" className="flex items-center">
            <IoLogOutOutline  size={30} className="mr-2"/>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
