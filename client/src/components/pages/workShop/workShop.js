import React from "react";
import WorkShopBanner from "../../features/workShopBanner/workShopBanner";
import AboutPassion from "../../features/aboutPassion/aboutPassion";

const WorkShop = () => {
  return (
    <section id="WorkShop" className="page">
     <WorkShopBanner/>
      <AboutPassion/>
    </section>
  );
};

export default WorkShop;
