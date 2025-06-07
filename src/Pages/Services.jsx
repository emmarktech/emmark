import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaShieldAlt,
  FaCubes,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaCloud,
  FaCodeBranch,
  FaRobot,
  FaCoins,
  FaPeopleArrows,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import { useRef } from "react";
import { assets } from "../asset/assets";
import Newsletter from "./Newsletter";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const clientServices = [
    {
      icon: <FaLaptopCode />,
      title: "Web & App Development",
      desc: "We build high-performance websites and mobile applications tailored for today’s digital-first world. From eCommerce platforms and booking systems to fully custom solutions, we combine creativity with cutting-edge technology to enhance your brand’s presence, engagement, and functionality across all devices.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "User experience is at the heart of everything we create. Our expert UI/UX designers craft user journeys that are visually appealing, intuitive, and aligned with user behavior—ensuring smooth interactions, higher conversions, and meaningful engagement at every touchpoint.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Graphics Design",
      desc: "From brand identities to impactful marketing materials, our graphic designers deliver powerful visuals that tell your story. Whether you need stunning logos, professional brochures, or scroll-stopping social media designs, we bring your vision to life through creative excellence.",
    },
    {
      icon: <FaCubes />,
      title: "Web3 Solutions",
      desc: "Step into the future with our Web3 development services. We build secure and scalable decentralized applications (DApps), smart contracts, and tokenized platforms—leveraging blockchain to deliver transparency, trust, and innovation in your digital ecosystem.",
    },
    {
      icon: <FaCoins />,
      title: "DApps & NFT Projects",
      desc: "Launching a crypto project? We offer end-to-end support for meme coins, NFT collections, marketplaces, and token utilities. From ideation to smart contract deployment and minting functionality, we transform your blockchain idea into a live, user-ready product.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Your digital assets deserve military-grade protection. Our cyber security services include vulnerability assessments, ethical hacking, firewalls, and 24/7 monitoring to safeguard your infrastructure from evolving threats—ensuring compliance, integrity, and peace of mind.",
    },
    {
      icon: <FaRocket />,
      title: "Digital Transformation",
      desc: "Empower your business with the tools of tomorrow. Our digital transformation services are designed to streamline operations, modernize legacy systems, and implement smart technologies that drive growth, reduce costs, and position your brand at the forefront of your industry.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "We help you migrate, deploy, and optimize solutions on top-tier cloud platforms like AWS, Azure, and Google Cloud. Our cloud integration ensures seamless scalability, improved uptime, and reduced operational overhead—so you can focus on innovation, not infrastructure.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      desc: "Harness the power of artificial intelligence to automate repetitive tasks, enhance customer service, and make smarter decisions. From AI-powered chatbots to machine learning tools, we build automation solutions that drive efficiency and unlock new business potential.",
    },
  ];

  const trainingServices = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development Bootcamp",
      desc: "Master the art of building modern web interfaces with our intensive bootcamp. Learn HTML, CSS, JavaScript, and frameworks like React to create responsive, interactive, and production-ready websites that look great on all devices.",
    },
    {
      icon: <FaCodeBranch />,
      title: "Backend Engineering Program",
      desc: "Understand the inner workings of the internet by diving into backend development. This program covers Node.js, Express, databases like MongoDB, and API security—equipping you to build scalable and secure server-side applications.",
    },
    {
      icon: <FaLock />,
      title: "Cyber Security Training",
      desc: "Get hands-on knowledge in protecting digital systems. Learn ethical hacking, network defense, encryption protocols, and how to identify, prevent, and respond to cyber threats with real-world tools and techniques.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphics Design Course",
      desc: "Unleash your creativity with our comprehensive graphic design training. Learn to use professional tools like Adobe Photoshop and Illustrator to design impactful logos, promotional content, and brand visuals that stand out in today’s visual-first digital space.",
    },
    {
      icon: <FaMobileAlt />,
      title: "UI/UX Design Crash Course",
      desc: "Fast-track your design career with an immersive crash course on interface and experience design. Using Figma and industry workflows, you’ll learn to create modern, user-friendly designs that blend beauty with usability.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "One-on-One Mentorship",
      desc: "Accelerate your learning with personalized guidance from expert mentors. Get real-time feedback on projects, clarify tough concepts, and receive professional coaching to help you transition into the tech industry confidently.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Tech for Beginners",
      desc: "Start your tech journey with confidence. This beginner-friendly program introduces computer basics, internet navigation, and tech fundamentals—helping you discover your interest area and build a strong foundation for future learning.",
    },
    {
      icon: <FaPeopleArrows />,
      title: "Career Support & Internship Placement",
      desc: "We go beyond training—our career support services help you prepare for the job market. From resume polishing and portfolio reviews to interview coaching and internship placement, we ensure you’re ready to land your first tech role.",
    },
  ];

  const sectionStyle = {
    backgroundImage: `url(${assets.ourProduct})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80vh",
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div>
      <div className="bg-gray-100">
        {/* ------------------------------- hero -------------------------------- */}
        <div style={sectionStyle}>
          <div style={overlayStyle}></div>
          <motion.div
            ref={ref}
            style={contentStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Our Products
            </h1>
            <h2
              className="font-bold text-white leading-relaxed"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              At <span className="text-blue-400">Emmark-Tech</span>, we
              prioritize our customers' needs
              <br />
              and are committed to delivering exceptional services tailored to
              their goals.
            </h2>
            <p
              className="font-medium text-white leading-relaxed pt-3"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              We offer comprehensive tech solutions and services for Businesses,
              <br />
              Firms, and Organizations across various industries.
            </p>
            <p className="text-md font-medium leading-relaxed pt-10">
              We build global solutions, empower tech minds, and transform
              enterprises with great innovations.
            </p>
          </motion.div>
        </div>
        {/* ---------------------------- hero ends here ---------------------------- */}

        <motion.div
          className="px-6 sm:px-20 py-14 text-gray-800"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Client Services */}
          <div className="mb-16 pt-10">
            <motion.h3
              className="text-2xl font-bold mb-6 text-black   border rounded-xl p-3 w-[35vh]" style={{borderTop:'3px solid blue', borderLeft:'3px solid blue'}}
              variants={item}
            >
              For Businesses :
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="p-5 md:p-12 lg:p-12 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                  variants={item}
                >
                  <div className="flex items-center gap-3 mb-5 text-blue-600 text-4xl">
                    {service.icon}
                    <h4 className="text-lg md:text-2xl font-bold">{service.title}</h4>
                  </div>
                  <p className="text-md md:text-lg font-semibold text-black">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training Services */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-black  border rounded-xl p-3 w-[35vh]" style={{borderBottom:'3px solid blue', borderRight:'3px solid blue'}}
              variants={item}
            >
              Learn With Us :
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="p-5 md:p-12 lg:p-12 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                  variants={item}
                >
                  <div className="flex items-center gap-3 mb-5 text-blue-600 text-4xl">
                    {service.icon}
                    <h4 className="text-lg md:text-2xl font-bold">{service.title}</h4>
                  </div>
                  <p className="text-md md:text-lg font-semibold text-black">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Services;
