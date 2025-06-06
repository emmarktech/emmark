import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { assets } from '../asset/assets';
import {
  FaHospitalAlt, FaUniversity, FaMoneyCheckAlt, FaBriefcase, FaCamera,
  FaHeadphones, FaTruck, FaGavel, FaLaptopCode, FaUsers
} from 'react-icons/fa';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Clients = () => {
  const sectionStyle = {
    backgroundImage: `url(${assets.clients})`,
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

  const sectors = [
    {
      title: 'Healthcare',
      icon: <FaHospitalAlt className="text-3xl text-blue-700" />,
      clients: ['Hospitals', 'Clinics', 'Pharmacies', 'Health Tech Startups']
    },
    {
      title: 'Education',
      icon: <FaUniversity className="text-3xl text-green-700" />,
      clients: ['Schools', 'Colleges', 'EdTech Companies', 'Tutors']
    },
    {
      title: 'Finance',
      icon: <FaMoneyCheckAlt className="text-3xl text-yellow-500" />,
      clients: ['Banks', 'FinTech Companies', 'Auditors', 'Accounting Firms']
    },
    {
      title: 'Media & Journalism',
      icon: <FaCamera className="text-3xl text-red-500" />,
      clients: ['News Agencies', 'Bloggers', 'Online Magazines', 'Reporters']
    },
    {
      title: 'Entertainment',
      icon: <FaHeadphones className="text-3xl text-purple-600" />,
      clients: ['Music Studios', 'Streaming Platforms', 'Actors', 'Event Planners']
    },
    {
      title: 'Business & Commerce',
      icon: <FaBriefcase className="text-3xl text-orange-600" />,
      clients: ['Startups', 'Retail Stores', 'Wholesalers', 'Online Sellers']
    },
    {
      title: 'Legal & Governance',
      icon: <FaGavel className="text-3xl text-gray-700" />,
      clients: ['Law Firms', 'Public Sector', 'NGOs', 'Judicial Systems']
    },
    {
      title: 'Technology & Development',
      icon: <FaLaptopCode className="text-3xl text-pink-600" />,
      clients: ['Software Companies', 'Developers', 'Tech Startups', 'Agencies']
    },
    {
      title: 'Logistics & Transportation',
      icon: <FaTruck className="text-3xl text-teal-600" />,
      clients: ['Logistics Firms', 'E-commerce Deliveries', 'Fleet Managers']
    },
    {
      title: 'Social & Community',
      icon: <FaUsers className="text-3xl text-indigo-500" />,
      clients: ['Religious Groups', 'Community Leaders', 'Clubs', 'Social Influencers']
    },
  ];

  return (
    <div>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div style={sectionStyle}>
          <div style={overlayStyle}></div>
          <motion.div
           ref={ref}
           style={contentStyle}
           initial={{ opacity: 0, y: 50 }}
           animate={ { opacity: 1, y: 0 } }
           transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Our Clients
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              At Emmark-tech, we value our customers hence the need to
              use the right technology for the right problem is our mantra. We
              are agile about learning new processes and tools to save time and
              reduce complexity for our clients.
            </p>
          </motion.div>
        </div>

        {/* Animated Sector Cards */}
        <div className="pt-20 pb-10 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {sector.icon}
                  <h3 className="text-xl font-bold text-blue-700">{sector.title}</h3>
                </div>
                <ul className="list-disc list-inside text-black font-semibold">
                  {sector.clients.map((client, idx) => (
                    <li key={idx}>{client}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ----descript---------------------------- */}
        <div>
        <motion.div
            ref={ref}
            style={contentStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Our Clients
            </h1> */}
            <p className='py-10 text-gray-800 text-md font-semibold  px-4 sm:px-8 md:px-16 lg:px-24' style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              For every of the mentioned industry sectors, we provide suiting tech solutions that make global impact through professional and proper implementation of skills.

             <p className='pt-10'> <Link to='/contact' className='font-bold text-xl text-blue-600 border rounded-xl p-2' style={{border:'1px solid '}}>Contact Us</Link>  today for a tech experience that lasts !</p>
            </p>
          </motion.div>
        </div>
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Clients;
