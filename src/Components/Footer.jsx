import React from "react";
import logo from "../assets/tech.jpg";
import phone from "../assets/phone.jpg";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.jpg";
import tiktok from "../assets/tiktok.png";

import home from "../assets/home.png";
import aboutus from "../assets/aboutus.png";
import services from "../assets/services.png";
import privacy from "../assets/privacy.png";
import did from "../assets/did.png";
import { Link } from "react-router-dom";
import { assets } from "../asset/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-500 mt-16 ">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-20 h-auto px-10 py-20">
        <div>
          <img
            className="mb-10 w-[40vh]"
            src={assets.emmark}
            alt="Elion Logo"
          />
          <p className="w-full text-white">
            Emmark Tech is your trusted partner for cutting-edge digital
            solutions and practical tech training. We specialize in software
            development, IT consulting, and talent empowerment to help
            individuals and businesses thrive in a tech-driven world.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-3xl font-medium mb-5 text-white font">Company</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium">
                <img src={home} alt="Facebook" className="w-6  rounded-full" />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="flex gap-2 mb-2 font-medium">
                <img
                  src={aboutus}
                  alt="Facebook"
                  className="w-6  rounded-full"
                />
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="flex gap-2 mb-2 font-medium">
                <img
                  src={services}
                  alt="Facebook"
                  className="w-6  rounded-full"
                />
                Services
              </Link>
            </li>
            <li>
              <Link to={"/privacy"} className="flex gap-2 mb-2 font-medium">
                <img
                  src={privacy}
                  alt="Facebook"
                  className="w-6  rounded-full"
                />
                PrivacyPolicy
              </Link>
            </li>
            <li>
              <Link to={"/facts"} className="flex gap-2 mb-2 font-medium">
                <img src={did} alt="did" className="w-6  rounded-full" />
                Did You Know?
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-3xl font-medium mb-5 text-white font">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>
              <a
                href="tel:+2348130169810"
                className="flex gap-2 mb-2 font-medium"
              >
                <img src={phone} alt="Facebook" className="w-6  rounded-full" />
                +2348130169810
              </a>
            </li>
            {/* <li><a href="mailto:elionphones@gmail.com" >elionphones@gmail.com</a></li> */}
            <li>
              {" "}
              <a
                href="https://wa.me/2348130169810"
                className="flex gap-2 mb-2 font-medium"
              >
                {" "}
                <img
                  src={assets.whatsapp}
                  alt="Facebook"
                  className="w-6  rounded-full"
                />{" "}
                Whatsapp
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/profile.php?id=61574463552787"
                className="flex gap-2 mb-2 font-medium"
              >
                {" "}
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-6  rounded-full"
                />
                Facebook
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/emmark.tech?igsh=cHd4ZHNxZGlhaml6&utm_source=qr"
                className="flex gap-2 mb-2 font-medium"
              >
                {" "}
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-6  rounded-full"
                />
                Instagram
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.tiktok.com/@emmark.tech?_t=ZM-8vZ41PfFf4n&_r=1"
                className="flex gap-2 mb-2 font-medium"
              >
                {" "}
                <img src={tiktok} alt="Tiktok" className="w-6  rounded-full" />
                Tiktok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Ensure the copyright section is part of the footer */}
      <div className="flex flex-col items-center justify-center mt--30">
        <hr className="border-gray-300 w-full" />
        <p className="py-3 text-sm text-center text-white">
          Copyright 2025 @Emmark-Tech.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
