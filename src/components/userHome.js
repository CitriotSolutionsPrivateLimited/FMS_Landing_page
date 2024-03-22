import React, { useState,useEffect } from 'react';
import Sidebar from './sidebar';
import DashboardHeader from './dashboardHeader';
import Dashboard from './Dashboard';
import { useNavigate, Routes, Route } from "react-router-dom";


import {Layout,Menu, Spin, message } from 'antd';
import Customers from './Customers';
import EmployeesTeam from './EmployeesDirectory';
import TimeSheet from './TimeSheet';
import Settings from './settings';
import Reports from './reports';
import HelpSupport from './helpSupport';

const { Content, Sider } = Layout;

function UserHome(path) {
  const [loading, setLoading] = useState(false);
  const patha= window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (patha === '/Userhome') {
      navigate(`${path.path}/dashboard`)
    }
	},[])

  return (
<>
	{
		loading ? 
		<Spin /> :
		<div style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
			<DashboardHeader />
		</div>
	}
	<div style={{ display: 'flex', flexDirection: 'row' }}>
		<Sidebar />
		<div className="content-wrapper" style={{ flex: '1', overflowY: 'auto', background: '#F7FAFC' }}>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/Employees/ViewTimeSheet" element={<TimeSheet />} />
				<Route path="/Employees/TeamMembers" element={<EmployeesTeam />} />
				<Route path="/Customers" element={<Customers />} />
				<Route path="/Settings" element={<Settings />} />
				<Route path="/Reports" element={<Reports />} />
				<Route path="/HelpAndSupport" element={<HelpSupport/>}/>
			</Routes>
		</div>
	</div>
</>

    
  );
}

export default UserHome;
