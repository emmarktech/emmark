import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zhd74ql",       // your EmailJS service ID
        "template_v9ho1xn",      // your EmailJS template ID
        form.current,
        "wmpd-3nZJ9YWBncxB"      // your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setMessage(""); // clear only message field
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message: " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} />
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
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 disabled:opacity-50"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-16 text-center text-gray-600"
        >
          <p>📞 Phone: +2348130169810</p>
          <p>📧 Email: <a href="mailto:helpdesk@emmark.tech">helpdesk@emmark.tech</a></p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
