import React from "react";
import styles from "./publicitySlider.module.scss";
import EachPublicity from "../../common/eachPublicity/eachPublicity";




const PublicitySlider = () => {
  return (
    <section id="publictySlider" className={styles.contentBox}>
      <EachPublicity/>
      <EachPublicity/>
    </section>
  );
};

export default PublicitySlider;
