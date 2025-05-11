import logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.jpg";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";
import dropdown from "../assets/dropdown.png";
import menu from "../assets/menuicon.png";
import { useState } from "react";

const container = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      staggerChildren: 0.2,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const navItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <motion.div
        className="flex items-center justify-between py-5 font-medium px-6 sm:px-10 shadow-md bg-white"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link to={"/"}>
          <div className="item flex items-center gap-3 p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 transition-all duration-300">
            <img
              src={logo}
              alt="Facebook"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-lg font-semibold text-gray-800">Emmark-Tech</p>
          </div>
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT US" },
            { path: "/services", label: "OUR SERVICES" },
            { path: "/contact", label: "CONTACT" },
          ].map((link, index) => (
            <motion.div
              key={index}
              variants={navItem}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={link.path}
                className="flex flex-col items-center gap-1"
              >
                <p>{link.label}</p>
                <hr className="w-2/4 border-none h-[2.5px] bg-gray-500 hidden" />
              </NavLink>
            </motion.div>
          ))}
        </ul>

        {/* <motion.div className="flex items-center gap-6 " variants={container}>
          <a
            href="https://wa.me/2348130169810"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={whatsapp}
              alt="WhatsApp"
              className="w-9 cursor-pointer"
              style={{ borderRadius: "100%" }}
              variants={iconItem}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574463552787"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={facebook}
              alt="Facebook"
              className="w-9 cursor-pointer"
              style={{ borderRadius: "100%" }}
              variants={iconItem}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
          <a
            href="https://www.instagram.com/emmark.tech?igsh=cHd4ZHNxZGlhaml6&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={instagram}
              alt="Instagram"
              className="w-9 cursor-pointer"
              style={{ borderRadius: "100%" }}
              variants={iconItem}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@emmark.tech?_t=ZM-8vZ41PfFf4n&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={tiktok}
              alt="TikTok"
              className="w-9 cursor-pointer"
              style={{ borderRadius: "100%" }}
              variants={iconItem}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
        </motion.div> */}

        <img
          onClick={() => setVisible(true)}
          src={menu}
          alt=""
          className="w-10 cursor-pointer sm:hidden"
        />
      </motion.div>

      {/* Sidebar menu for smaller screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              className="w-8 rotate-180 cursor-pointer"
              src={dropdown}
              onClick={() => setVisible(false)}
              alt="Close Menu"
              style={{ marginTop: "5vh" }}
            />
            {/* <p className='text-gray-600'>Back</p> */}
          </div>
        </div>
        <ul className="flex flex-col text-gray-600">
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="p-4 hover:bg-gray-100"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="p-4 hover:bg-gray-100"
          >
            ABOUT US
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/services"
            className="p-4 hover:bg-gray-100"
          >
            OUR SERVICES
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="p-4 hover:bg-gray-100"
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
