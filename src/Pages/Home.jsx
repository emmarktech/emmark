import React from "react";
import People from "./People";
import Footer from "../Components/Footer";
import Products from "./Products";
import Landing from "./Landing";
import Service from "./service";
import Newsletter from "./Newsletter";
import Portfolio from "./portfolio";

const Home = () => {
  return (
    <div>
      <Landing />
      <Products />
      <Service />
      <Portfolio/>
      <People/>
      <Newsletter/>
      <Footer />
      
    </div>
  );
};
export default Home;
