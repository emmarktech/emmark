import React from "react";
import { motion } from "framer-motion";
import { assets } from "../asset/assets";

// Animation Variants
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const Products = () => {
  return (
    <div className="bg- text-gray-800">
      {/* ======= Why Choose Emmark-Tech Section ======= */}
      <motion.section
        className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 "
        variants={container}
        {...fadeInProps}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-tight text-black"
          variants={item}
        >
          Why Choose Emmark-<span className="text-blue-600">Tech</span> ?
        </motion.h2>

        <motion.p
          className=" text-center mb-5 text-black font-semibold text-lg leading-relaxed max-w-xl mx-auto"
          variants={item}
        >
          <span className="text-blue-600">Emmark-Tech</span> is a leading
          technology consulting firm in Africa. We provide cutting-edge
          solutions for your business and perfect training opportunities for
          tech enthusiasts.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2 pt-14">
          <motion.article
            className="bg-white p-5 md:p-12 lg:p-12 rounded-xl  shadow-2xl transition-colors duration-300 hover:animate-shake hover:shadow-[0_2px_35px_blue] hover:scale-205 hover:border-blue-400 border border-transparent"
            variants={item}
            // style={{ borderTop: "3px solid blue", borderLeft: "3px solid blue" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              For Business Owners
            </h3>
            <div className="text-base leading-relaxed text-black hover:text-black transition-colors duration-300">
              <strong>Did you know?</strong>
              <br />
              93% of online experiences start with a search engine, and 75% of
              users never scroll past the first page. Yet, many businesses still
              rely on outdated strategies. At Emmark-Tech, we help you build
              modern, scalable, and optimized web platforms that don’t just
              exist — they perform.
              <div className="mt-4 font-bold">We offer:</div>
              <ul className="list-disc list-inside mt-2">
                <li>Custom website & app development</li>
                <li>SEO & online visibility optimization</li>
                <li>Tech consultations that fuel growth</li>
              </ul>
            </div>
          </motion.article>

          <motion.article
            className="bg-white p-5 md:p-12 lg:p-12 rounded-xl shadow-2xl transition-colors duration-300 hover:animate-shake hover:shadow-[0_2px_35px_blue] hover:scale-205 hover:border-blue-400 border border-transparent"
            variants={item}
            // style={{ borderBottom: "3px solid blue", borderRight: "3px solid blue" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              For Intending Learners
            </h3>
            <div className="text-base leading-relaxed text-black hover:text-black transition-colors duration-300">
              <strong>Did you know?</strong>
              <br />
              The global tech talent shortage is projected to reach over 85
              million unfilled jobs by 2030. Tech isn’t just the future — it’s
              the now. Whether you're just starting or switching careers,
              learning to code or design could be the most profitable decision
              you’ll make.
              <div className="mt-4 font-bold">At Emmark-Tech, you’ll:</div>
              <ul className="list-disc list-inside mt-2">
                <li>Learn practical tech skills — not theory</li>
                <li>Get mentored by industry professionals</li>
                <li>Build real-world projects and portfolios</li>
              </ul>
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* ======= About Section ======= */}
     <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 text-gray-800">
  <div className="grid gap-12 md:grid-cols-2 items-center">
    <img
      src={assets.About} // Replace with a more professional image suggestion below
      alt="Team working on tech"
      className="w-full h-full max-h-[400px] object-cover rounded-2xl shadow-md"
    />

    <div>
      <h2 className="text-3xl font-bold mb-4 text-black">About Emmark-<span className="text-blue-600">Tech</span></h2>
      <p className="mb-4 leading-relaxed">
        Emmark Tech is an African-rooted, globally focused technology company
        committed to building digital solutions and training future tech leaders.
        We develop scalable software, provide enterprise IT services, and deliver
        hands-on tech education that transforms lives and businesses.
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
        <li>Custom software for startups and enterprises</li>
        <li>Cloud & IT infrastructure solutions</li>
        <li>Web and mobile development</li>
        <li>Tech training & mentorship programs</li>
        <li>Creative design and branding services</li>
      </ul>
    </div>
  </div>

  <div className="mt-12 max-w-3xl mx-auto text-center">
    <p className="text-lg font-medium">
      At Emmark Tech, we don’t just build tools — we shape careers, grow businesses,
      and connect people through meaningful technology.
    </p>
  </div>
</div>

    </div>
  );
};

export default Products;
