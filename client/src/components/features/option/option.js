import React from "react";
import styles from "./option.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Option = () => {

    const options =[];
  return (
    <div className={styles.optionBox}>
      <p>
        sortuj
        <FontAwesomeIcon icon={faSortDown} className={styles.arrowIcon} />
      </p>
      <ul className={styles.showList}>
        <li>
          <p  className={styles.active}>
            Sortowanie domyślne
          </p>
        </li>
        <li>
          <p >Sortuj wg. ceny: od najwyższej</p>
        </li>
        <li>
          <p >Sortuj wg. ceny: od najniższej</p>
        </li>
        <li>
          <p >Sortuj wg. popularności</p>
        </li>
        <li>
          <p >Sortuj od najnowszych</p>
        </li>
      </ul>
    </div>
  );
};

export default Option;
