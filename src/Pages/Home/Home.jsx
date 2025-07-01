import React, { useEffect } from "react";
import Banner from "./Banner";
import Slider from "./Slider";

import CustomerFeedback from "./CustomerFeedback";
import StaffSchedulePanel from "./StaffSchedulepanel";
import TopPurchase from "./TopPurchase";
import PromotionsOffers from "./PromotionsOffers";
import OperationalBestPractices from "./OperationalBestPractices ";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="">
      <Banner></Banner>

      <Slider></Slider>
      <TopPurchase></TopPurchase>
      <CustomerFeedback></CustomerFeedback>
      <StaffSchedulePanel></StaffSchedulePanel>
      <PromotionsOffers></PromotionsOffers>
      <OperationalBestPractices></OperationalBestPractices>
    </div>
  );
};

export default Home;
