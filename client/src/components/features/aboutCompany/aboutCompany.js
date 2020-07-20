import React from 'react';
import styles from './aboutCompany.module.scss';
import Header from '../../common/headerTitle/header';

const AboutCompany = ()=>(
<section className={styles.aboutCompany}>
        <Header border='none' fontWeight='300' textAlign='left' margin='20px 140px'>Historia firmy</Header>
        <div className={styles.historyImg}>
          <img src="/image/history.jpg" alt="history company" />
        </div>
        <ul className={styles.posts}>
          <li className={styles.eachPost}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>
          <li className={styles.eachPost}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>
          <li className={styles.eachPost}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>
        </ul>
      </section>
);

export default AboutCompany;