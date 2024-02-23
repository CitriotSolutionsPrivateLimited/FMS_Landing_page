import React, {useState, useRef} from "react";
import { Input, Button, Form , Radio, message} from "antd";
import { r1, r2, r3 } from "./images/constants";
import { RiEyeCloseLine } from 'react-icons/ri';
import { TbEyeCheck } from "react-icons/tb";
import axios from './constants/axios';



const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [lineColors, setLineColors] = useState(['', '', '']);
  const [textColor, setTextColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname:'',
    username: '',
    password:'',
    email:'',
    organisation:'',
    designation:''
  });

  const formRef = useRef();

  const handleFormChange = (changedFields) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...changedFields,
    }));

  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNext = () => {
    formRef.current
      .validateFields()
      .then(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };
  const handlePrevious = () => {
    if (currentStep <= totalSteps) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFinish = async() => {
    setLoading(true);
    try {
      await axios.post('https://development.citriot.ai/api/vizon-register/', formData);
      message.success("Registration Successfull.");
      setLoading(false);
      } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        message.warning(err.response.data.msg ? err.response.data.msg : err.response.data);
      } else if (err.response && err.response.data && err.response.data.userName) {
        message.warning(err.response.data.userName[0]);
        } else if (err.response && err.response.status === 401) {
        message.error('User not authorised');
      } else {
        message.error('Something went wrong');
      }
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length <= 2 && newPassword.length !== 0 ) {
      setLineColors(['#B93A28', 'gray', 'gray']);
      setPasswordStrength('Weak Password');
      setTextColor('#B93A28');
    } else if (newPassword.length === 3) {
      setLineColors(['#BD992A', '#BD992A', 'gray']);
      setPasswordStrength('Moderate Password');
      setTextColor('#BD992A');
    } else if (newPassword.length >= 4) {
      setLineColors(['#317159', '#317159', '#317159']);
      setPasswordStrength('Strong Password');
      setTextColor('#317159');
    }
  };
  
  return (
    <div className="mt-5 lg:-ml-20 md:p-20 lg:p-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-center">
          <div
            className={`relative rounded-full flex items-center justify-center 
              ${currentStep >= 1 ? 'bg-[#9B59B6]' : 'bg-[#E0E1E2]'}`}
            style={{ width: '3rem', height: '3rem' }}
          >
            <img src={r1} alt={`Name`} className="w-8 h-8 rounded-full" />
          </div>
          <span className="text-base text-[#9B59B6]">Name</span>
        </div>
        <div className="flex-grow">

          <div className={`h-0.5 ${
            currentStep >= 1
              ? currentStep === 1
                ? 'bg-gradient-to-r from-[#9B59B6] to-[#E0E1E2]'
                : 'bg-[#9B59B6]'
              : 'bg-[#E0E1E2]'
          }`} />
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`relative rounded-full flex items-center justify-center 
              ${currentStep >= 2 ? 'bg-[#9B59B6]' : 'bg-[#E0E1E2]'}`}
            style={{ width: '3rem', height: '3rem' }}
          >
            <img src={r2} alt={`Work Details`} className="w-8 h-8 rounded-full" />
          </div>
          <span className= {`text-base ${currentStep >= 2 ? 'text-[#9B59B6]' : 'text-[#E0E1E2]'}`}>Work Details</span>
        </div>
        <div className="flex-grow">
          <div className={`h-0.5 ${
            currentStep >= 2
              ? currentStep === 2
                ? 'bg-gradient-to-r from-[#9B59B6] to-[#E0E1E2]'
                : 'bg-[#9B59B6]'
              : 'bg-[#E0E1E2]'
          }`} />
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`relative rounded-full flex items-center justify-center 
              ${currentStep >= 3 ? 'bg-[#9B59B6]' : 'bg-[#E0E1E2]'}`}
            style={{ width: '3rem', height: '3rem' }}
          >
            <img src={r3} alt={`Password`} className="w-8 h-8 rounded-full" />
          </div>
          <span className={`text-base ${currentStep >= 3 ? 'text-[#9B59B6]' : 'text-[#E0E1E2]'}`}>Password</span>
        </div>
      </div>

      <div>
        {currentStep === 1 && (

           <Form
             ref={formRef}
             initialValues={formData}
             layout="vertical"
             onValuesChange={handleFormChange}
           >
   
             <label className="block md:text-xl mb-2 " htmlFor="username">Full Name</label>
             <Form.Item 
               name="fullname" 
               rules={[{ required: true, message: 'Please enter your full name' }]}>
               <Input 
                  placeholder="Enter Your Full Name" 
                  className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400" 
                  onChange={(e) => setFullname(e.target.value)} 
                />
   
             </Form.Item>
             
   
             <label className="block md:text-xl mb-2" htmlFor="username">User Name</label>
             <Form.Item 
               name="username"
               rules={[{ required: true, message: 'Please enter your User Name' }]}
             >
               <Input placeholder="Enter Your User Name" 
               className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400" 
               onChange={(e) => setUsername(e.target.value)}/>
             </Form.Item>
   
             <Form.Item>
               <Button type="primary" htmlType="submit" 
               style={{ backgroundColor: username && fullname ? '#8C68CD' : '#E1D8F2'}}
               className="w-full md:h-14 sm:h-10  md:text-xl sm:text-lg " 
               onClick={handleNext}
               >
                 Next
               </Button>
             </Form.Item>
           </Form>

        )}
        {currentStep === 2 && (
          <Form
            ref={formRef}
            nitialValues={formData}
            layout="vertical"
            onValuesChange={handleFormChange}
          >
            <label className="block md:text-xl">Designation</label>
            <Form.Item
              name="designation"
              className="mb-6"
              rules={[{ required: true, message: 'Please enter your designation' }]}
            >
              <Radio.Group  value = {designation} onChange={(e) => setDesignation(e.target.value)}>
                <Radio value="manager" className="text-lg font-light">Manager</Radio>
                <Radio value="regionalManager" className="text-lg font-light">Regional Manager</Radio>
              </Radio.Group>
            </Form.Item>


            <label className="block md:text-xl mb-2 " htmlFor="organisation">Organisation</label>
            <Form.Item 
              name="organisation" 
              rules={[{ required: true, message: 'Please enter your organisation name' }]}
              >
              <Input placeholder="Enter Your Organisation Name" className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400" onChange={(e) => setOrganisation(e.target.value)} />
            </Form.Item>
            

            <label className="block md:text-xl mb-2" htmlFor="email">Work Mail</label>
            <Form.Item 
              name="email"
              rules={[{ required: true, message: 'Please enter your Work Mail' }]}
            >
              <Input placeholder="Enter Your Work Mail" className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>

            <div className="flex justify-between -mb-9">
              <Form.Item>
                <Button
                type="primary"

                  className="w-full md:h-14 sm:h-10 md:text-xl sm:text-lg"
                  style={{ backgroundColor: '#8C68CD' }}
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: email && organisation && designation ? '#8C68CD' : '#E1D8F2'}}
                  className="w-full md:h-14 sm:h-10 md:text-xl sm:text-lg"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Form.Item>
            </div>
          </Form>
       )}
        {currentStep === 3 && (
          <Form
            ref={formRef}
            layout="vertical"
            initialValues={formData}
            onValuesChange={handleFormChange}
            onFinish={onFinish}
            
          >
            
            <label className="block md:text-xl mb-2" htmlFor="password">Password</label>
            <Form.Item 
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              
              <Input.Password 
              placeholder="Enter Your Password" 
              className="md:text-lg sm:text-sm sm:h-12 md:h-16 border-slate-400" 
              onChange={handlePasswordChange}
              iconRender={visible => (visible ? <TbEyeCheck onClick={togglePasswordVisibility} style={{ fontSize: '1.5rem', color:'gray' }} /> : <RiEyeCloseLine onClick={togglePasswordVisibility} style={{ fontSize: '1.5rem', color:'gray' }}/>)}/>
              
            </Form.Item>

              <div className="flex justify-between -mt-4 mb-6">
                <label className="relative text-sm " style={{ color: textColor }}>
                  {passwordStrength}
                </label>
                <div className="relative flex ml-60 ">
                  <div className="h-0.5 w-5 " style={{ backgroundColor: lineColors[0] }} />
                  <div className="h-0.5 w-5 ml-1" style={{ backgroundColor: lineColors[1] }} />
                  <div className="h-0.5 w-5 ml-1 " style={{ backgroundColor: lineColors[2] }} />
                </div>
              </div>

            <label className="block md:text-xl mb-2" htmlFor="password">Confirm Password</label>
            <Form.Item 
              name="confirmPassword" 
              rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input  className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-2 border-slate-400" onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Item>

            <div className="flex justify-between -mb-9">
              <Form.Item>
                <Button
                type="primary"

                  className="w-full md:h-14 sm:h-10 md:text-xl sm:text-lg"
                  style={{ backgroundColor: '#8C68CD' }}
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: password && confirmPassword ? '#8C68CD' : '#E1D8F2'}}
                  className="w-full md:h-14 sm:h-10 md:text-xl sm:text-lg"
                  // onClick={handleRegister}
                >
                  Register
                </Button>
              </Form.Item>
            </div>
          </Form>
          
        )}
      </div>
      <div className=" md:text-lg sm:text-base lg:pt-0 sm:mt-6 text-[#818586] font-light">
                By Registering in I accept {' '}
                <a href="#" className="text-[#6F42C1] underline">Terms and Privacy Conditions</a>
              </div>

     
    </div>
  );
};



export default MultiStepForm;
