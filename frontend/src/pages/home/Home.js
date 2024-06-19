import React from "react";
import NavBar from "../../_components/navbar/NavBar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Content></Content>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
