
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from './components/mainpage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<ContactUs />} /> */}
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/" element={<Solution />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;