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
    <div className="bg-white text-gray-800">
      {/* ======= Why Choose Emmark-Tech Section ======= */}
      <motion.section
        className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white"
        variants={container}
        {...fadeInProps}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-tight text-black"
          variants={item}
        >
          Why Choose Emmark-Tech?
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
            className="bg-white hover:bg-blue-100 p-12 rounded-xl  shadow-2xl transition-colors duration-300 hover:animate-shake"
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
            className="bg-white hover:bg-blue-100 p-12 rounded-xl shadow-2xl transition-colors duration-300 hover:animate-shake"
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
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 py-16 text-lg">
        <motion.section
          className="grid gap-12 md:grid-cols-2"
          variants={container}
          {...fadeInProps}
        >
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold mb-3 text-black">
              About Emmark Tech
            </h2>
            <div
              className="rounded-xl p-2"
              style={{ borderLeft: "3px solid black" }}
            >
              {/* <p className="mb-4">
                Welcome to Emmark Tech — your all-in-one hub for modern digital
                solutions, innovation, and technology training.
              </p> */}
              <p>
                We are a fast rising tech force in Africa with a global mindset,
                aiming to build digital products that matter and develop talents
                that shape the future. We are committed to bridging the global
                digital divide by providing scalable software, robust IT
                infrastructure, and hands-on tech training programs. Our mission
                is to empower individuals, startups, and enterprises through
                technology that transforms businesses and careers.
                <br />
                With a visionary team of professionals, we deliver end-to-end
                tech services including software development, cloud integration,
                IT consulting, product engineering, and full-stack training. Our
                approach is simple — deliver real results with innovation,
                integrity, and impact.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <img
              src={assets.About}
              alt="About Emmark Tech"
              className="w-full h-full max-h-[400px] object-cover rounded-2xl shadow-lg"
              loading="lazy"
              style={{ borderTop: "8px solid white" }}
            />
          </motion.div>
        </motion.section>

        <div className="grid gap-12 md:grid-cols-2 mt-5 max-w-7xl mx-auto text-justify">
          <div>
            <p>
              Our founding team brings a wealth of expertise across multiple
              disciplines including software engineering, cybersecurity, cloud
              computing, UI/UX design, business development, and more. We don't
              just build digital tools — we create experiences, streamline
              systems, and inspire innovation.
              <br />
              <br />
              Whether you’re an aspiring tech talent or a growing business,
              Emmark Tech provides the right tools, training, and solutions to
              help you thrive in today's fast-evolving tech world.
            </p>
          </div>

          <div className="flex-1 rounded-lg transition-all duration-300 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Gain hands-on, job-ready skills with real-world projects.</li>
              <li>
                Work with a forward-thinking team passionate about tech
                innovation.
              </li>
              <li>
                Access custom-built software solutions tailored to your business
                goals.
              </li>
              <li>Join a community of global learners and digital creators.</li>
              <li>
                Future-proof your skills and solutions in a tech-driven economy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
