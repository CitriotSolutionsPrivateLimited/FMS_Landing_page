import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Select, Switch } from 'antd';
import { TbUserCircle, TbLockSquareRounded, TbReceipt, TbCashBanknote } from "react-icons/tb";
import { BsCloudUpload } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
const { Option } = Select;




function Settings() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [section, setSection] = useState('profile');
  const [toggle, setToggle] = useState(false);
  const [firstName, setFirstName] = useState('Advitiya');
  const [lastName, setLastName] = useState('Sujeet');
  const [email, setEmail] = useState('sujeet.advitiya@gmail.com');
  const [role, setRole] = useState('Manager');
  const [timeZone, setTimeZone] = useState('Indian Standard Time (IST)');

  const [passwordformData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData({
      ...passwordformData,
      [name]: value,
    });
  };

  const timeZones = [
    'Pacific Standard Time (PST)',
    'Eastern Standard Time (EST)',
    'Central Standard Time (CST)',
    'Mountain Standard Time (MST)',
  ];

  const onChange = (checked) => {
    setToggle(checked);
  };


  return (
    <div className=' p-8'>
      <div className="flex-grow  ">
          <h1 className=' flex flex-row font-Lato text-3xl mt-24'>Settings</h1>

        <div className="flex mt-4 font-Lato items-center">
          <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
          <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
          <span className='text-[#8C68CD] text-sm'>Settings</span>
        </div>
      </div>

      <div className='flex items-center bg-white w-full h-16 rounded-lg mt-7 text-lg p-3 font-Lato gap-14 text-[#818586] ' style={{fontWeight: 400}}>
        <div className={`flex flex-row gap-1 items-center cursor-pointer ${section === 'profile' ? 'text-[#6F42C1]' : ''}`} onClick={()=>setSection('profile')}>
          <TbUserCircle size={28}/> 
          <span>Profile</span>
        </div>
        <div className={`flex flex-row gap-1 items-center cursor-pointer ${section === 'security' ? 'text-[#6F42C1]' : ''}`}
        onClick={()=>setSection('security')}>
          <TbLockSquareRounded size={28}/> 
          <span>Security</span>
        </div>
        <div className={`flex flex-row gap-1 items-center cursor-pointer ${section === 'billing' ? 'text-[#6F42C1]' : ''}`}
        onClick={()=>setSection('billing')}>
          <TbReceipt size={28}/> 
          <span>Billing and Tax</span>
        </div>
        <div className={`flex flex-row gap-1 items-center cursor-pointer ${section === 'plans' ? 'text-[#6F42C1]' : ''}`}
        onClick={()=>setSection('plans')}>
          <TbCashBanknote size={28}/> 
          <span>Plans</span>
        </div>

      </div>

      { section === 'profile' && (<div className='flex flex-col bg-white w-full rounded-lg mt-10 p-5 font-Lato'>
        <div className='flex flex-row items-center justify-between'>
          <div>

          <span className='mr-60 text-xl'>Profile</span>
          </div>
          <div>

          <button className='border border-[#8C68CD] text-[#8C68CD] text-xs rounded-lg w-20 h-9 ml-96'>Cancel</button>
          <button className='bg-[#8C68CD] rounded-lg w-28 h-9 text-white text-xs ml-5'>Save Change</button>
          </div>
        </div>
        <span className='text-[#818586] text-sm'>Update your personal details and Information </span>
        <span className='mt-10'>Your Profile  Picture</span>
        <span className='text-[#818586] text-sm mt-1'>This will be displayed on your profile</span>
        <div className="flex flex-row text-[#818586] mt-5">
          <label className={`flex flex-col w-20 h-20 rounded-lg cursor-pointer items-center justify-center ${selectedFile ? '' : 'border border-dotted border-[#818586]'}`}>
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded Profile"
                className="w-full h-full object-cover rounded-lg border-0"
              />
            ) : (
              <div className='flex flex-col items-center justify-center'>
                <CiImageOn size={23}/>
                <span className="text-xs mt-1 ml-2" >Upload your photo</span>
              </div>
            )}
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {selectedFile && <div className='flex flex-col ml-10 items-center'>
            <BsCloudUpload  className=''/>
            <span className='text-[#8C68CD] cursor-pointer'>Click to upload</span>
            <span className='text-[#575C5E]'>Png or Jpg Format Supported</span>
          </div>
          }
        </div>

        <div>
        <form className="flex flex-col  gap-7 font-Lato font-medium mt-8">
          <div className="flex flex-row">
            <label htmlFor="name" className="block w-44">First & Last Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={setFirstName}
              className="border border-[#C1C4C7] rounded-md px-3 py-2  w-64 -ml-1 text-[#575C5E] focus:outline-none focus:border-[#6F42C1]"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={setLastName}
              className="border border-[#C1C4C7] rounded-md px-3 py-2 w-64 ml-6 text-[#575C5E] focus:outline-none focus:border-[#6F42C1]"
            />
          </div>
          <div className=" w-1/2 flex flex-row">
            <label htmlFor="email" className="block w-64">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={setEmail}
              className="border border-[#C1C4C7] rounded-md px-3 py-2 w-full text-[#575C5E] focus:outline-none focus:border-[#6F42C1]"
            />
          </div>
          <div className="w-1/2 flex flex-row">
            <label htmlFor="password" className="block w-64">Role</label>
            <Select
              name="role"
              defaultValue='Select Role'
              value={role}
              onChange={setRole}
              style={{ width: 580, height: 44}}
            >
              <Option value="manager">Manager</Option>
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </div>
          <div className="w-1/2 flex flex-row">
            <label htmlFor="password" className="block  w-64">Time Zone</label>
            <Select
              name="timeZone"
              value={timeZone}
              onChange={setTimeZone}
              style={{ width: 580, height: 44}}
            >
              {timeZones.map(timeZone => (
                <Option key={timeZone} value={timeZone}>{timeZone}</Option>
              ))}
            </Select>
          </div>
        </form>
        </div>

      </div> )}

      { section === 'security' && (<div className='flex flex-col bg-white w-full rounded-lg mt-10 p-5 font-Lato'>
        <div className='flex flex-row items-center justify-between'>
          <div>

          <span className='mr-60 text-xl'>Security</span>
          </div>
          <div>

          <button className='border border-[#8C68CD] text-[#8C68CD] text-xs rounded-lg w-20 h-9 ml-96'>Cancel</button>
          <button className='bg-[#8C68CD] rounded-lg w-28 h-9 text-white text-xs ml-5'>Save Change</button>
          </div>
        </div>
        <span className='text-[#818586] text-sm'>Update your password  </span>
        <span className='mt-10 text-xl font-bold'>Two Factor Authentication</span>
        <div className=' mt-3'>
          <span className=' mt-3'>Enable or Disable Two Factor Authentication</span>
          <Switch onChange={onChange} className='ml-6'
            style={{ backgroundColor: toggle ? '#8C68CD' : '#ccc' }}
           />
        </div>
        <span className='text-xl mt-8'>Password Change</span>
        <div>
        <form  className="w-full  mt-8 ">
          <div className="mb-6">
            <label htmlFor="currentPassword" className="block  mb-2">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordformData.currentPassword}
              onChange={handleChange}
              className="w-64 px-3 py-2 border border-[#C1C4C7] rounded-md focus:outline-none focus:border-[#6F42C1]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="newPassword" className="block  mb-2">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordformData.newPassword}
              onChange={handleChange}
              className="w-64 px-3 py-2 border border-[#C1C4C7] rounded-md focus:outline-none focus:border-[#6F42C1]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block  mb-2">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passwordformData.confirmPassword}
              onChange={handleChange}
              className="w-64 px-3 py-2 border border-[#C1C4C7] rounded-md focus:outline-none focus:border-[#6F42C1]"
              required
            />
          </div>
        </form>
        </div>

      </div> )}


     


    </div>
  )
}

export default Settings