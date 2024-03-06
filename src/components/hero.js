import React from "react";
import "./hero.css";
import { cards, mob1, mob2, mob3, mob4, chandra } from "./constants";

import { Button } from "antd";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderWrapper from "./slider";
import { useNavigate } from "react-router-dom";

function Hero() {
	const isMobile = window.innerWidth <= 667;
	const navigate = useNavigate();
	
	const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

	return (
		<>
		{isMobile ?
			<section className="content-section-mobile px-8 py-14" id="overview">
				<div >
					<h2 className="text-gradient1 text-4xl font-semibold pb-2 tracking-widest">Explore Modern Monitoring with</h2>
					<h1 className="text-gradient2 font-bold text-5xl tracking-wide">AI Solutions</h1>
					<p className=" text-[#fdfdfd] my-5 text-opacity-80 font-Lato font-bold text-base mr-4">
						Use VIZON AI to find and manage the best AI Solution for your business
						needs and budget.
					</p>
				</div>
				<SliderWrapper>
				<Slider {...settings} className="mb-14  mt-16">
					<div className="testimoni--wrapper">
						<img src={mob1} alt="Image 1" />
					</div>
					<div className="testimoni--wrapper">
						<img src={mob4} alt="Image 2" />
					</div>
					<div className="testimoni--wrapper">
						<img src={mob3} alt="Image 3" />
					</div>
					<div className="testimoni--wrapper">
						<img src={mob2} alt="Image 3" />
					</div>
				</Slider>
				</SliderWrapper>

				{/* <div className="col-span-2 mx-10 ">
					<img
						src={cards}
						alt="Placeholder image"
					/>
				</div> */}
			</section> 
			: 
			<section className="content-section grid grid-cols-3 h-full px-20 py-40" id="overview">
				<img src={chandra} className=" bg-contain absolute w-96 h-96 -mt-40 -ml-20" alt="" />

			<div className=" col-span-1 ">
				<h2 className="text-gradient1 text-4xl font-semibold pb-2 lg:text-6xl text-white">Explore Modern Monitoring with</h2>
				<h1 className="text-gradient2 font-bold lg:text-7xl text-5xl tracking-wide">AI Solutions</h1>
				<p className=" text-[#fdfdfd] my-5 text-opacity-80 font-Lato font-bold lg:text-2xl text-xl mr-4">
					Use VIZON AI to find and manage the best AI Solution for your business
					needs and budget.
				</p>
				<div className=" my-8">
					<button className="bg-[#C5B3E6] border-0 lg:h-14 rounded-lg lg:w-32 h-10 w-24 text-white lg:text-2xl text-xl font-Lato font-medium tracking-wide hover:bg-[#6F42C1] " onClick={()=>navigate('/login')}>
						Login
					</button>
					<button className="bg-transparent border-white mx-4 lg:h-14 rounded-lg lg:w-32 h-10 w-24 text-white lg:text-2xl text-xl font-Lato font-medium tracking-wide hover:bg-[#6F42C1] " style={{ border: '1px solid white'}} onClick={()=>navigate('/login')}>
					Sign up
					</button>
				</div>
			</div>
			<div className="col-span-2 mx-10 ">
				<img
					src={cards}
					alt="Placeholder image"
				/>
			</div>
		</section>
			}
		</>
	);
}

export default Hero;
