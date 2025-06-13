import React from "react";
import { assets } from "../asset/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate()

  return (
    <div className="relative w-full h-screen overflow-hidden z-[1]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={assets.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Foreground Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      >
        <h1 className="text-2xl md:text-6xl  font-extrabold leading-tight max-w-4xl ">
          Empowering Digital Growth with{" "}
          <span className="text-blue-600">Emmark-Tech</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl font-medium">
          We build sleek digital products, scalable web solutions, and transform
          ideas into high-performing realities.
        </p>

        <p className="mt-2 text-sm md:text-base text-gray-200 font-light">
          <span className="text-white font-semibold">Join us</span> on your tech
          journey.
        </p>

        {/* CTA Button with subtle animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl shadow-lg"
          onClick={() => navigate("/contact")}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Landing;
