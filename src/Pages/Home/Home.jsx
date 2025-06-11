import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

import CustomerFeedback from "./CustomerFeedback";
import StaffSchedulePanel from "./StaffSchedulepanel";
import TopPurchase from "./TopPurchase";
// import ThemeToggle from "../../Shared/ThemeToggle (1)";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      {/* <ThemeToggle></ThemeToggle> */}
      <Slider></Slider>
      <TopPurchase></TopPurchase>
      <CustomerFeedback></CustomerFeedback>
      <StaffSchedulePanel></StaffSchedulePanel>
    </div>
  );
};

export default Home;
