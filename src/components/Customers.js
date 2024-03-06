import React, { useEffect, useState } from 'react';
import { customer1, customer2, customer3, customer4 } from '../images/constants';
import { useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { TbHourglass, TbBuildingStore } from "react-icons/tb";
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RedialSeparators';
import GradientSVG from './GradientSVG';
import { GoArrowUp, GoArrowDown, GoChevronRight, GoChevronLeft } from "react-icons/go";


const { Option } = Select;




function Customers() {
  const [customer, setCustomer] = useState('29');
  const [orders, setOrders] = useState('completed')
  const navigate = useNavigate();

  const customersData = [
    {img: customer1, age:29},
    {img: customer2, age:30},
    {img: customer3, age:31},
    {img: customer4, age:32},

  ]

  useEffect(() => {
    setCustomer(customersData[0].age)
  }, []);

  const idCSS = "hello";

  const onChange = () => {
    if(orders === 'completed'){
      setOrders('abandoned')
    } else {
      setOrders('completed')
    }
  }
  return (
    <div className='p-8'>
      <div className="flex-grow  ">
      <div className="flex  mt-24 items-center">
        <div className="text-[#818586] cursor-pointer font-Lato text-sm" onClick={() => navigate('/')}>Home</div>
        <div className="w-1 h-1  bg-[#8C68CD] rounded-full ml-2 mr-2"></div>
        <span className='text-[#8C68CD] text-sm'>Customers</span>
      </div>
      </div>
      <div className='flex w-full flex-row mt-6'>
      <div className=" rounded-lg shadow-md overflow-hidden w-full bg-white p-4">
        <div className="flex items-center ">
          <span className="mr-48 text-2xl font-Lato font-bold text-[#2D3436]">Customers</span>
          <div className="ml-96 ">
            <Select
              defaultValue="Select Franchise"
              style={{ width: 150, height: 35, fontSize: '20px' }}
            >
              <Option value="option1" className='text-xs'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
          <div className="ml-7 ">
            <Select
              defaultValue="Date and Time"
              style={{ width: 150, height: 35, fontSize: '20px' }}
            >
              <Option value="option1" className='text-xl'>Option 1</Option>
              <Option value="option2" className='text-xl'>Option 2</Option>
              <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
          </div>
        </div>

        <div className='flex flex-row border border-grey rounded-2xl p-5 items-center mt-4 gap-8'>
          { customersData.map((cmr) => (
            <div className={`flex flex-col items-center justify-between ${customer === cmr.age ? 'bg-[#D3DAF0]' : 'bg-white '}  rounded-md p-2 hover:bg-[#D3DAF0]`} style={{width:'100px', height:'140px'}} onClick={()=>setCustomer(cmr.age)}>
              <img src={cmr.img} className='w-20 h-20'/>
              
              <div className='bg-[#5470C6] text-white w-16 h-7 flex items-center justify-center rounded-md font-Lato text-sm mt-3 '>Age {cmr.age}</div>
            </div>
          ))}
        </div>

        <div className='mt-3 flex flex-row gap-10 mb-4'>
          <div className="bg-white rounded-2xl shadow-lg p-5 font-Lato " style={{width:'230px', height:'150px'} }>
            <div className="flex flex-col gap-2" >
              <div className="bg-[#E1D8F2] h-12 w-12 flex items-center justify-center rounded-lg text-[#6F42C1]">
              < TbHourglass size={35}/>
              </div>
              <span className='text-base'>Average Selection Time</span>
              <span className='text-[#6F42C1] text-xl'>2 Min 30 Sec</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 font-Lato " style={{width:'230px', height:'150px'} }>
            <div className="flex flex-col gap-2" >
              <div className="bg-[#E1D8F2] h-12 w-12 flex items-center justify-center rounded-lg text-[#6F42C1]">
              < TbBuildingStore size={35}/>
              </div>
              <span className='text-base'>Average Time at Franchise</span>
              <span className='text-[#6F42C1] text-xl'>20 Min 12 Sec</span>
            </div>
          </div>
          </div>
        
      </div>
      </div>

      <div className='flex flex-row w-full gap-10'>
        <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5 p-3" style={{width:'520px', height:'630px', overflowY:'auto'}}>
          <div className="flex flex-col  p-4 gap-4">
            <span className=" text-2xl font-Lato font-bold text-[#2D3436]">Check Out Status</span>
            <div className='flex flex-row'>
              <div >
                <Select
                  defaultValue="Select Franchise"
                  style={{ width: 150, height: 35, fontSize: '20px' }}
                >
                  <Option value="option1" className='text-xs'>Option 1</Option>
                  <Option value="option2" className='text-xl'>Option 2</Option>
                  <Option value="option3" className='text-xl'>Option 3</Option>
                </Select>
              </div>
              <div className="ml-6 ">
                <Select
                  defaultValue="Date and Time"
                  style={{ width: 150, height: 35, fontSize: '20px' }}
                >
                  <Option value="option1" className='text-xl'>Option 1</Option>
                  <Option value="option2" className='text-xl'>Option 2</Option>
                  <Option value="option3" className='text-xl'>Option 3</Option>
                </Select>
              </div>
            </div>
              <div className='flex items-center justify-center font-Lato mt-5 ml-3'>
                <div style={{ position: 'relative' }}>
                  <GradientSVG  type={orders}/>
                  <div style={{  width: '94%' }}>
                    <CircularProgressbarWithChildren
                      value={orders === 'completed' ? 60 : 10 }
                      text={orders === 'completed' ? `${60}%` : `${10}%`}
                      strokeWidth={10}
                      styles={{
                        ...buildStyles({
                          strokeLinecap: "butt",
                          textColor: orders === 'completed' ? "#6F42C1" : "#B93A28"
                        }),
                        path: { stroke: `url(#${idCSS})` }
                      }}
                    >
                      <RadialSeparators
                        count={55}
                        style={{
                          background: "#fff",
                          width: "6px",
                          height: `${12}%`,
                        }}
                      />
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center font-Lato gap-4 ' >
                {orders === 'completed' ? <div className='flex flex-row items-center ml-12 mt-5'>
                  <div className='bg-[#D6EAF7] text-[#3498DB] w-44 h-12 flex items-center justify-center rounded-xl font-semibold text-2xl' style={{width:'180px', height:'52px'}}>Completed</div>
                  <GoChevronRight size={30} color='#6F42C1' className='bg-[#F8F9FA] rounded-full w-7 h-7 ml-5 cursor-pointer' onClick={onChange}/>
                </div> :
                <div className='flex flex-row items-center mt-5 mr-10'>
                  <GoChevronLeft size={30} color='#6F42C1' className='bg-[#F8F9FA] rounded-full w-7 h-7 mr-4 cursor-pointer' onClick={onChange}/>
                  <div className='bg-[#F0D7D3] text-[#B93A28] w-44 h-12 flex items-center justify-center rounded-xl font-semibold text-2xl' style={{width:'180px', height:'52px'}}>Abandoned</div>
                </div> }
                  <span className='text-[#818586] text-xl font-semibold'>{orders === 'completed' ? 321 : 27} Orders in Total</span>
                  <div className='flex flex-row'>
                  <div className={` h-6 w-14 flex items-center justify-center rounded-md font-Lato  ${orders === 'completed' ? 'bg-[#D5E2DD] text-[#317159]' : 'bg-[#F0D7D3] text-[#B93A28]' } text-xs`}>
                    <GoArrowUp size={16}/><span className='text-base'>0{orders === 'completed' ? 8 : 4}%</span>
                  </div>
                  <h2 className="text-base   text-[#818586] ml-1">vs Last week</h2>
                  </div>
              </div>

            
          </div>

        </div>

        <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5 p-3" style={{width:'520px', height:'630px', overflowY:'auto'}}>
          <div className="flex flex-col  p-4 gap-4">
            <span className=" text-2xl font-Lato font-bold text-[#2D3436]">Age Demographic</span>
            <div className='flex flex-row'>
              <div >
                <Select
                  defaultValue="Select Franchise"
                  style={{ width: 150, height: 35, fontSize: '20px' }}
                >
                  <Option value="option1" className='text-xs'>Option 1</Option>
                  <Option value="option2" className='text-xl'>Option 2</Option>
                  <Option value="option3" className='text-xl'>Option 3</Option>
                </Select>
              </div>
              <div className="ml-6 ">
                <Select
                  defaultValue="Date and Time"
                  style={{ width: 150, height: 35, fontSize: '20px' }}
                >
                  <Option value="option1" className='text-xl'>Option 1</Option>
                  <Option value="option2" className='text-xl'>Option 2</Option>
                  <Option value="option3" className='text-xl'>Option 3</Option>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-center font-Lato relative mt-20 mr-20">
              <div className="flex items-center justify-center h-52 w-52 rounded-full bg-[#3498DB]">
                <div className="text-white text-5xl font-bold">50%</div>
              </div>
              <div className="absolute left-1/2 transform translate-x-14 -translate-y-0">
                <div className="flex items-center justify-center h-40 w-40 rounded-full bg-[#A88DD9] border-4 border-white">
                  <div className="text-white text-4xl font-bold">30%</div>
                </div>
                <div className=" left-1/2 transform -translate-x-2 -translate-y-11">
                <div className="flex items-center justify-center h-28 w-28 rounded-full bg-[#D7C17F] border-4 border-white">
                  <div className="text-white text-2xl font-bold">15%</div>
                </div>
                </div>
              </div>
              <div className="absolute top-32 left-16">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#10007F] border-2 border-white">
                  <div className="text-white text-xl font-bold">5%</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center  font-Lato text-lg text-[#575C5E] mt-20 gap-8">
              <div className='flex flex-row'>
                <div className="flex items-center justify-center w-7 h-7  bg-[#3498DB]"></div>
                <div className="ml-3 ">0-20 Age</div>
                <div className="flex items-center justify-center w-7 h-7 ml-16 bg-[#A88DD9]"></div>
                <div className=" ml-3 ">21-40 Age</div>
              </div>

              <div className='flex flex-row'>
                <div className="flex items-center justify-center w-7 h-7  bg-[#D7C17F]"></div>
                <div className=" ml-3">41-60 Age</div>
                <div className="flex items-center justify-center w-7 h-7 ml-14 bg-[#10007F]"></div>
                <div className="ml-3  ">61-80 Age</div>
              </div>
            </div>




            
          </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Customers