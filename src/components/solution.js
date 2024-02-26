import React from "react";
import { Row, Col } from "antd";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { laptop, cctv, graph, line, frame } from "../images/constants";
import { graph1, graph2, graph3, graph4, graph5, graph6 } from "./constants";

import Cardie from "./cardie";

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
function Solution() {
  return (
    <>
      <div className="bg-[#081326] w-screen  h-auto md:p-16 sm:p-7" >
        <div
          id="problems"
          className='bg-[#06071B] rounded-3xl py-12 h-full bg-contain md:-mt-28 -mt-16 mb-10'
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

          <div className="lgl:mx-10 xs:mx-2 grid grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-10">
            {featuresData.map((item) => (
              <Cardie img={item.icon} tp={item.title} desc={item.des} key={item.id} />
            ))}
          </div>

        </div>
        <div id="solution">
          <Row justify="start">
            <Col className="md:pl-16 md:pt-8 md:w-full md:h-full sm:w-32">
              <img src={frame} alt="frame" />
            </Col>
          </Row>
          <Row justify="space-around" className="flex-row md:p-8">
            <Col className=" md:flex-col md:w-2/5 md:p-7 md:gap-5">
              <h1 className="md:text-4xl lg:text-5xl sm:text-2xl text-white font-semibold leading-tight font-Lato">Redefine the way you Monitor with Vizon AI</h1>
              <p className="text-white md:text-2xl sm:text-lg my-5 font-thin leading-relaxed font-Lato">
                Our purpose is to deliver excellence in service and execution
              </p>
            </Col>
            <Col className=" flex-col md:w-3/5 md:p-7 ">
              <div className="flex items-center">
                <FaRegArrowAltCircleRight className="text-xl text-white mr-3" />
                <p className="text-white md:text-xl sm:text-sm md:my-4 sm:my-2 font-thin font-Lato">Unified dashboard for seamless oversight across all locations</p>
              </div>

              <div className="flex items-center">
                <FaRegArrowAltCircleRight className="text-xl text-white mr-3" />
                <p className="text-white md:text-xl sm:text-sm md:my-4 sm:my-2 font-thin font-Lato">Continuous monitoring and real-time data analysis for proactive insights</p>
              </div>

              <div className="flex items-center">
                <FaRegArrowAltCircleRight className="text-xl text-white mr-3" />
                <p className="text-white md:text-xl sm:text-sm nd:my-4 sm:my-2 font-thin font-Lato">Robust system for uninterrupted data gathering to enhance
                  situational awareness</p>
              </div>

              <div className="flex items-center">
                <FaRegArrowAltCircleRight className="text-xl text-white mr-3" />
                <p className="text-white md:text-xl sm:text-sm md:my-4 sm:my-2 font-thin font-Lato">Enhanced monitoring capabilities for detailed insights, improving
                  employee assessments</p>
              </div>

              <div className="flex items-center">
                <FaRegArrowAltCircleRight className="text-xl text-white mr-3" />
                <p className="text-white md:text-xl sm:text-sm md:my-4 sm:my-2 font-thin font-Lato">Intelligent analytics for actionable recommendations in operational improvements</p>
              </div>
            </Col>
          </Row>
          <div className="md:flex md:flex-col items-center md:justify-center p-10">
            <div className="md:grid grid-cols-5  items-center md:mb-8 pb-0">
              <div className="flex items-center flex-col md:ml-20">
                <div className="md:w-28 md:h-28 sm:w-24 sm:h-24 bg-gradient-to-b  rounded-full flex justify-center items-center cardie">
                  <img src={cctv} alt="CCTV Icon" className="w-16 h-16" />
                </div>
                <div className="text-center text-white md:w-52  sm:w-80 md:text-lg sm:text-base font-light mt-2 font-Lato">Data Feed from existing cameras are shared with the interceptor</div>
              </div>
              <img src={line} alt="Line" className="md:w-32 h-8 lg:w-80 lg:h-5 ml-0 sm:h-2 sm:w-20 md:mb-20 sm:mb-10 sm:rotate-90 md:rotate-0 xs:ml-20 sm:ml-28 sm:mt-10 md:ml-6 md:mt-0" />

              <div className="flex items-center flex-col">
                <div className="md:w-28 md:h-28 sm:w-24 sm:h-24 rounded-full flex justify-center items-center cardie">
                  <img src={laptop} alt="Laptop Icon" className="w-16 h-16" />
                </div>
                <div className="text-center text-white md:w-52  sm:w-80 md:text-lg sm:text-base font-light mt-2 font-Lato">VizonAi engine continuously monitors and crunches the data</div>
              </div>
              <img src={line} alt="Line" className="md:w-32 h-8 lg:w-80 lg:h-5 ml-0 sm:h-2 sm:w-20 md:mb-20 sm:mb-10 sm:rotate-90 md:rotate-0 xs:ml-20 sm:ml-28 sm:mt-10 md:ml-0 md:mt-0" />


              <div className="flex items-center flex-col md:mr-12">
                <div className="md:w-28 md:h-28 sm:w-24 sm:h-24  rounded-full flex justify-center items-center cardie">
                  <img src={graph} alt="Graph Icon" className="w-16 h-16" />
                </div>
                <div className="text-center text-white md:w-52  sm:w-80 md:text-lg sm:text-base font-light mt-2 font-Lato">Data Feed from existing cameras are shared with the interceptor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    
  );
}

export default Solution;


