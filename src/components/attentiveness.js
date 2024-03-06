import React,{useState, useEffect} from 'react';
import { Select } from 'antd';
import { TbActivity, TbClockStop, TbDoorExit, TbShirt, TbDeviceMobile, TbCup } from "react-icons/tb";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Chart from 'chart.js/auto';
import { ResponsiveLine } from '@nivo/line'

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
    <div className=" rounded-lg shadow-md overflow-hidden w-full bg-white mt-5">
      <div className="flex items-center p-4 ">
        <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">Attentiveness</span>
        <div className="ml-44 ">
          <Select 
            defaultValue="Select Franchise"
            style={{ width: 150, height:35, fontSize: '20px' }}
            >
            <Option value="option1" className='text-xs'>Option 1</Option>
            <Option value="option2" className='text-xl'>Option 2</Option>
            <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
        </div>
        <div className="ml-7">
          <Select
            defaultValue="Select Employee"
            style={{ width: 150, height:35,  fontSize: '20px' }}
            >
            <Option value="option1" style={{ fontSize: '16px' }}>Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
            </Select>
        </div>
        <div className="ml-7">
          <Select className='hover:border-[#8C68CD]'
            defaultValue="Department"
            style={{ width: 150, height:35, fontSize: '20px' }}
            >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
            </Select>
        </div>
        <div className="ml-7 ">
          <Select 
            defaultValue="Date and Time"
            style={{ width: 150, height:35, fontSize: '20px' }}
            >
            <Option value="option1" className='text-xl'>Option 1</Option>
            <Option value="option2" className='text-xl'>Option 2</Option>
            <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
        </div>
      </div>
      
      <div className=" " style={{width:'1050px', height:'370px'}}>
          <ResponsiveLine
              data={filteredData}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{
                  type: 'linear',
                  min: 0,
                  max: 'auto',
                  // stacked: true,
                  reverse: false
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendOffset: 36,
                  legendPosition: 'middle',
                  truncateTickAt: 0
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Time In Minutes',
                  legendOffset: -40,
                  legendPosition: 'middle',
                  truncateTickAt: 0
              }}
              enablePoints={false}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              colors={Object.keys(checkedItems).filter((key) => checkedItems[key]).map((key) => lineColors[key])}
              useMesh={true}
          />
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
