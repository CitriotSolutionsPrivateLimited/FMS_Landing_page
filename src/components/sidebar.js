import React, { useState,useEffect } from 'react';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';
import { FaSearchDollar } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import {  FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';
import { dashboard, setting} from '../images/constants';
import { IoLogOutOutline } from "react-icons/io5";
import { TbUsersGroup, TbReportAnalytics, TbChevronLeft, TbBriefcase, TbZoomQuestion } from "react-icons/tb";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { TbChartPie } from "react-icons/tb";



function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [employeesView, setEmployeesView] = useState(true);
  const [subSection, setSubSection] = useState('timeSheet')
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
    } else if (patha === '/Userhome/Settings') {
      setActiveSection(`Settings`)
    } else if (patha === '/Userhome/Reports') {
      setActiveSection(`Reports`)
    } else {
      setActiveSection(`Dashboard`)
    }
	},[])
  return (
    <div className="bg-white h-screen p-6 flex flex-col sticky top-0 w-52" >
      <ul className="flex flex-col flex-grow font-Lato mt-20 text-sm">
        <li onClick={() => setActiveSection('Dashboard')}>
          <Link to="/Userhome/dashboard" className={`p-4  flex items-center ${activeSection === 'Dashboard' ? 'h-11 w-36 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `} >
            <TbChartPie size={20}  className={`mr-2 ${ activeSection === 'Dashboard' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Dashboard
          </Link>
          {activeSection === 'Dashboard' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center border-4 border-[#F8F9FA] -mr-52 -mt-11 ">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
            </div>
          )}
        </li>

        <li onClick={() => setActiveSection('Employees')}>
          <Link to="/Userhome/Employees/ViewTimeSheet" className={`p-4 flex items-center  ${activeSection === 'Employees' ? 'h-11 w-40 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `} >
            <TbBriefcase size={20}  className={`mr-2 ${ activeSection === 'Employees' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Employees
          {employeesView ? <HiChevronUp size={24} className={` ml-3 cursor-pointer ${ activeSection === 'Employees' ? 'text-white' : 'text-[#AAADAE]' } `} onClick={()=> setEmployeesView(false)}/> : <HiChevronDown size={24} className={` ml-3 cursor-pointer ${ activeSection === 'Employees' ? 'text-white' : 'text-[#AAADAE]' } `} onClick={()=> setEmployeesView(true)} /> }
          </Link>
          {activeSection === 'Employees' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center border-4 border-[#F8F9FA] -mr-56 -mt-11 ">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
            </div>
          )}
        </li>

        {activeSection === 'Employees' && employeesView && (
        <div className={`flex `} onClick={()=>handleClick()}>
            <div className="">
                  <ul>
                    <div className='flex flex-row items-center justify-center'>
                      {subSection === 'timeSheet' && <div className='bg-[#6F42C1] rounded-full h-3 w-3 '></div>}
                      <li className={`p-4 flex items-center ${subSection === 'timeSheet' ? 'text-[#6F42C1]  font-Lato' :  'text-[#818586]'} `} onClick={() => setSubSection('timeSheet')}>
                      <Link to='/Userhome/Employees/ViewTimeSheet'>View Time Sheet</Link> 
                      </li>
                    </div>
                      <div className='flex flex-row items-center justify-center'>
                      {subSection === 'TeamMembers' && <div className='bg-[#6F42C1] rounded-full h-2 w-2 '></div>}
                      <li className={`p-3 flex items-center  ${subSection === 'TeamMembers' ? 'text-[#6F42C1]  font-Lato' :  'text-[#818586]'} `} onClick={() => setSubSection('TeamMembers')}>
                      <Link to='/Userhome/Employees/TeamMembers'>Employee Directory</Link></li>
                    </div>
                  </ul>
                </div>
        </div>
        )} 



        <li onClick={() => setActiveSection('Customers')}>
          <Link to="/Userhome/Customers" className={`p-4  flex items-center  ${activeSection === 'Customers' ? 'h-11 w-36 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `}>
            <TbUsersGroup size={20}  className={`mr-2 ${ activeSection === 'Customers' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Customers
          </Link>
          {activeSection === 'Customers' && (
            <div className="flex items-center justify-center ">
             <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center border-4 border-[#F8F9FA] -mr-52 -mt-11 ">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
            </div>
          )}
        </li>

        <li  onClick={() => setActiveSection('Reports')}>
          <Link to="/Userhome/Reports" className={`p-4 flex items-center  ${activeSection === 'Reports' ? 'h-11 w-36 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `}>
            <TbReportAnalytics size={20}  className={`mr-2 ${ activeSection === 'Reports' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Reports
          </Link>
          {activeSection === 'Reports' && (
            <div className="flex items-center justify-center ">
             <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center border-4 border-[#F8F9FA] -mr-52 -mt-11 ">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>

            </div>
          )}
        </li>

        <li 
        onClick={() => setActiveSection('Settings')}>
          <Link to="/Userhome/Settings" className={`p-4 mt-20 flex items-center  ${activeSection === 'Settings' ? 'h-11 w-36 rounded-xl text-white bg-[#6F42C1] font-Lato' :  'text-[#818586]'} `}>
          <FiSettings  size={19} color='#AAADAE' className={`mr-2  ${ activeSection === 'Settings' ? 'text-white' : 'text-[#AAADAE]' } `} />
            Settings
          </Link>
          {activeSection === 'Settings' && (
            <div className="flex items-center justify-center ">
              <div className="flex bg-white h-11 w-11 rounded-full  items-center justify-center border-4 border-[#F8F9FA] 
              -mr-52 -mt-11">
              <TbChevronLeft color="#6F42C1" size={24} />
              </div>
            </div>
          )}
        </li>
        <li className="p-4 text-[#818586]">
          <Link to="/Userhome/dashboard" className="flex items-center">
          <TbZoomQuestion size={19} color='#AAADAE' className="mr-2" />
            Help & Support
          </Link>
        </li>
        <li className="p-4 text-[#B93A28]">
          <Link to="/dashboard" className="flex items-center">
            <IoLogOutOutline  size={23} className="mr-2"/>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
