import React from "react";
import Carousel from "../../components/Caraousel/Caraousel";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Cards></Cards>
      <Banner
        image={banner1}
        title="AirSim Postpaid starting at Rs.499"
        subtitle="Unlimited Calling ,75GB Data , AirStream and many more"
        btnText="View Plans"
        url=""
        textAlign="left"
      ></Banner>
      <Banner
        image={banner2}
        title="AirSim Unmilited Prepaid"
        subtitle="Our best plan , our best prices , on best network"
        btnText="View Plans"
        url=""
        textAlign="right"
      ></Banner>
    </div>
  );
};

export default Home;
