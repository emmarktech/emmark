import React, { useRef } from "react";
import { assets } from "../asset/assets";
import { motion, useInView } from "framer-motion";
import Footer from "../Components/Footer";
import Newsletter from "./Newsletter";

const Partners = () => {
  const sectionStyle = {
    backgroundImage: `url(${assets.partners})`,
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

  const companies = [
    "google.com",
    "microsoft.com",
    "apple.com",
    "amazon.com",
    "facebook.com",
    "intel.com",
    "ibm.com",
    "netflix.com",
    "tesla.com",
    "samsung.com",
    "nvidia.com",
    "adobe.com",
    "oracle.com",
    "cisco.com",
    "salesforce.com",
    "spotify.com",
    "snapchat.com",
    "alibaba.com",
    "xiaomi.com",
    "zoom.us",
    "twitter.com",
    "paypal.com",
    "github.com",
    "bitbucket.org",
    "dropbox.com",
    "atlassian.com",
    "asana.com",
    "slack.com",
    "linkedin.com",
    "shopify.com",
    "uber.com",
    "airbnb.com",
    "stripe.com",
    "cloudflare.com",
    "notion.so",
    "figma.com",
    "digitalocean.com",
    "twilio.com",
    "heroku.com",
    "tiktok.com",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Our Partners
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              Using the right technology for the right problem is our mantra. We
              are agile about learning new processes and tools to save time and
              reduce complexity for our clients.
            </p>
          </motion.div>
        </div>

        {/* Company Logos */}
        <div className="pt-20 pb-20 mb-10 px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className="text-gray-700 text-2xl font-bold mb-12 text-center">
            We proudly partner with:
          </h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {companies.map((domain, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 mb-5 flex items-center justify-center h-24 border border-transparent hover:border-blue-500"
                title={domain.split(".")[0].toUpperCase()}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`https://logo.clearbit.com/${domain}`}
                  alt={domain}
                  className="h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Partners;
