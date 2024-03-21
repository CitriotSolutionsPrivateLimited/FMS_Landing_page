import React, {useEffect, useState} from "react";
import { Row, Col, Input, Button, Form, Checkbox, message } from "antd";
import { newLogo, login1, login2, login3, login4 } from "./images/constants";
import { RiEyeCloseLine } from 'react-icons/ri';
import { TbEyeCheck } from "react-icons/tb";
import MultiStepForm from './register'
import { useNavigate } from "react-router-dom";


function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [login1, login2, login3, login4];
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
	const navigate = useNavigate();
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const onFinish = (values) => {
    if(values.username !== 'cafebliss2024' || values.password !== 'BeanBliss@123'){
      return message.error('Invalid username or password')
    }
    message.success('Login Successfully')
    navigate('/Userhome')
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Rotate every 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <div className="bg-white w-screen h-full">
      <Row justify="space-around" align="top" className=" sm:mx-5 sm:my-7 md:my-6 lg:my-0 lg:flex-row  lg:columns-2 ">

        <Col className=" lg:w-1/2  lg:mx-10  md:my-12 sm:w-0 ">
          <img src={images[currentImageIndex]} className="md:w-5/6 lg:h-full " />
        </Col>
        {/* login form */}
        <Col className="lg:w-2/5 ">
          <div className="pt-8">
            <img src={newLogo} onClick={()=>navigate('/')} style={{ cursor: 'pointer' }} className="md:w-40 md:h-14 sm:w-24 sm:h-8  lg:ml-96 md:ml-auto" />
          </div>
          <div className="lg:w-2/3 sm:w-full sm:p-4 md:p-16 lg:p-0">
            <div className="md:pt-16 lg:-ml-20 md:ml-32 ">
              <h1 className="hidden md:block md:text-5xl md:text-[#6F42C1] md:font-medium ">Welcome to Vizon AI</h1>
            </div>
            <div className="flex justify-center items-center bg-[#E1D8F2] rounded-full lg:w-80 lg:h-20 mt-10 p-5 sm:w-full h-16 md:w-8/12 md:ml-28 lg:ml-0">
              <button
                className={`py-2 px-4 text-lg rounded-3xl mr-4 w-36 h-11 ${
                  isLogin ? 'bg-[#6F42C1] text-white' : 'bg-transparent text-[#6F42C1]'
                }`}
                onClick={handleToggle}
              >
                Login
              </button>
              <button
                className={`py-2 px-4 text-lg rounded-3xl w-36 h-11 ${
                  isLogin ? 'bg-transparent text-[#6F42C1] ' : 'bg-[#6F42C1] text-white'
                }`}
                onClick={handleToggle}
              >
                Register
              </button>
            </div>

            <div className="pt-5 lg:-ml-20 md:ml-20">
              <h1 className="md:text-lg sm:text-base text-[#575C5E] font-light ">Enhanced monitoring capabilities for detailed insights, improving employee assessments</h1>
            </div>
            {isLogin ? (<div className="md:mt-5 sm:pt-9 lg:-ml-20 md:p-20 lg:p-0">
              <Form
                layout="vertical"
                onFinish={onFinish}
              >

                <label className="block md:text-xl mb-2 " htmlFor="username">User Name</label>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please enter your username' }]}
                >
                  <Input placeholder="Enter Your User Name" className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400 hover:border-[#8C68CD]" onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>


                <label className="block md:text-xl mb-2" htmlFor="password">Password</label>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please enter your password' }]}
                >
                  <Input.Password
                    placeholder="Enter Your Password"
                    className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400 hover:border-[#8C68CD]"
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={visible => (visible ? <TbEyeCheck onClick={togglePasswordVisibility} style={{ fontSize: '1.5rem', color: 'gray', cursor:'pointer' }} /> : <RiEyeCloseLine onClick={togglePasswordVisibility} style={{ fontSize: '1.5rem', color: 'gray', cursor:'pointer' }} />)} />
                </Form.Item>

                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="text-lg font-light" size="large">Remember me</Checkbox>
                  </Form.Item>

                  <a className="text-[#B93A28] float-right text-lg" href="#forgot-password">Forgot password?</a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit"
                    style={{ backgroundColor: '#6F42C1' }}
                    className="w-full md:h-14 sm:h-10  md:text-xl sm:text-lg">
                    Login
                  </Button>
                </Form.Item>
              </Form>
              <div className=" md:text-lg sm:text-base text-[#818586] lg:mt-3 sm:mt-6 font-light">
                By Logging in I accept {' '}
                <a href="#" className="text-[#6F42C1] underline">Terms and Privacy Conditions</a>
              </div>
            </div>
            ) : ( <MultiStepForm />)} 
          </div>
        </Col>
      </Row>

    </div>
  );
}

export default Login;








