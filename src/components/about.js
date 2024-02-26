import React from "react";
import { Row, Col } from "antd";
import { img,img2, img3 } from "../images/constants";

function AboutUs() {
  return (
    <div className="bg-[#081326] w-screen h-auto " id="about">
      <Row justify="start">
        <Col span={24}>
          <h1 className="text-3xl  md:pl-24 sm:pl-8 lg:pb-10 sm:pb-7 text-white font-light pt-10 font-Lato">About Us</h1>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" className=" lg:mx-20 sm:mx-5 md:flex-row flex-col sm:columns-1 md:columns-3 items-center">
        <Col className=" flex items-center flex-col md:w-1/3 lg:p-4 sm:p-3 ">
          <img src={img} className=" lg:w-80 lg:h-80 sm:w-40 sm:h-40 md:w-64 md:h-64" />
          <div className="flex items-center  flex-col  md:p-7 " >
            <h1 className="md:text-4xl text-[#B2B5B9] items-center sm:text-xl font-Lato">Aditya Mehta</h1>
            <h3 className="text-[#FDFDFD] md:text-3xl sm:text-lg font-Lato">Co-Founder</h3>
          </div>

          <div class="md:max-w-md md:mx-auto">

              <div class="relative">
                <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="absolute md:left-4 sm:left-3 top-6 lg:h-80 md:h-64 sm:h-56 border-l border-dotted border-white"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 mt-7 sm:text-lg font-light font-Lato">20+ years diverse experience</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 sm:text-lg font-light font-Lato">Expert in planning, tech consultation, and delivery management</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="absolute md:left-4 sm:left-3 top-6 lg:h-0 md:h-48 border-l border-dotted border-white"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 sm:text-lg font-light font-Lato">Mission: Transformative leadershipin Information Science & Analytics</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-2 sm:text-lg font-light font-Lato">Pursuing PhD in Gen AI, completed MBA from IIM Bangalore</p>
                </div>
              </div>

          </div>
        </Col>

        <Col className=" flex items-center flex-col md:w-1/3 md:p-5 sm:p-3">
          <img src={img2} className="lg:w-80 lg:h-80 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:mt-7 md:mt-32" />
          <div className="flex items-center flex-col  md:p-7 " >
            <h1 className="md:text-4xl text-[#B2B5B9] items-center sm:text-xl font-Lato">Faraaz Syed</h1>
            <h3 className="text-[#FDFDFD] md:text-3xl sm:text-lg font-Lato">Co-Founder</h3>
          </div>
          <div class="max-w-md mx-auto">
              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="absolute md:left-4 sm:left-3 top-6 lg:h-96 md:h-72 sm:h-80 border-l border-dotted border-white"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 mt-7 sm:text-lg font-light font-Lato">7+ years tech industry experience</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 sm:text-lg font-light font-Lato">Expertise from ABB, Wipro, National Instruments</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="absolute md:left-4 sm:left-3 top-6 lg:h-36 md:h-72 border-l border-dotted border-white"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 sm:text-lg font-light font-Lato">Electronics degree; Master's in Computational Data Sciences</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-8 sm:text-lg font-light font-Lato">Founder & CEO of Citriot, a Deep Tech pioneers</p>
                </div>
              </div>

              <div class="relative">
              <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
                <div class="ml-14 ">
                  <p class="text-white md:text-2xl mb-2 sm:text-lg font-light font-Lato">Entrepreneurial spirit driving innovation at Citriot</p>
                </div>
              </div>

          </div>
        </Col>

        <Col className=" flex items-center flex-col md:w-1/3 lg:p-3 md:p-1 sm:p-3 ">
          <img src={img3} className="lg:w-80 lg:h-80 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:mt-14 md:mt-36" />
          <div className="flex items-center flex-col  md:p-7 " >
            <h1 className="md:text-4xl text-[#B2B5B9] items-center sm:text-xl font-Lato">Iram Maimuna</h1>
            <h3 className="text-[#FDFDFD] md:text-3xl  sm:text-lg font-Lato">Co-Founder</h3>
          </div>

          <div class="max-w-md mx-auto">
            <div class="relative">
            <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
              <div class="absolute md:left-4 sm:left-3 top-6 lg:h-96 md:h-72 sm:h-72 border-l border-dotted border-white"></div>
              <div class="ml-14 ">
                <p class="text-white md:text-2xl mb-8 mt-7 sm:text-lg font-light font-Lato">AI product development pioneer</p>
              </div>
            </div>

            <div class="relative">
            <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
              <div class="ml-14 ">
                <p class="text-white md:text-2xl mb-6 sm:text-lg font-light font-Lato">IIM Bangalore executive education, business management background</p>
              </div>
            </div>

            <div class="relative">
            <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
              <div class="absolute md:left-4 sm:left-3 top-6 lg:h-36 md:h-60 border-l border-dotted border-white"></div>
              <div class="ml-14 ">
                <p class="text-white md:text-2xl mb-6 sm:text-lg font-light font-Lato">Led major AI initiatives for monitoring</p>
              </div>
            </div>

            <div class="relative">
            <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
              <div class="ml-14 ">
                <p class="text-white md:text-2xl mb-8 sm:text-lg font-light font-Lato">Founder of E-Waste Social Pvt Ltd, promoting sustainable waste solutions</p>
              </div>
            </div>

            <div class="relative">
            <div class="absolute left-1 sm: w-5 sm:h-5  top-0 mt-2 md:w-7 md:h-7 bg-white rounded-full"></div>
              <div class="ml-14 ">
                <p class="text-white md:text-2xl mb-2 sm:text-lg font-light font-Lato">Diverse tech, business, and sustainability expertise, valuable team asset</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;


