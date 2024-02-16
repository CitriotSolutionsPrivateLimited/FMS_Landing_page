import React, { useState, useEffect } from "react";
import "./header.css";
import { chandra, logo } from "./constants";
import Logo from "./logo";
import { Button } from "antd";
function Header() {
	const isMobile = window.innerWidth <= 667; 
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("overview");

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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


	return (
		<>
		{!isMobile ? <header className="header bg-[#9C81CC]">
			<nav className="navigation">
				<img src={chandra} className=" bg-contain absolute w-96 h-96" alt="" />
				<a
					href="#"
					className="logo absolute z-10">
					<img
						src={logo}
						alt="VIZONAI"
						style={{ width: "50%", height: "auto",  }}
					/>
				</a>
				<ul className="nav-links ml-60">
					<li>
						<a href="#overview" onClick={() => scrollToSection("overview")} className="font-Lato">Overview</a>
					</li>
					<li>
						<a href="#problems" onClick={() => scrollToSection("problems")} className="font-Lato">Problems</a>
					</li>
					<li>
						<a href="#solution" onClick={() => scrollToSection("solution")} className="font-Lato">Solution</a>
					</li>
					<li>
						<a href="#contact" onClick={() => scrollToSection("contact")} className="font-Lato">Contact Us</a>
					</li>
				</ul>
			</nav>
		</header> : 
		<header className="header md:bg-[#9C81CC]">
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
			className={`pt-10 pb-4 w-2/5 mr-4 ${isMenuOpen ? "block" : "hidden"} bg-white text-black absolute right-0`}
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
				<a href="#contact" onClick={() => scrollToSection("contact")} className={`font-Lato font-bold text-xl ${
              activeSection === "contact" ? " text-[#9C81CC]" : "text-[#E0E1E2]"
            }`}>Contact Us</a>
			</li>
			<li className="my-4">
				<Button className="bg-[#8C68CD] border-0 rounded-lg h-8 w-20 text-white text-base font-Lato font-medium tracking-wide">
					Login
				</Button>
			</li>
			<li className="my-2">
				<Button className="bg-transparent border-[#8C68CD] mx-4 rounded-lg h-8 w-20 text-[#8C68CD] text-base font-Lato font-medium tracking-wide">
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
