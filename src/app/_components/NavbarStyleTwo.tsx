"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "/public/images/LOGO (CC) SVG.svg";

const NavbarStyleTwo: React.FC = () => {
  const currentRoute = usePathname();
  const isSolutionsPage = currentRoute?.startsWith("/services/");
  const [isActive, setActive] = useState(false);
  const [isServiceNowOpen, setServiceNowOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ServiceNow items with display names and routes
  const serviceNowItems = [
    {
      name: "IT Service Management",
      route: "/services/Servicenow/itsm",
      description: "Streamline IT operations"
    },
    {
      name: "IT Asset Management",
      route: "/services/Servicenow/itam",
      description: "Optimize asset lifecycle"
    },
    {
      name: "IT Operations Management",
      route: "/services/Servicenow/itom",
      description: "Monitor & manage infrastructure"
    },
    {
      name: "Integrated Risk Management",
      route: "/services/Servicenow/irm",
      description: "Mitigate business risks"
    },
    {
      name: "Security Operations",
      route: "/services/Servicenow/secops",
      description: "Enhance security posture"
    },
    {
      name: "Strategic Portfolio Management",
      route: "/services/Servicenow/spm",
      description: "Align strategy & execution"
    },
    {
      name: "Customer Service Management",
      route: "/services/Servicenow/csm",
      description: "Deliver exceptional service"
    },
    {
      name: "Human Resources",
      route: "/services/Servicenow/hrsd",
      description: "Empower your workforce"
    },
    {
      name: "Field Service Management",
      route: "/services/Servicenow/fsm",
      description: "Optimize field operations"
    },
    {
      name: "Workplace Service Delivery",
      route: "/services/Servicenow/wsd",
      description: "Optimize field operations"
    }
  ];

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky", "shadow-lg", "bg-white/95", "backdrop-blur-md");
      } else {
        elementId?.classList.remove("isSticky", "shadow-lg", "bg-white/95", "backdrop-blur-md");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSearchModal = () => setActive(!isActive);

  const handleServiceNowEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServiceNowOpen(true);
  };

  const handleServiceNowLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServiceNowOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="navbar"
      className="navbar-area bg-transparent relative z-[999] py-[20px] lg:py-[25px] xl:py-0 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <nav className={`navbar relative flex flex-wrap items-center justify-between ${isActive ? "active" : ""}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-36 h-20 transition-transform duration-300 hover:scale-105">
              <Link href="/">
                <Image src={logo} className="inline w-full h-full object-contain" alt="EnableNow Logo" />
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            type="button"
            onClick={handleToggleSearchModal}
            aria-label="Toggle navigation"
          >
            <span className="burger-menu text-black cursor-pointer leading-none text-[24px]">
              <i className="bx bx-menu"></i>
            </span>
          </button>

          <div className="navbar-collapse flex items-center">
            <ul className="navbar-nav flex flex-col xl:flex-row xl:items-center xl:space-x-2">
              {/* Home */}
              <li className="relative group">
                <Link
                  href="/"
                  className={`block px-4 py-3 xl:py-8 text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#007ba8] relative ${
                    currentRoute === "/" ? "text-[#007ba8]" : "text-gray-800"
                  }`}
                >
                  Home
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#007ba8] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${currentRoute === "/" ? "w-full" : ""}`}></span>
                </Link>
              </li>

              {/* Solutions */}
              <li className="relative group">
                <Link
                  href="#"
                  className={`block px-4 py-3 xl:py-8 text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#007ba8] relative ${
                    isSolutionsPage ? "text-[#007ba8]" : "text-gray-800"
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  Solutions
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#007ba8] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${isSolutionsPage ? "w-full" : ""}`}></span>
                </Link>

                {/* Responsive Solutions Dropdown */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white rounded-xl shadow-2xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out min-w-max z-50 
                  sm:left-0 sm:transform-none sm:w-screen sm:max-w-sm sm:mx-auto
                  md:left-1/2 md:transform md:-translate-x-1/2 md:w-auto md:max-w-2xl
                  lg:max-w-4xl">
                  
                  {/* Main menu items - responsive layout */}
                  <div className="flex flex-col sm:flex-col md:flex-row items-start gap-4 px-4 
                    sm:gap-2 sm:px-3
                    md:gap-4 md:px-4">
                    
                    {/* ServiceNow */}
                    <div
                      className="relative group/servicenow w-full md:w-auto"
                      onMouseEnter={handleServiceNowEnter}
                      onMouseLeave={handleServiceNowLeave}
                    >
                      <Link
                        href="/services/Servicenow"
                        className={`block px-3 py-2 text-[15px] font-semibold hover:text-[#007ba8] transition-colors duration-200 whitespace-nowrap border-l-3 border-transparent hover:border-[#007ba8] hover:bg-blue-50/50 rounded-r-md w-full
                          sm:text-[14px] sm:px-2 sm:py-1.5
                          ${
                          currentRoute === "/services/ServiceNow"
                            ? "text-[#007ba8] border-[#007ba8] bg-blue-50/50"
                            : "text-gray-800"
                        }`}
                      >
                        <span className="flex items-center justify-between sm:justify-center md:justify-between gap-2">
                          ServiceNow
                          <svg className="w-4 h-4 transition-transform duration-200 group-hover/servicenow:rotate-180 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </Link>

                      {/* ServiceNow Nested Dropdown - Fully Responsive */}
                      <div
                        ref={dropdownRef}
                        className={`absolute bg-white rounded-xl shadow-2xl border border-gray-100 py-4 transition-all duration-300 ease-out ${
                          isServiceNowOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }
                        w-[95vw] max-w-[650px] left-1/2 transform -translate-x-1/2
                        sm:w-[90vw] sm:max-w-[400px]
                        md:w-[650px] md:max-w-[650px]
                        lg:w-[650px]`}
                        style={{
                          top: "calc(100% + 4px)",
                          zIndex: 1000,
                        }}
                        onMouseEnter={handleServiceNowEnter}
                        onMouseLeave={handleServiceNowLeave}
                      >
                        {/* Responsive Grid Layout */}
                        <div className="grid px-4
                          grid-cols-1 gap-1
                          sm:grid-cols-2 sm:gap-1.5 sm:px-2
                          md:grid-cols-3 md:gap-2 md:px-0
                          lg:grid-cols-3">
                          {serviceNowItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.route}
                              className={`block rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 border border-transparent hover:border-blue-200 group
                                py-1.5 px-2
                                sm:py-1 sm:px-1.5
                                md:py-1.5 md:px-2
                                ${
                                currentRoute === item.route ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200" : ""
                              }`}
                            >
                              <h4 className={`font-semibold transition-colors duration-200
                                text-[13px] mb-0.5
                                sm:text-[12px] sm:mb-0
                                md:text-[13px] md:mb-0.5
                                ${
                                currentRoute === item.route ? "text-[#007ba8]" : "text-gray-800 group-hover:text-[#007ba8]"
                              }`}>
                                {item.name}
                              </h4>
                              <p className="text-gray-600
                                text-xs leading-snug
                                sm:text-[10px] sm:leading-tight
                                md:text-xs md:leading-snug">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Software Development Services - Responsive */}
                    <Link
                      href="/services/software-development-services"
                      className={`block px-3 py-2 text-[15px] font-semibold hover:text-[#007ba8] transition-colors duration-200 border-l-3 border-transparent hover:border-[#007ba8] hover:bg-blue-50/50 rounded-r-md w-full md:w-auto
                        sm:text-[14px] sm:px-2 sm:py-1.5 sm:whitespace-normal sm:text-center
                        md:whitespace-nowrap md:text-left
                        ${
                        currentRoute === "/services/software-development-services"
                          ? "text-[#007ba8] border-[#007ba8] bg-blue-50/50"
                          : "text-gray-800"
                      }`}
                    >
                      <span className="sm:block md:inline">Software Development</span>
                    </Link>

                    {/* Strategic IT & Security Consulting - Responsive */}
                    <Link
                      href="/services/strategic-it-and-security-consulting"
                      className={`block px-3 py-2 text-[15px] font-semibold hover:text-[#007ba8] transition-colors duration-200 border-l-3 border-transparent hover:border-[#007ba8] hover:bg-blue-50/50 rounded-r-md w-full md:w-auto
                        sm:text-[14px] sm:px-2 sm:py-1.5 sm:whitespace-normal sm:text-center
                        md:whitespace-nowrap md:text-left
                        ${
                        currentRoute === "/services/strategic-it-and-security-consulting"
                          ? "text-[#007ba8] border-[#007ba8] bg-blue-50/50"
                          : "text-gray-800"
                      }`}
                    >
                      <span className="sm:block md:inline">Strategic Consulting</span>
                    </Link>
                  </div>
                </div>
              </li>

              {/* About */}
              <li className="relative group">
                <Link
                  href="/about-us/"
                  className={`block px-4 py-3 xl:py-8 text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#007ba8] relative ${
                    currentRoute === "/about-us/" ? "text-[#007ba8]" : "text-gray-800"
                  }`}
                >
                  Who We Are
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#007ba8] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${currentRoute === "/about-us/" ? "w-full" : ""}`}></span>
                </Link>
              </li>

              {/* Contact */}
              <li className="relative group">
                <Link
                  href="/contact-us/"
                  className={`block px-4 py-3 xl:py-8 text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#007ba8] relative ${
                    currentRoute === "/contact-us/" ? "text-[#007ba8]" : "text-gray-800"
                  }`}
                >
                  Contact
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#007ba8] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${currentRoute === "/contact-us/" ? "w-full" : ""}`}></span>
                </Link>
              </li>

              {/* Resources */}
              {/* <li className="relative group">
                <Link
                  href="/announcements/"
                  className={`block px-4 py-3 xl:py-8 text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#007ba8] relative ${
                    currentRoute === "/announcements/" ? "text-[#007ba8]" : "text-gray-800"
                  }`}
                >
                  Resources
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#007ba8] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${currentRoute === "/announcements/" ? "w-full" : ""}`}></span>
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarStyleTwo;