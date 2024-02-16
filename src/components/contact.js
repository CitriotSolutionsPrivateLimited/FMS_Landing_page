import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { Row, Col, Input, Button, Form, message } from "antd";
import { contactBg } from "../images/constants";

function ContactUs() {
  const handleSend = () =>{
    message.success('Our team will contact you soon, Thank You!');
  }
  return (
    <div className="bg-[#081326] w-screen h-auto" id="contact">
      <Row justify="start">
        <Col span={24}>
          <h1 className="text-3xl  md:pl-24 sm:pl-8 md:pb-10 sm:pb-7 text-white font-light pt-10">Contact Us</h1>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" className="bg-white md:mx-20 sm:mx-5 md:flex-row flex-col sm:columns-1      md:columns-2  rounded-3xl">

        <Col className="bg-[#03071C] flex-col rounded-2xl md:pt-10 sm:p-6 md:pl-10 pb-20 w-1/2 lg:pb-80 sm:w-11/12 lg:w-2/5  sm:my-4 lg:mx-16 lg:my-12">
          <h1 className="md:text-4xl sm:text-xl text-white font-light ">Contact Information</h1>
          <p className="text-white md:text-2xl sm:text-base md:my-5 sm:my-2 font-thin">
            Connect to us
          </p>
          <div className="flex-col md:my-14 sm:my-4 md:gap-12 sm:gap-3 flex">
            {/* <div className="flex gap-5   w-full ">
              <MdPhoneInTalk className="md:text-2xl sm:text-lg text-white"/>
              <p className="md:text-lg sm:text-xs text-white font-thin">
              (+1) 510-945-8169
              </p>
            </div> */}
            <div className="flex gap-5   w-full ">
              <MdEmail className="md:text-2xl sm:text-lg text-white"/>
              <p className=" md:text-lg sm:text-xs text-white font-thin">
              info@vizonai.com
              </p>
            </div>
            <div className="flex gap-5 w-2/3 ">
              <HiLocationMarker className="md:text-5xl sm:text-4xl text-white" />
              <p className=" md:text-lg sm:text-xs text-white font-thin">
              #3, 2nd Floor, Clark Wood Road, Richards Town, Bangalore- 560005
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
          <img src={contactBg} className="md:w-56 md:h-64 sm:w-24 sm:h-24" />
          </div>
        </Col>
        {/* Contact form */}
        <Col className=" lg:p-12 rounded-lg  lg:w-2/5 md:p-10 w-1/2 md:pl-2 sm:w-11/12 ">
          <Form layout="vertical">
            <label className="block md:text-2xl mb-2" htmlFor="full_name">Full Name</label>
            <Form.Item name="full_name" >
              <Input placeholder="Enter Your Full Name" className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-4"/>
            </Form.Item>

            <label className="block md:text-2xl mb-2" htmlFor="full_name">Email</label>
            <Form.Item name="email">
              <Input type="email" placeholder="Email" className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-4"/>
            </Form.Item>

            <label className="block md:text-2xl mb-2" htmlFor="full_name">Mobile Number</label>
            <Form.Item name="number">
              <Input placeholder="+91" className="md:text-lg sm:text-sm sm:h-12 md:h-16 md:mb-4"/>
            </Form.Item>

            <label className="block md:text-2xl mb-2" htmlFor="full_name">Message</label>
            <Form.Item name="message">
              <Input.TextArea rows={5} placeholder="Your message" className="md:text-lg sm:text-sm mb-4"/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handleSend} className="w-full md:h-14 sm:h-10 bg-[#8C68CD] md:text-xl sm:text-lg">
                Send
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <div className="md:border-b md:border-white md:mt-24 md:mb-10 md:ml-14 md:mr-14 sm:mt-9"></div>

     
      <div className="flex flex-col md:flex-row text-white md:pl-20 md:pb-20 md:pr-20 sm:pl-6 sm:pr-0">
        <div className="flex-col md:gap-5 sm:gap-4 flex md:w-1/2 sm:w-3/4">
          <h2 className="md:text-xl sm:lg mb-4 font-thin">Reach us</h2>
            {/* <div className="flex gap-5 w-full ">
              <MdPhoneInTalk className="text-xl text-white"/>
              <p className=" text-white font-thin sm:text-sm md:text-base">
              (+1) 510-945-8169
              </p>
            </div> */}
            <div className="flex gap-5   w-full ">
              <MdEmail className="text-xl text-white"/>
              <p className=" text-white font-thin sm:text-sm md:text-base">
              info@vizonai.com
              </p>
            </div>
            <div className="flex gap-5 w-full ">
              <HiLocationMarker className="text-3xl text-white" />
              <p className="  text-white font-thin sm:text-sm md:text-base">
              #3, 2nd Floor, Clark Wood Road, Richards Town, Bangalore- 560005
              </p>
            </div>
        </div>

        <div className="flex md:gap-20 lg:gap-36 sm:gap-32 flex-row w-4/5 sm:mt-11 md:mt-0 md:ml-10">

          <div className="flex-col md:gap-5 sm:gap-3 flex w-1/4 ">
            <h2 className="md:text-xl sm:lg md:mb-4 sm:mb-1 font-thin">Company</h2>
            <p className="text-white font-thin sm:text-sm md:text-base">About</p>
            <p className="text-white font-thin sm:text-sm md:text-base">Contact</p>
            <p className="text-white font-thin sm:text-sm md:text-base">Blogs</p>
          </div>

          <div className="flex-col md:gap-5 sm:gap-3 flex w-2/3 md:mr-8">
            <h2 className="md:text-xl sm:lg  md:mb-4 sm:mb-1 font-thin">Legal</h2>
            <p className=" text-white font-thin sm:text-sm md:text-base">Privacy Policy</p>
            <p className="text-white font-thin sm:text-sm md:text-base">Terms & Services</p>
            <p className="text-white font-thin sm:text-sm md:text-base">Terms of Use</p>
            <p className="text-white font-thin sm:text-sm md:text-base">Refund Policy</p>
          </div>
        </div>
        
        <div className="flex-col gap-5 flex lg:w-1/4 bg-[#03071C] rounded-2xl p-3 mr-10 md:mt-0 sm:mt-7 md:mb-0 sm:mb-8">
          <h2 className="md:text-xl sm:text-lg mb-3 font-light">Join Our Newsletter</h2>
          <div class="flex">
            <input type="email" placeholder="Your email address" class="md:w-48  px-3 py-2 bg-[#0B0F26]" />
            <button class="bg-[#0B0F26] text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="mb-2 text-[#616161]">*  Will send you weekly updates for your better tool management.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;


