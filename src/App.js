
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Mainpage from './components/mainpage';
import Login from './login';
import Dashboard from './components/Dashboard';
import UserHome from './components/userHome';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<ContactUs />} /> */}
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path='/Userhome/*' element={<UserHome path='/Userhome'/>} />
        <Route path="*" element={<Navigate to="/Userhome" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;