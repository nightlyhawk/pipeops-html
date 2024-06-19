import React from "react";
import NavBar from "../../_components/navbar/NavBar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "../../_components/footer/Footer";
function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Content></Content>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default Home;
