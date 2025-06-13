import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { assets } from "../asset/assets";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Newsletter from "./Newsletter";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  const sectionStyle = {
    backgroundImage: `url(${assets.connect})`,
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
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "justify",
    maxWidth: "800px",
  };

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_zhd74ql",
        "template_v9ho1xn",
        form.current,
        "wmpd-3nZJ9YWBncxB"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setMessage("");
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
      <div className="bg-gray-100">
        {/* Hero Section */}
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <div
            className="relative flex items-center justify-center h-[90vh] bg-cover bg-center bg-no-repeat text-white px-4"
            style={{ backgroundImage: `url(${assets.connect})` }}
          >
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <motion.div
              className="relative z-10 max-w-3xl text-justify"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center gap-4 flex-wrap pt-5 text-white font-medium pb-20 ">
                <a
                  href="https://www.linkedin.com/company/emmarklabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border rounded-xl py-3 px-6 bg-white/10 backdrop-blur-md transition hover:scale-205 hover:border-blue-400 "
                >
                  <FaLinkedin size={20} /> LinkedIn
                </a>
                <a
                  href="https://github.com/emmarktech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border rounded-xl py-3 px-6 bg-white/10 backdrop-blur-md transition hover:scale-205 hover:border-blue-400 "
                >
                  <FaGithub size={20} /> GitHub
                </a>
                <a
                  href="https://twitter.com/emmarktech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border rounded-xl py-3 px-6 bg-white/10 backdrop-blur-md transition hover:scale-205 hover:border-blue-400 "
                >
                  <FaTwitter size={20} /> Twitter
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-10   py-20 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
          {/* Left Info */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="md:w-1/2 space-y-5"
          >
            <h2 className="text-3xl font-bold mb-2 text-black">
              Book Your Free Consultation Today!
            </h2>
            <p className="text-gray-700 font-bold">
              Schedule a 20-minute consultation session with our sales team and
              let’s get you started. We’re excited to hear about your business
              and the amazing things you do.
            </p>
            <p className="text-gray-700 font-bold">
              Discuss your project with us, explore our process, subscription
              plans, and see what makes us unique. Discover new possibilities
              for growth with Emmark Tech.
            </p>

            {/* Enhanced Contact Info with Framer Motion */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-base"
            >
              {[
                {
                  icon: <FaPhoneAlt className="text-green-400" />,
                  text: "+2348130169810",
                  link: null,
                },
                {
                  icon: <FaEnvelope className="text-yellow-300" />,
                  text: "helpdesk@emmark.tech",
                  link: "mailto:helpdesk@emmark.tech",
                },
                {
                  icon: <FaWhatsapp className="text-green-500" />,
                  text: "Chat on WhatsApp",
                  link: "https://wa.me/2348130169810",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3 border border-gray-300 bg-white/10 backdrop-blur-md text-black rounded-xl p-3 hover:scale-[1.02] hover:bg-white/20 transition duration-300"
                >
                  {item.icon}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="bg-white/10 backdrop-blur-md text-black rounded-xl shadow-lg p-8 md:w-1/2"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border bg-white/10 backdrop-blur-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Contact;
