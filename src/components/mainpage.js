import React from 'react'
import Header from "./header";
import Hero from "./hero";
import Solution from './solution';
import ContactUs from './contact';
import ABoutUS from './about';

function Mainpage() {
  return (
    <>
    <Header />
    <Hero />
    <Solution />
    <ABoutUS />
    <ContactUs />
    <div className=' flex justify-center items-center my-2'>
      <h1>
      © Copyrights 2024. All rights reserved.
      </h1>
    </div>
    </>
  )
}

export default Mainpage