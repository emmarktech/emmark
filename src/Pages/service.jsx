import React from 'react';
import { motion } from 'framer-motion';
// import { techLogos } from '../asset/assets';
// import PartnersSlider from './Patners';

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const services = [
    {
        title: 'Custom Software Development',
        description: 'We design and develop powerful, scalable software solutions tailored to solve real-world challenges across industries. With a global-first approach and cutting-edge technologies, our solutions drive innovation, streamline operations, and accelerate business growth on an international scale.'
      },
      {
        title: 'Tech Training & Mentorship',
        description: 'We’re shaping the next generation of global tech leaders through hands-on training and expert mentorship. From web and mobile development to DevOps and cloud engineering, our programs equip learners with practical skills, industry insights, and the mindset to compete and lead in the global tech space.'
      },
      {
        title: 'Enterprise IT Solutions',
        description: 'We empower enterprises and startups worldwide with intelligent IT infrastructure, secure cloud integration, and transformative digital strategies. Our future-focused solutions are engineered to scale, adapt, and deliver exceptional value in today’s dynamic global marketplace.'
      }
      
];

const Service = () => {
  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-24  text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
          Our Core <span className="text-blue-600">Tech Services</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white text-gray-800 p-5 md:p-12 lg:p-12 rounded-xl shadow-2xl transition-all duration-200 hover:shadow-4xl hover:scale-205 hover:border-blue-400 border border-transparent"
            >
              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-blue-600 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 font-semibold group-hover:text-gray-700 transition duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 px-4 sm:px-8">
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group p-5 md:p-12 lg:p-12 bg-white   text-center shadow-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-500 border border-transparent"
  >
    <h2 className="text-justify text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-blue-700">
      Have an IT Solution Need? <br className="hidden sm:block" /> Look No Further — Emmark Tech Has You Covered.
    </h2>
    <p className=" text-justify mt-4 text-sm sm:text-base font-semibold text-gray-600 max-w-2xl mx-auto">
      Whether you're a startup or an enterprise, we deliver scalable, world-class tech solutions to power your success across the globe.
    </p>
    <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl shadow-lg"
            >
             Let's Get Started
            </motion.button>
  </motion.div>
</div>

      </motion.div>
    </div>
  );
};

export default Service;
