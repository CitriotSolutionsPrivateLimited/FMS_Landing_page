import React,{useState, useEffect} from 'react';
import { Select, Modal } from 'antd';
import { TbActivity, TbClockStop, TbDoorExit, TbShirt, TbDeviceMobile, TbCup } from "react-icons/tb";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Chart from 'chart.js/auto';
import { TbLivePhoto, TbDeviceCctv } from "react-icons/tb";

const Camera = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [cardsData, setCardData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (card) => {
    if(card.activity === 'Off'){
    setSelectedCard(card);
    setIsModalOpen(true);
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false); // Hide modal
  };


  const cardData = [
    { id: 1, title: 'Camera 1', activity: 'On', time:'11:10 am', date:' 12/12/2023'  ,  green: true},
    { id: 2, title: 'Camera 2', activity: 'On',  time:'11:10 am', date:' 12/12/2023'  ,  green: true },
    { id: 3, title: 'Camera 3', activity: 'Off',  time:'11:10 am', date:' 12/12/2023'  ,  green: false },
    { id: 4, title: 'Camera 4', activity: 'Off',  time:'11:10 am', date:' 12/12/2023'  ,  green: false },

  ];

  return (
    <div className=" rounded-lg shadow-md overflow-hidden bg-white mt-5">
      <div className="flex items-center p-4 ">
        <span className="mr-10 text-2xl font-Lato font-bold text-[#2D3436]">Camera</span>
      </div>
      {/* style={{width:'1050px', height:'360px'}} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 mb-10 ml-4 gap-2" >
        {cardData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-3 mr-4 mt-4" onClick={() => handleCardClick(card)}>
            <div className="flex items-center">
              <h2 className="text-lg font-Lato">{card.title}</h2>
              <TbLivePhoto size={22} className='ml-1' color={`${card.activity === 'On' ? '#317159' : '#B93A28'}`}/>
              <div className={`${card.activity === 'On' ? 'bg-[#D5E2DD]' : 'bg-[#F0D7D3]'} ml-16 h-10 w-10 flex items-center justify-center rounded-full `}>
                <TbDeviceCctv size={24} color={`${card.activity === 'On' ? '#317159' : '#B93A28'}`}/>
              </div>
            </div>
            {cardData.length > 0 ? 
            <><div className="flex  items-center ">
                <div className={`${card.activity === 'On' ? 'text-[#317159]' : 'text-[#B93A28]'} text-3xl font-semibold font-Lato`}>{card.activity}</div>
               
              </div>
              <div className="flex flex-col ">
                 <h2 className="text-base font-Lato mt-3 ">{card.activity === 'On' ? 'Last Turned Off On' : 'Turned Off On'}</h2>
                 <h2 className="text-sm  font-Lato text-[#575C5E]  ">{card.time}, {card.date}</h2>

                </div></> : <div className='text-[#6F42C1] font-bold text-3xl mt-4'>-</div> }
          </div>
        ))}
        </div>

        <Modal
        visible={isModalOpen}
        onCancel={handleModalCancel}
        footer={null}
        className="w-full max-w-96"
        >
        {selectedCard && (
          <div className='font-Lato mt-8'>
            <div className='flex flex-row items-center'>
            <div className={` bg-[#F0D7D3] h-10 w-10 flex items-center justify-center rounded-full `}>
                <TbDeviceCctv size={24} color={'#B93A28'}/>
            </div>
            <h2 className="text-xl font-Lato text-[#B93A28] ml-2">{selectedCard.title}</h2>
            </div>
            <p className='ml-12'>Your camera may be off due to the following reasons:</p>
            <p className="text-base font-Lato text-[#818586] mt-3">
              
              <ol className="list-decimal list-inside mt-2">
                <li className='mb-3'>This could be due to a power outage, a blown fuse, a tripped circuit breaker, or a loose power connection.</li>
                <li className='mb-3'>Loose connections or damaged cables can lead to this issue.</li>
                  <li className='mb-3'>The camera itself may have a hardware or software problem.</li>
                <li className='mb-3'>Internet outages can cause the camera to stop working.</li>
                <li className='mb-3'>Issues with the Digital Video Recorder (DVR) or Network Video Recorder (NVR).</li>
                <li className='mb-3'>Camera may be blocked due to dust or physical object.</li>
              </ol>
           </p>
          </div>
        )}
        </Modal> 

    </div>
  );
};

export default Camera;
