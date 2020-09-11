import React from "react";
import styles from "./works.module.scss";
import Header from '../../common/headerTitle/header';

const Works = () => {
  return (
    <section>
     <Header textAlign='left' fontWeight='300' margin='60px 70px' border='none'>Tworzone z pasją</Header>
      <div className={styles.works}>
        <div className={styles.eachWork}>
          <img src="/image/work.jpg" alt="logoCompany" />
          <div className={styles.bgc}>
            <h3 className={styles.subtitle}>Nasze realizacje</h3>
          </div>
        </div>
        <div className={styles.eachWork}>
          <img src="/image/work2.jpg" alt="logoCompany" />
          <div className={styles.bgc}>
            <h3 className={styles.subtitle}>test</h3>
          </div>
        </div>
        <div className={styles.eachWork}>
          <img src="/image/work3.jpg" alt="logoCompany" />
          <div className={styles.bgc}>
            <h3 className={styles.subtitle}>test</h3>
          </div>
        </div>
        <div className={styles.eachWork}>
          <img src="/image/work4.jpg" alt="logoCompany" />
          <div className={styles.bgc}>
            <h3 className={styles.subtitle}>test</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
