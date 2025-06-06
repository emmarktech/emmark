import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Submission logic here
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center py-20 px-4"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-3xl font-bold text-black"
      >
        Stay Ahead in Tech
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 mt-2"
      >
        Subscribe to our newsletter for expert tips, industry trends, and exclusive offers—right in your inbox.
      </motion.p>

      <motion.form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-[500px] mx-auto mt-6 flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <input
          className="flex-1 px-5 py-3 text-sm outline-none text-white bg-white/10 backdrop-blur-md"
          type="email"
          placeholder="Enter your email"
          aria-label="Email Address"
          required
        />
        <motion.button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.form>
    </motion.div>
  );
};
export default Newsletter;
