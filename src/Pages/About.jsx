import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div>
      <div className="bg-white min-h-screen px-6 py-20 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-8"
          >
            About Emmark-Tech
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            Empowering businesses, educating minds — building the future of tech
            from Africa to the world.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="space-y-10 text-base sm:text-lg leading-8 text-gray-700"
          >
            <p>
              <strong className="text-blue-700">Emmark-Tech</strong> is a
              visionary technology company founded with one goal: to simplify
              tech for everyone. We serve as a dual-force engine — offering
              top-tier tech services to businesses while also training and
              transforming the next generation of tech professionals.
            </p>

            <p>
              For business owners, we build intelligent, scalable digital
              solutions — from sleek websites and custom software, to branding,
              strategy, automation and even cybersecurity. Whether you're a startup or an
              enterprise, we bring clarity, innovation, and functionality to
              your digital presence.
            </p>

            <p>
              For individuals, we provide hands-on tech education designed for
              the real world. Our structured training covers web development,
              product design, data analytics, graphics design, cybersecurity,  and more — combining theory with
              practical project-based learning. With Emmark-Tech, you don’t just
              learn, you grow.
            </p>

            <p>
              At our core lies a belief that technology is not just about code —
              it’s about connection, creativity, and opportunity. We are proudly
              African, globally minded, and endlessly driven by results.
            </p>

            <p>
              With a team of visionary founders, skilled professionals, and
              passionate mentors, we’re building a culture of excellence that
              reflects in every product we deliver and every student we train.
            </p>

            <p>
              <span className="text-blue-700 font-semibold">Join us</span> —
              whether you’re a business owner looking to scale or a dreamer
              ready to launch a tech career. At Emmark-Tech, your vision is our
              mission.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mt-16 text-center"
          >
           <Link to={'/contact'}> <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition duration-300">
              Let’s Build Something Great Together
            </button></Link>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
