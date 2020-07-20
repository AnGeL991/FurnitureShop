import React from "react";
import styles from "./workShop.module.scss";
import WorkShopBanner from "../../features/workShopBanner/workShopBanner";
import AboutPassion from "../../features/aboutPassion/aboutPassion";

const WorkShop = () => {
  return (
    <section id="WorkShop" className={styles.page}>
     <WorkShopBanner/>
      <AboutPassion/>
    </section>
  );
};

export default WorkShop;
