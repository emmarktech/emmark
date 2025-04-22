import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen py-20 px-6 md:px-20 bg-gray-50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-10">
            We'd love to hear from you! Whether you're a business owner in need
            of digital transformation or someone passionate about
            tech—Emmark-Tech is here to connect.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-16 text-center text-gray-600"
        >
          {/* <p>📍 Our Offices: Owerri & Asaba, Nigeria</p> */}
          <p>📞 Phone: +2348130169810</p>
          <p>📧 Email: support@emmarktech.com</p>

          
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
