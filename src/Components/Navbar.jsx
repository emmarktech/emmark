import React, { useContext, useState } from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import { assets } from "../asset/assets";

// import './style.css'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
const isAboutActive = ["/about", "/team", "/vision"].some(path =>
  location.pathname.startsWith(path)
);


  return (
    <div className="flex items-center justify-between py-4 font-medium relative z-50  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[3vw] sticky top-0 bg-gradient-to-r from-black via-black to-white shadow-md">
      <Link to="/">
        <img src={assets.logo} className="w-full h-10" alt="Company Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink
          className="flex flex-col items-center text-white font-bold hover:text-blue-600 no-underline"
          style={{ textDecoration: "none" }}
          to="/"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
       
       {/* ----------------- about -------------------------- */}
       <div
  className={`flex flex-col items-center text-white cursor-pointer font-bold hover:text-blue-600 no-underline ${
    isAboutActive ? "text-blue-600" : ""
  }`}
>
  <NavLink className="group relative">
    <NavLink>ABOUT <span className=" text-sm">+</span></NavLink>

    {/* Dropdown */}
    <div
      className="absolute left-0 hidden group-hover:block bg-blue-100 rounded shadow-md  p-3"
      style={{ marginLeft: "auto", marginRight: "auto", width: "20vh" }}
    >
      <NavLink
        to="/about"
        className="cursor-pointer hover:text-blue-600 py-1 px-1 text-black"
      >
        Who We Are
      </NavLink>
      <hr />
      <NavLink to="/team" className="cursor-pointer hover:text-blue-600 text-black py-1 px-1">
        Our Team
      </NavLink>
      <hr />
      <NavLink to="/vision" className="cursor-pointer hover:text-blue-600 text-black py-1 px-1">
        Our Vision
      </NavLink>
    </div>
  </NavLink>

  {/* Active HR */}
  <hr
    className={`w-2/4 border-none h-[1.5px] bg-white ${
      isAboutActive ? "block" : "hidden"
    }`}
  />
</div>

       {/* ------------------ about.ends ------------------------------------- */}

        <NavLink
          className="flex flex-col items-center text-white  font-bold hover:text-blue-600 no-underline"
          style={{ textDecoration: "none" }}
          to="/services"
        >
          <p>PRODUCTS & SERVICES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink
          className="flex flex-col items-center text-white  font-bold hover:text-blue-600 no-underline"
          style={{ textDecoration: "none" }}
          to="/partners"
        >
          <li>PARTNERS</li>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink
          className="flex flex-col items-center text-white  font-bold hover:text-blue-600 no-underline"
          style={{ textDecoration: "none" }}
          to="/clients"
        >
          <li>CLIENTS</li>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        {/* <NavLink 
            className='flex flex-col items-center text-gray-700  font-bold hover:text-blue-700 no-underline' 
            style={{ textDecoration: 'none' }} 
            to="/contact">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink> */}
      </ul>

      <div className="AA flex items-center gap-6 ">
        <Link to="/contact" className="max-[900px]:hidden">
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition duration-300 disabled:opacity-50">
            {/* <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> */}
            Contact Us
          </button>
        </Link>

        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          className="w-10 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar menu for smaller screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              className="h-7 rotate-180 cursor-pointer"
              src={assets.dropdown_icon}
              onClick={() => setVisible(false)}
              alt="Close Menu"
            />
            {/* <p className='text-gray-600'>Back</p> */}
          </div>
        </div>
        <ul className="flex flex-col text-black">
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            HOME
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            ABOUT US
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/vision"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            OUR VISION
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/team"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            OUR TEAM
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/services"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            PRODUCTS & SERVICES
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/partners"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            PARTNERS
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/clients"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            CLIENTS
          </NavLink>
          <hr className="w-[90%] m-auto " />
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="p-4 hover:bg-gray-100 font-bold hover:text-blue-700"
          >
            CONTACT
          </NavLink>
          <hr className="w-[90%] m-auto " />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
