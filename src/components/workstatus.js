import React,{useState, useEffect} from 'react';
import { Select, Modal } from 'antd';
import { TbActivity, TbClockStop, TbDoorExit, TbShirt, TbDeviceMobile, TbCup } from "react-icons/tb";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Chart from 'chart.js/auto';
import Line from './charts/Line';

const { Option } = Select;

const WorkStatus = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [cardsData, setCardData] = useState([]);


  // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const data = [
    {
      id: 'timeToServe',
      color: '#F79044',
      data: [
        { x: '8:00AM', y: 10 },
        { x: '10:00AM', y: 6 },
        { x: '12:00PM', y: 15 },
        { x: '02:00PM', y: 10 },
        { x: '04:00PM', y: 7 },
        { x: '06:00PM', y: 11 },
        { x: '08:00PM', y: 16 },
        { x: '10:00PM', y: 8 },
      ],
    }
  ];

  const CustomTooltip = ({ point }) => {
    return (
        <div style={{ background: 'white', padding: '5px' }}>
          <span>Customers Attended</span>
            <div className='text-[#6F42C1]'>{ parseInt(point.data.yFormatted)}</div>
            <div>{point.data.xFormatted}</div>
        </div>
    );
};


  const cardData = [
    { id: 1, title: 'Total Activity', icon: <TbActivity size={28}/>, percentage: '60%', time:'2h 30Min', arrow:<GoArrowUp />  , active: '15%', green: true},
    { id: 2, title: 'Idle Time', icon: <TbClockStop size={28}/>, percentage: '15%', time:'30Min', arrow:<GoArrowDown />  , active: '15%', green: false },
    { id: 3, title: 'Away', icon: <TbCup size={28}/>, percentage: '5%', time:'15Min', arrow:<GoArrowDown />  , active: '15%', green: false },
    { id: 4, title: 'Store Exit', icon: <TbDoorExit size={28}/>, percentage: '10', time:'Times', arrow:<GoArrowDown />  , active: '15%', green: false },
    { id: 5, title: 'Phone Usage', icon: <TbDeviceMobile size={28}/>, percentage: '10%', time:'15Min', arrow:<GoArrowUp />  , active: '15%', green: true },
    { id: 6, title: 'Uniform Violation', icon: <TbShirt size={28}/>, percentage: 'YES', time:'', arrow:<GoArrowUp />  , active: '15%', green: true },
  ];

  return (
    <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5">
      <div className="flex items-center p-4 ">
        <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">Work Status</span>
        <div className="ml-64 ">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 mb-10 ml-4 gap-2" >
        {cardData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-3 mr-4 mt-4" onClick={() => handleCardClick(card)}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold font-Lato">{card.title}</h2>
              <div className="bg-[#E1D8F2] h-10 w-10 flex items-center justify-center rounded-md text-[#6F42C1]">
                {card.icon} 
              </div>
            </div>
            {cardData.length > 0 ? 
            <><div className="flex  items-center ">
                <div className=" text-[#6F42C1] text-4xl font-Lato">{card.percentage}</div>
                <h2 className="text-sm  font-Lato text-[#818586] mt-3 ml-2">{card.time}</h2>
              </div><div className="flex  items-center justify-center  -mb-6">
                  <div className={`mt-2 h-6 w-11 flex items-center justify-center rounded-md font-Lato  ${card.green ? 'bg-[#D5E2DD] text-[#317159]' : 'bg-[#F0D7D3] text-[#B93A28]'} text-xs`}>
                    {card.arrow} {card.active}
                  </div>
                  <h2 className="text-xs  font-Lato text-[#818586] mt-3 ml-1">vs Last week</h2>

                  <div className='w-24 h-20 ml-1'>
                    <canvas ref={(ref) => {
                      if (ref && !ref.chart) {
                        ref.chart = new Chart(ref.getContext('2d'), {
                          type: 'line',
                          data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [{
                              data: card.green ? [0, 1, 4, 5, 2, 8, 10] : [10, 8, 2, 5, 4, 1, 0],
                              fill: true,
                              borderColor: card.green ? '#317159' : '#B93A28',
                              borderWidth: 1.5,
                              tension: 0.4,
                              pointRadius: 0,
                              backgroundColor: card.green ? '#D5E2DD' : '#F0D7D3',
                            }]
                          },
                          options: {
                            plugins: {
                              legend: {
                                display: false
                              }
                            },
                            scales: {
                              x: {
                                display: false
                              },
                              y: {
                                display: false
                              }
                            }
                          }
                        });
                      }
                    } }></canvas>
                  </div>

                </div></> : <div className='text-[#6F42C1] font-bold text-3xl mt-4'>-</div> }
          </div>
        ))}

      {selectedCard &&  (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClosePopup}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center ">
              <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">{selectedCard.title}</span>
              <div className="ml-64 ">
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
            <div className="flex  items-center ">
                <div className=" text-[#6F42C1] text-4xl font-Lato">{selectedCard.percentage}</div>
                <h2 className="text-sm  font-Lato text-[#818586] mt-3 ml-2">{selectedCard.time}</h2>
            </div>
            <div className="flex ">
              <div className={`mt-2 h-6 w-11 flex items-center justify-center rounded-md font-Lato  ${selectedCard.green ? 'bg-[#D5E2DD] text-[#317159]' : 'bg-[#F0D7D3] text-[#B93A28]'} text-xs`}>
                {selectedCard.arrow} {selectedCard.active}
              </div>
              <h2 className="text-xs  font-Lato text-[#818586] mt-3 ml-1">vs Last week</h2>
            </div>
            
            <div className="mb-10 " style={{width:'1050px', height:'370px'}}>
             <Line data={data} CustomTooltip={CustomTooltip} />
            </div>


          </div>
        </div>
      )}

        </div>
    </div>
  );
      
};

export default WorkStatus;
