
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from './components/mainpage';
import Login from './login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<ContactUs />} /> */}
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;