import React from 'react';
import styles from './arrow.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowLeft = ()=>(
    <div className={styles.leftArrow}>
    <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowCenter} />
  </div>
);

export default ArrowLeft;