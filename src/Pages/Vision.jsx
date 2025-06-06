import React, { useRef } from "react";
import { assets } from "../asset/assets";
import { motion, useInView } from "framer-motion";
import Footer from "../Components/Footer";
import Newsletter from "./Newsletter";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const visionPoints = [
  {
    title: "Empowering Innovation Globally",
    description:
      "Our vision is to drive innovation across industries by delivering cutting-edge technology solutions that reshape the way businesses operate, communicate, and grow around the world.",
  },
  {
    title: "Inspiring the Next Generation",
    description:
      "We envision a world where every aspiring tech mind—regardless of background—has access to mentorship, tools, and opportunities to transform their passion into global impact.",
  },
  {
    title: "Building Scalable Tech for Tomorrow",
    description:
      "Our solutions are not just built for today. We are laying down the foundation for future-ready, scalable, and sustainable technologies that evolve with global market demands.",
  },
  {
    title: "Redefining Excellence in Tech Consulting",
    description:
      "We aspire to be the gold standard in tech consulting by consistently delivering outstanding value, reliability, and innovation in every client interaction.",
  },
  {
    title: "Championing Integrity & Collaboration",
    description:
      "We foster a culture of trust, inclusivity, and collaboration — within our teams and with our partners — to drive ethical and effective digital transformation globally.",
  },
];

const Vision = () => {
  const sectionStyle = {
    backgroundImage: `url(${assets.About})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "0 1rem",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "800px",
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div>
      <div className="bg-gray-100 pb-20">
        <div style={sectionStyle}>
          <div style={overlayStyle}></div>
          <motion.div
            ref={ref}
            style={contentStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* <h1 className="text-4xl font-bold mb-4">Our Vision</h1> */}
            <p className="text-lg font-medium leading-relaxed pt-14">
              Enabling limitless innovation, empowering tech minds, and creating a sustainable digital future.
            </p>
          </motion.div>
        </div>

        {/* Vision Points */}
        <motion.div
          className="mt-20 px-4 sm:px-8 md:px-16 lg:px-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black text-center">
            What Drives <span className="text-blue-600">Our Vision</span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-transparent hover:border-blue-500"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition duration-300">
                  {point.title}
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Vision;
