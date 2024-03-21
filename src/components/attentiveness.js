import React,{useState, useEffect} from 'react';
import { Select } from 'antd';
import { ResponsiveLine } from '@nivo/line'
import Line from './charts/Line';

const { Option } = Select;

const Attentiveness = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [cardsData, setCardData] = useState([]);

  const [checkedItems, setCheckedItems] = useState({
    timeToServe: true,
    timeToBill: true,
    timeToDeliver: true
});

const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
};


  // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const data = [
    {
      id: 'timeToServe',
      color: '#F79044',
      data: [
        { x: '8:00AM', y: 5 },
        { x: '10:00AM', y: 6 },
        { x: '12:00PM', y: 12 },
        { x: '02:00PM', y: 23 },
        { x: '04:00PM', y: 21 },
        { x: '06:00PM', y: 16 },
        { x: '08:00PM', y: 19 },
        { x: '10:00PM', y: 23 },
      ],
    },
    {
      id: 'timeToBill',
      data: [
        { x: '8:00AM', y: 0 },
        { x: '10:00AM', y: 10 },
        { x: '12:00PM', y: 5 },
        { x: '02:00PM', y: 7 },
        { x: '04:00PM', y: 8 },
        { x: '06:00PM', y: 25 },
        { x: '08:00PM', y: 30 },
        { x: '10:00PM', y: 15 },
      ],
    },
    {
      id: 'timeToDeliver',
      data: [
        { x: '8:00AM', y: 0 },
        { x: '10:00AM', y: 6 },
        { x: '12:00PM', y: 30 },
        { x: '02:00PM', y: 22 },
        { x: '04:00PM', y: 17 },
        { x: '06:00PM', y: 32 },
        { x: '08:00PM', y: 25 },
        { x: '10:00PM', y: 15 },
      ],
    },
  ];

  const lineColors = {
    timeToServe: '#F79044',
    timeToBill: '#AD00FF',
    timeToDeliver: '#B6308B',
};


  const filteredData = data.filter(item => checkedItems[item.id]);


  return (
    <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5">
      <div className="flex items-center p-4 justify-between">
        <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">Attentiveness</span>
       
        <div className="ml-7">
          <Select
            defaultValue="Select Employee"
            style={{ width: 150, height:35,  fontSize: '20px' }}
            >
            <Option value="Amrish Ilyas">Amrish Ilyas</Option>
            <Option value="Avantas Ghosal">Avantas Ghosal</Option>
            <Option value="Jayadev Mitali">Jayadev Mitali</Option>
            <Option value="Vijai Sritharan"> Vijai Sritharan</Option>
            <Option value="Barsati Sandipa">Barsati Sandipa</Option>
            <Option value="Hardeep Suksma">Hardeep Suksma</Option>
            </Select>
        </div>
      </div>
      
      <div className=" " style={{width:'1050px', height:'370px'}}>
         <Line data={filteredData} Attentiveness={true} checkedItems={checkedItems} lineColors={lineColors}/>
        </div>


          <div className="flex items-center justify-center space-x-4 mb-6 mt-4 font-Lato text-base text-[#2D3436]">
            <span className='text-[#818586]'>Show</span>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="timeToServe"
                    name="timeToServe"
                    checked={checkedItems.timeToServe}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                />
                <label htmlFor="timeToServe" className="ml-2">Time to Serve</label>
                
            <div className=" bg-[#F79044] rounded-full ml-2" style={{ width: '19px', height: '19px' }} />
            </div>
            <div className="flex items-center ">
                <input
                    type="checkbox"
                    id="timeToBill"
                    name="timeToBill"
                    checked={checkedItems.timeToBill}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 ml-4"
                />
                <label htmlFor="timeToBill" className="ml-2">Time to Bill</label>
                <div className=" bg-[#AD00FF] rounded-full ml-2" style={{ width: '19px', height: '19px' }} />
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="timeToDeliver"
                    name="timeToDeliver"
                    checked={checkedItems.timeToDeliver}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 ml-4"
                />
                <label htmlFor="timeToDeliver" className="ml-2">Time to Deliver</label>
                <div className=" bg-[#B6308B] rounded-full ml-2" style={{ width: '19px', height: '19px' }} />
            </div>
        </div>
    </div>
  );
};

export default Attentiveness;
