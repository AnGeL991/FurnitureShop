import React from "react";
import styles from "./eachPublicity.module.scss";
//import ProductBox from "../productBox/productBox";
import Arrow from "../arrow/arrow";

const EachPublicity =()=>{

    return (
<div className={styles.wrapper}>
        <div className={styles.half}>
          <div className={styles.publicityProduct}>
          <div className={[styles.arrow +' '+ styles.left].join(' ')}>
          <Arrow direction='right'></Arrow>
          </div>
        
          <div className={[styles.arrow +' '+ styles.right].join(' ')}>
          <Arrow direction='left'></Arrow>
          </div>
          </div>
          </div>
          <div className={styles.half}>
          <div className={styles.publicityProduct}>
          <div className={[styles.arrow +' '+ styles.left].join(' ')}>
          <Arrow direction='right'></Arrow>
          </div>
        
          <div className={[styles.arrow +' '+ styles.right].join(' ')}>
          <Arrow direction='left'></Arrow>
          </div>
          </div>
          </div>
          <div className={styles.half}>
          <div className={styles.publicityProduct}>
          <div className={[styles.arrow +' '+ styles.left].join(' ')}>
          <Arrow direction='right'></Arrow>
          </div>
        
          <div className={[styles.arrow +' '+ styles.right].join(' ')}>
          <Arrow direction='left'></Arrow>
          </div>
          </div>
          </div>
      </div>)
};

export default EachPublicity;