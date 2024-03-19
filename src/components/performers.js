import React,{useState, useRef, useEffect} from 'react';
import { g1, g2, g3, tp1, tp2, tp3, tp4, tp5 } from '../images/constants';
import { Select } from 'antd';
const { Option } = Select;



const Performers = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([])

  // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const PerformersData = [
    {img: tp4 ,name: 'Jayadev Mitali', designation: 'Designation', count: '203', work: '2021', rank: g2 },
    {img: tp3 ,name: 'Jitendra Choudhary', designation: 'Designation', count: '200', work: '2020', rank: g3 },
    {img: tp2 ,name: 'Avantas Ghosal', designation: 'Designation', count: '198', work: '2020', rank: 4 },
    {img: tp1 ,name: 'Barsati Sandipa', designation: 'Designation', count: '180', work: '2020', rank: 5 },
  ];


  return (
    <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5" style={{width:'500px', height:'650px', overflowY:'auto'}}>
      <div className="flex items-center p-4 ">
        <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">Top Performers</span>
        <div className="ml-24 ">
          <Select 
            defaultValue="This Week"
            style={{ width: 150, height:35, fontSize: '20px' }}
            >
            <Option value="option1" className='text-xl'>Option 1</Option>
            <Option value="option2" className='text-xl'>Option 2</Option>
            <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
        </div>
        
      </div>


      {PerformersData.length > 0 ?
      <><div className="flex justify-center items-center flex-col">
          <div className="relative">
            <img src={tp5} alt="User" className="w-36 h-36 rounded-full border-4 border-white" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-[#6F42C1]  rounded-full " />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-2 h-2 bg-[#8C68CD] rounded-full left-20 top-12" style={{ width: '9px', height: '9px' }} />
              <div className="absolute w-2 h-2 bg-[#F08B33] rounded-full left-28 top-15" style={{ width: '10px', height: '10px' }} />
              <div className="absolute w-2 h-2 bg-[#8C68CD] rounded-full left-20 bottom-10" style={{ width: '13px', height: '13px' }} />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute bg-[#8C68CD] rounded-full right-20 top-12" style={{ width: '13px', height: '13px' }} />
              <div className="absolute bg-[#F08B33] rounded-full right-28 top-15" style={{ width: '10px', height: '10px' }} />
              <div className="absolute bg-[#8C68CD] rounded-full right-20 bottom-10" style={{ width: '9px', height: '9px' }} />
            </div>
          </div>

          <div className="absolute -mt-6" style={{ position: 'sticky' }}>
            <img src={g1} alt="Golden Badge" className="w-10 h-10" />
          </div>

          <div className='flex items-center justify-center flex-col mt-4 gap-1'>
            <span className='text-[#6F42C1] font-Lato text-base'>Hardeep Suksma</span>
            <span className='font-Lato text-sm'>Designation</span>
            <span className='text-[#818586] text-xs font-Lato'>Working Since 2022</span>
            <div className='bg-[#D6EAF7] text-[#3498DB] w-24 h-7 flex items-center justify-center rounded-lg font-Lato text-xs'>212 Servings</div>

          </div>
        </div><div className="flex flex-col p-4 mt-5 ">
            <table className="w-full text-sm text-left table-auto">
              <tbody className="text-gray-700">
                {PerformersData.map((e, index) => (
                  <tr key={index} className=" hover:bg-gray-100 border-b border-gray-100 ">
                    <td className="whitespace-nowrap py-2">
                      {typeof (e.rank) === 'number' ? <span className='font-Lato ml-3 mr-5'>{e.rank}</span> : <img src={e.rank} alt={index + 2} className="w-10 h-10" />}
                    </td>
                    <td className="whitespace-nowrap font-Lato py-2 ">
                      <img src={e.img} alt="Profile" className="w-12 h-12 rounded-full border-4 border-white ml-2" />

                    </td>
                    <td className="whitespace-nowrap font-Lato py-2">
                      <div className="text-left">
                        <span className="text-sm font-Lato text-[#6F42C1] block">{e.name}</span>
                        <span className="text-sm font-Lato block">{e.designation}</span>
                      </div>
                    </td>
                    <td className=" whitespace-nowrap font-Lato py-2">
                      <div className='bg-[#D6EAF7] text-[#3498DB] w-24 h-7 flex items-center justify-center rounded-lg font-Lato text-xs'>{e.count} Servings</div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-Lato py-2">
                      <span className='text-[#818586] text-xs font-Lato ml-4'>Working Since {e.work}</span>
                    </td>

                  </tr>

                ))}
              </tbody>
            </table>
          </div></> : 
       <div className='flex flex-col items-center justify-center font-Lato mt-60' >
      <span className='text-[#2D3436] font-semibold text-xl'>No Data </span>
      <span className='text-[#818586] text-base '>Please Add Your Employees</span>
    </div>  } 
    





      
      
    </div>
  );
};

export default Performers;
