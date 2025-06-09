import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

import CustomerFeedback from "./CustomerFeedback";
import StaffSchedulePanel from "./StaffSchedulepanel";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Slider></Slider>
      <CustomerFeedback></CustomerFeedback>
      <StaffSchedulePanel></StaffSchedulePanel>
    </div>
  );
};

export default Home;
