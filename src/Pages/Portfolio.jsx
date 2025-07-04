import React, { useState } from "react";
import { assets } from "../asset/assets";
import "./default-ripple.css";
import { useNavigate } from "react-router-dom";

const portfolio = [
  {
    title: "Ecommerce Web. Dev.",
    description:
      "ElionPhones is a fully customized e-commerce platform developed by Emmark Tech, enabling the business to sell new and UK-used gadgets online with modern features like mobile responsiveness, secure payments, product search, and delivery management. It’s a prime example of our E-commerce Development Service, built to drive digital sales and operational growth",
    href: "https://elion-phones-adminpanel.vercel.app/",
    image: assets.elion,
  },
  {
    title: "Graphics Design",
    description:
      "Emmark Tech offers creative and brand-focused graphic design services, delivering logos, flyers, social media content, and more. Our designs are crafted to communicate clearly, attract attention, and enhance brand identity across all digital and print platforms.",
    href: "./assets/graphics.jpg",
    download: true,
    image: assets.graphics,
  },
  // {
  //   title: "Enterprise IT Solutions",
  //   description:
  //     "We empower enterprises and startups worldwide with intelligent IT infrastructure, secure cloud integration, and transformative digital strategies. Our future-focused solutions are engineered to scale, adapt, and deliver exceptional value in today’s dynamic global marketplace.",
  //   href: "#",
  //   image: assets.enterprise,
  // },
  {
    title: "Healthcare system",
    description:
      "DoctorHub is an all-in-one healthcare management system, designed to simplify how patients, hospitals, and healthcare providers connect. from doctor appointments and investigations to home services and secure payments - manage everything in one place and with ease...",
    href: "https://doc.emmark.tech/",
    image: assets.dochub,
  },
];

const PortfolioCard = ({ title, description, image, href, download }) => {
  const navigate = useNavigate();

  const [readMore, setReadMore] = useState(false);
  const preview = description.slice(0, 30);

  return (
    <div
      style={{ border: "2px solid black", backgroundImage: `url(${image})` }}
      className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-[0_2px_25px_blue] transition-transform hover:scale-[1.02]"
    >
      <a
        href={href}
        {...(download ? { download: true } : {})}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 block"
      >
        <span className="ripple-ring absolute inset-0 z-0"></span>
        <img src={assets.send} className="w-12 relative z-10" alt="Send Icon" />
      </a>

      <div
        style={{ border: "1px solid black" }}
        className="bg-white w-10/12 rounded-md hover:shadow-[0_2px_35px_blue] absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col gap-2 duration-500 group-hover:bottom-7"
      >
        <h2 className="font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-700">
          {readMore ? description : `${preview}... `}
          {description.length > 30 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setReadMore(!readMore);
              }}
              className="text-blue-500 font-semibold ml-1"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

// ✅ Main Portfolio Section
const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 text-black justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-1 font-Ovo">
        Our latest projects
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        We’ve worked on numerous projects across industries, each crafted with
        precision, innovation, and impact in mind. Below are just a few examples
        from our growing portfolio — a glimpse into the kind of value-driven,
        tech-powered solutions we deliver
      </p>

      <div className="grid gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.href}
            download={item.download}
          />
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl shadow-lg"
        >
          See More...
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
