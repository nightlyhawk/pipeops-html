import React from "react";
import NavBar from "../../_components/navbar/NavBar";
import Banner from "./components/Banner";
import Content from "./components/Content";
function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Content></Content>
    </div>
  );
}

export default Home;
