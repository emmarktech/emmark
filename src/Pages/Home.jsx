import React from "react";
// import Navbar from "../Components/Navbar";
// import Hero from "./Hero";
// import Services from "./Services";
// import Meet from "./Meet";
import People from "./People";
import Footer from "../Components/Footer";
import Products from "./Products";
import Landing from "./Landing";
// import AboutUs from "./AboutUs";
// import Patners from "./Patners";
import Service from "./service";
import Newsletter from "./Newsletter";
// import Technologies from "./Technologies";

const Home = () => {
  return (
    <div>
      <Landing />
      <Products />
      <Service />
      <People/>
      <Newsletter/>
      <Footer />
    </div>
  );
};
export default Home;
