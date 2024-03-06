import React, { useState, useEffect } from "react";
import "./header.css";
import { chandra, logo } from "./constants";
import { loginLogo } from "../images/constants";
import Logo from "./logo";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Header() {
	const isMobile = window.innerWidth <= 667; 
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("overview");
	const [currentPage, setCurrentPage] = useState("overview")
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

	const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -100; // Adjust the offset as needed
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
		setCurrentPage(id)
	};

	useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming your sections have 'section' tag
      let currentActive = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
			setCurrentPage(currentActive)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

	const navigate = useNavigate();

	return (
		<>
		{!isMobile ? <header className="header bg-white sticky top-0 z-50">
			<nav className="navigation">
				<a
					href="#"
					className="logo absolute z-10">
					<img
						src={loginLogo}
						alt="VIZONAI"
						style={{ width: "100%", height: "auto",  }}
					/>
				</a>
				<ul className="flex mt-7 ml-72">
					<li>
						<a href="#overview" onClick={() => scrollToSection("overview")} className={`font-Lato text-lg mr-8 ${
              currentPage === "overview" ? "text-[#6F42C1]" : 'text-[#818586]' } hover:border-b-2 hover:border-[#6F42C1]` }> Overview</a>
					</li>
					<li>
						<a href="#problems" onClick={() => scrollToSection("problems")} className={`font-Lato text-lg mr-8 ${
              currentPage === "problems" ? " text-[#6F42C1]" : 'text-[#818586]'} hover:border-b-2 hover:border-[#6F42C1]` }>Problems</a>
					</li>
					<li>
						<a href="#solution" onClick={() => scrollToSection("solution")} className={`font-Lato text-lg mr-8 ${
              currentPage === "solution" ? " text-[#6F42C1]" : 'text-[#818586]'} hover:border-b-2 hover:border-[#6F42C1]` }>Solution</a>
					</li>
					<li>
						<a href="#about" onClick={() => scrollToSection("about")} className={`font-Lato text-lg mr-8 ${
              currentPage === "about" ? " text-[#6F42C1]" : 'text-[#818586]'} hover:border-b-2 hover:border-[#6F42C1]` }>About Us</a>
					</li>
					<li>
						<a href="#contact" onClick={() => scrollToSection("contact")} className={`font-Lato text-lg mr-8 ${
              currentPage === "contact" ? " text-[#6F42C1]" : 'text-[#818586]'} hover:border-b-2 hover:border-[#6F42C1]` }>Contact Us</a>
					</li>
				</ul>
			</nav>
		</header> : 
		<header className="header">
		<nav className="relative ">
		<div className="flex items-center justify-between p-4 md:p-6">
			<img src={chandra} className="hidden md:block bg-contain w-24 h-24" alt="" />
			<Logo />
			<div className="md:hidden cursor-pointer" onClick={toggleMenu}>
				<svg
					className="w-10 h-10 text-[#9C81CC]"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</div>
		</div>
		<ul
			className={`pt-2 pb-4 w-2/5 mr-4 ${isMenuOpen ? "block" : "hidden"} bg-white text-black absolute right-0`}
		>
			<li className="absolute top-0 right-0 m-2 md:hidden cursor-pointer" onClick={toggleMenu}>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</li>
			<li className="my-2">
				<a href="#overview" onClick={() => scrollToSection("overview")} className={`font-Lato font-bold text-xl ${
              activeSection === "overview" ? "text- text-[#9C81CC]" : "text-[#E0E1E2]"
            }`}>Overview</a>
			</li>
			<li className="my-2">
				<a href="#problems" onClick={() => scrollToSection("problems")} className={`font-Lato font-bold text-xl ${
              activeSection === "problems" ? "text-[#9C81CC]" : "text-[#E0E1E2]"
            }`}>Problems</a>
			</li>
			<li className="my-2">
				<a href="#solution" onClick={() => scrollToSection("solution")} className={`font-Lato font-bold text-xl ${
              activeSection === "solution" ? "text-[#9C81CC]" : "text-[#E0E1E2]"
            }`}>Solution</a>
			</li>
			<li className="my-2">
				<a href="#about" onClick={() => scrollToSection("about")} className={`font-Lato font-bold text-xl ${
              activeSection === "about" ? " text-[#9C81CC]" : "text-[#E0E1E2]"
            }`}>Contact Us</a>
			</li>
			<li className="my-2">
				<a href="#contact" onClick={() => scrollToSection("contact")} className={`font-Lato font-bold text-xl ${
              activeSection === "contact" ? " text-[#9C81CC]" : "text-[#E0E1E2]"
            }`}>Contact Us</a>
			</li>
			<li className="my-2">
				<Button onClick={()=>navigate('/login')} className="bg-[#8C68CD] border-0 rounded-lg h-8 w-20 text-white text-base font-Lato font-medium tracking-wide">
					Login
				</Button>
			</li>
			<li className="my-2">
				<Button onClick={()=>navigate('/login')} className="bg-transparent border-[#8C68CD] mx-4 rounded-lg h-8 w-20 text-[#8C68CD] text-base font-Lato font-medium tracking-wide">
					Sign up
				</Button>
			</li>
		</ul>
	</nav>
	</header>}
	</>
	);
}
						
export default Header;
