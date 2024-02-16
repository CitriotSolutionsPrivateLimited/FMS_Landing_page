import React from 'react'
import { graph1, graph2, graph3, graph4, graph5, graph6 } from "./constants";
import Cardie from './cardie';

const featuresData = [

  {
    id: 1,
    icon: graph1,
    title: "Fragmented Monitoring",
    des: "Multiple locations with no centralized",
  },
  {
    id: 2,
    icon: graph2,
    title: "Passive Surveillance",
    des: "Cameras operating without continuous monitoring or intelligent",
  },
  {
    id: 3,
    icon: graph3,
    title: "Intermittent Data Collection",
    des: "Lack of continuous monitoring and data collection",
  },
  {
    id: 4,
    icon: graph4,
    title: "Limited Employee Feedback",
    des: "Inadequate information for constructive employee feedback",
  },
  {
    id: 5,
    icon: graph5,
    title: "Absence of Custom",
    des: "Insufficient data on customer behaviour for business improvement",
  },
  {
    id: 6,
    icon: graph6,
    title: "Insights without Actionability",
    des: "Lack of actionable insights from surveillance data",
  },
];
function Problem() {
  return (
    <div className='bg-[#081326] sm:p-8 md:p-12 lg:p-20' id='problems'>
      <div
        className='bg-[#06071B] rounded-3xl py-12 h-full bg-contain'
        style={{ 
          backgroundImage: "url('./cardBG.png')", 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' /* Ensure the image does not repeat */
        }}
      >
        <div className='justify-center items-center flex'>
          <h3 className=' font-Lato font-semibold sm:text-2xl md:text-4xl text-white tracking-wide'>
            How we can help you
          </h3>
        </div>
        <div className='justify-center items-center flex sm:my-3 md:my-5 xl:my-8'>
          <div className="h-1 md:h-2 bg-white sm:w-16 md:w-32 xl:w-40 rounded-xl"></div>
        </div>
        <div className=' sm:ml-5 md:ml-10 sm:mt-10 md:mt-16 lg:mt-20 lg:mb-10 sm:mb-4'>
          <h3 className=' font-Lato sm:text-2xl md:text-3xl text-white font-semibold tracking-wide'>
            The Problem
          </h3>
        </div>

        <div className="lgl:mx-10 xs:mx-4 grid grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-10">
          {featuresData.map((item) => (
            <Cardie img={item.icon} tp={item.title} desc={item.des} key={item.id} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Problem