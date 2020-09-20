import React from "react";
import styles from "./publicitySlider.module.scss";
import EachPublicity from "../../common/eachPublicity/eachPublicity";

  

const PublicitySlider = () => {

  const slides = [
       
    {index: 0 , context: '- 50% off',backgroundImage:'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'}, 
    {index: 1 ,context: '- 70% off',backgroundImage:'https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
]

  return (
    <section id="publictySlider" className={styles.contentBox}>
      <EachPublicity slides={slides} autoPlay={2} />
      <EachPublicity slides={slides} autoPlay={3} />
    </section>
  );
};

export default PublicitySlider;
