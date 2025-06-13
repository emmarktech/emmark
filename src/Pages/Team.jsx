import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { assets } from "../asset/assets";
import Footer from "../Components/Footer";

const teamMembers = [
  {
    name: "Mark Onwa",
    role: "CEO, DevOps Engineer",
    image: assets.mark,
    linkedin: "#",
    twitter: "#",
    github: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae illum quibusdam, at harum quod? Sapiente laborum maxime temporibus hic, unde quia consequuntur,",
  },
  {
    name: "Harrison Majesty",
    role: "Cyber security Expert",
    image: assets.majesty,
    linkedin: "#",
    twitter: "#",
    github: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae illum quibusdam, at harum quod? Sapiente laborum maxime temporibus hic, unde quia consequuntur",
  },
  {
    name: "Nwaneri DC",
    role: "Fullstack Developer",
    image: assets.david,
    linkedin: "https://linkedin.com/in/david-osuji",
    twitter: "https://twitter.com/emmark_tech",
    github: "https://github.com/emmark-tech",
    bio: "A passionate builder and visionary, David leads our tech architecture with a bold and innovative approach to problem-solving.",
  },
  
  {
    name: "Joshua Nzute",
    role: "Graphics Designer",
    image: assets.joshua,
    linkedin: "#",
    twitter: "#",
    github: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae illum quibusdam, at harum quod? Sapiente laborum maxime temporibus hic, unde quia consequuntur,",
  },
  {
    name: "Victor",
    role: "Marketing Strategist",
    image: assets.victor,
    linkedin: "#",
    twitter: "#",
    github: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae illum quibusdam, at harum quod? Sapiente laborum maxime temporibus hic, unde quia consequuntur",
  },
  {
    name: "Daniel",
    role: "Social Media Strategist",
    image: assets.daniel,
    linkedin: "#",
    twitter: "#",
    github: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae illum quibusdam, at harum quod? Sapiente laborum maxime temporibus hic, unde quia consequuntur,",
  },
];

const Team = () => {
  const sectionStyle = {
    backgroundImage: `url(${assets.team})`,
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
    textAlign: "center",
    maxWidth: "800px",
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div style={sectionStyle}>
        <div style={overlayStyle}></div>
        <motion.div
          ref={ref}
          style={contentStyle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg">
            Behind every line of code and design at Emmark-Tech is a group of driven minds committed to innovation, excellence, and growth.
          </p>
        </motion.div>
      </div>

      <div className="flex items-center justify-center h-40  bg-gray-100 p-20">
  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>


      {/* Team Grid */}
      {/* <div className="py-20 px-4 md:px-16 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/1 backdrop-blur border border-white/10 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600"
              />
              <h2 className="text-xl text-black font-bold mb-1">{member.name}</h2>
              <p className="text-black font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4 text-blue-700">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Team;
