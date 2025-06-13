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

const services = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop powerful, scalable software solutions tailored to solve real-world challenges across industries. With a global-first approach and cutting-edge technologies, our solutions drive innovation, streamline operations, and accelerate business growth on an international scale.",
  },
  {
    title: "Tech Training & Mentorship",
    description:
      "We’re shaping the next generation of global tech leaders through hands-on training and expert mentorship. From web and mobile development to DevOps and cloud engineering, our programs equip learners with practical skills, industry insights, and the mindset to compete and lead in the global tech space.",
  },
  {
    title: "Enterprise IT Solutions",
    description:
      "We empower enterprises and startups worldwide with intelligent IT infrastructure, secure cloud integration, and transformative digital strategies. Our future-focused solutions are engineered to scale, adapt, and deliver exceptional value in today’s dynamic global marketplace.",
  },
];

const coreValues = [
  {
    title: "Innovation-Driven",
    description:
      "We challenge the status quo with bold ideas and future-ready technologies that create lasting impact.",
  },
  {
    title: "Global Excellence",
    description:
      "We hold ourselves to international standards, delivering top-tier solutions that compete globally.",
  },
  {
    title: "Integrity & Transparency",
    description:
      "We build trust through honesty, clear communication, and accountability in everything we do.",
  },
  {
    title: "People-Centric Growth",
    description:
      "We empower individuals—clients, learners, and teams—to grow, lead, and succeed in the digital age.",
  },
  {
    title: "Lifelong Learning",
    description:
      "We embrace continuous improvement and stay ahead by learning, unlearning, and relearning.",
  },
  {
    title: "Scalability & Sustainability",
    description:
      "We create solutions built to grow with your business and adapt to a rapidly evolving tech landscape.",
  },
];

const About = () => {
  const sectionStyle = {
    backgroundImage: `url(${assets.About})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "90vh",
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
      <div className="bg-white pb-10 text-gray-900">
        {/* Hero Section */}
        <div style={sectionStyle}>
          <div style={overlayStyle}></div>
          <motion.div
            ref={ref}
            style={contentStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className="text-lg font-medium leading-relaxed pt-14">
              Building global solutions, empowering tech minds, and transforming
              enterprises with innovation.
            </p>
          </motion.div>
        </div>

        {/* About Text */}
        <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Who We Are</h2>
          <p className="mt-5 text-md font-medium text-gray-800 text-justify">
            We are a Multi-Competency, Enterprise Transformation & Technology
            Consulting Firm. We combine expertise and capabilities across many
            industries and business functions to deliver superior value to our
            clients.
          </p>
          <p className="mt-5 text-md font-medium text-gray-800 text-justify">
            With a deep understanding of the industries we work in, strong
            technical competencies and a flexible organization, we go the extra
            mile to deliver quality, scalable, and business-aligned solutions
            across the globe.
          </p>
        </div>

        {/* Core Services */}
        <motion.div
          className="mt-5 px-4 sm:px-8 md:px-16 lg:px-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
            Our Core <span className="text-blue-600">Tech Services</span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all border border-gray-100 hover:border-blue-400"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mt-20 px-4 sm:px-8 md:px-16 lg:px-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
            Our Core <span className="text-blue-600">Values</span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all border border-gray-100 hover:border-blue-400"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {value.description}
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

export default About;
