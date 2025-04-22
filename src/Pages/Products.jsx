import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Products = () => {
  return (
    <motion.div 
      className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight" variants={item}>
        Why Emmark-Tech?
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Business Owners Section */}
        <motion.div className="bg-white p-6 rounded-2xl shadow-md" variants={item}>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">For Business Owners</h3>
          <p className="text-base leading-relaxed">
            <strong>Did you know?</strong> 
            <br />
            93% of online experiences start with a search engine, and 75% of users never scroll past the first page. 
            Yet, many businesses still rely on outdated strategies. At Emmark-Tech, we help you build modern, scalable, and optimized web platforms that don’t just exist — they perform.
            <br /><br />
            <p className='font-bold text-gray-700'>We offer:</p>
            <ul className="list-disc list-inside mt-3 text-x text-gray-700">
              <li>Custom website & app development</li>
              <li>SEO & online visibility optimization</li>
              <li>Tech consultations that fuel growth</li>
            </ul>
          </p>
        </motion.div>

        {/* Learners Section */}
        <motion.div className="bg-white p-6 rounded-2xl shadow-md" variants={item}>
          <h3 className="text-xl font-semibold mb-4 text-green-600">For Intending Learners</h3>
          <p className="text-base leading-relaxed">
            <strong>Did you know?</strong> 
            <br />
            The global tech talent shortage is projected to reach over 85 million unfilled jobs by 2030. Tech isn’t just the future — it’s the now. Whether you're just starting or switching careers, learning to code or design could be the most profitable decision you’ll make.
            <br /><br />
            <p  className='font-bold text-gray-700'>At Emmark-Tech, you’ll:</p>
            <ul className="list-disc list-inside mt-3 text-x text-gray-700">
              <li>Learn practical tech skills — not theory</li>
              <li>Get mentored by industry professionals</li>
              <li>Build real-world projects and portfolios</li>
            </ul>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Products;
