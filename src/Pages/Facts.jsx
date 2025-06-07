import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const facts = [
  "Did you know? 90% of the world’s data was created in just the last 2 years.",
  "Did you know? The first computer virus was created in 1986 and was called 'Brain'.",
  "Did you know? Learning a tech skill today can triple your chances of landing a remote job.",
  "Did you know? Cybersecurity jobs have zero unemployment rate.",
  "Did you know? The demand for software developers is expected to grow 22% by 2030.",
  "Did you know? Every second, 127 new devices connect to the internet.",
  "Did you know? Over 80% of companies are actively transforming digitally.",
  "Did you know? There are over 700 programming languages in the world.",
  "Did you know? AI can now write code, create art, and even develop websites.",
  "Did you know? A tech portfolio is more valuable than a CV in today’s digital hiring world.",
  "Did you know? Cloud computing powers services like Netflix, Spotify, and even your Gmail.",
  "Did you know? UI/UX designers shape how people experience apps and websites.",
  "Did you know? Emmark-Tech can build you a secure and scalable web platform in days.",
  "Did you know? Freelancing tech jobs can help you earn in dollars while living locally.",
  "Did you know? A simple website redesign can increase conversion by over 200%.",
  "Did you know? Blockchain isn't just for crypto — it's revolutionizing data security.",
  "Did you know? The world will need over 3.5 million cybersecurity professionals by 2025.",
  "Did you know? Data science helps companies predict customer behavior with accuracy.",
  "Did you know? Emmark-Tech trains you with real-world tools and hands-on projects.",
  "Did you know? Tech skills are now essential for over 60% of all modern careers.",
  "Did you know? JavaScript is used on 97% of websites worldwide.",
  "Did you know? Tech jobs are among the highest-paying careers globally.",
  "Did you know? Digital marketing now relies heavily on automation and data analysis.",
  "Did you know? The average person spends over 6 hours online daily.",
  "Did you know? A great online presence can turn a small business into a global brand.",
  "Did you know? At Emmark-Tech, you can get an amazing oppurtunity to either build your business or push your career."
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const DidYouKnow = () => {
  return (
    <div>
    <div className="min-h-screen px-6 py-16 bg-gray-100 text-black">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-black"
          variants={item}
        >
          Did You Know? 🤔💡
        </motion.h1>

        <motion.p
          className="text-center text-lg font-bold text-gray-700 mb-12 max-w-3xl mx-auto"
          variants={item}
        >
          Here are some powerful tech facts to inspire your journey — whether you're growing a business or starting your tech career.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-2xl p-12 hover:animate-shake border-l-4 border-blue-600"
            >
              <p className="text-md font-semibold text-black">{fact}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    <Footer/>
    </div>
  );
};

export default DidYouKnow;
