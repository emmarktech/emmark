import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  const clientServices = [
    {
      title: 'Web & App Development',
      desc: 'We build responsive websites and powerful mobile apps tailored to your business goals.',
    },
    {
      title: 'UI/UX Design',
      desc: 'We create intuitive and engaging interfaces that elevate user experience.',
    },
    {
      title: 'Graphics Design',
      desc: 'We create and design world-class graphics ranging from flyers to business logos and many more',
    },
    {
      title: 'Web-3',
      desc: 'Includes Blockchain technology, solidity, smart contracts and so on...',
    },
    {
      title: 'D-apps and NFT',
      desc: 'Looking forwrd to launching your next: Memecoin, NFT project, or D-app, WE ARE HERE FOR YOU!!!',
    },

    {
      title: 'Cyber Security',
      desc: 'We help you protect your business from hackers and cyber criminals.',
    },
    {
      title: 'Digital Transformation',
      desc: 'We help businesses become modernized and stay competitive through smart tech upgrades.',
    },
  ];

  const trainingServices = [
    {
      title: 'Frontend Development Bootcamp',
      desc: 'Master HTML, CSS, JavaScript, and React framework to build modern user interfaces.',
    },
    {
      title: 'Backend Engineering Program',
      desc: 'Learn Node.js, Express, and databases to build scalable server-side applications.',
    },
    {
      title: 'Cyber Security',
      // desc: 'Learn Node.js, Express, and databases to build scalable server-side applications.',
    },
    {
      title: 'Graphics Design',
      desc: 'The aim is to help you grow into a pro in graphics designing through stron coaching.',
    },
    {
      title: 'UI/UX Design Crash Course',
      desc: 'Get hands-on with Figma, design thinking, and user research to craft stunning interfaces.',
    },
    {
      title: 'One-on-One Mentorship',
      desc: 'We offer personalized learning and project-based coaching tailored to your career goals.',
    },
  ];

  return (
    <div>
    <motion.div
      className="px-6 sm:px-20 py-14 text-gray-800"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" variants={item}>
        What We Offer
      </motion.h2>

      {/* Client Services */}
      <div className="mb-16">
        <motion.h3 className="text-2xl font-semibold mb-6" variants={item}>
          For Businesses
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              variants={item}
            >
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Training Services */}
      <div>
        <motion.h3 className="text-2xl font-semibold mb-6" variants={item}>
          Learn With Us
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              variants={item}
            >
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
      <Footer/>
    </div>
  );
};

export default Services;
