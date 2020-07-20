import React from "react";
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Header from '../../common/headerTitle/header';

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.topBorder}>
      <Header border='none' fontWeight='400'>Jarosław Zaremba</Header>
    </div>
    <div className={styles.contentBox}>
      <div className={styles.aboutCompany}>
        <div className={styles.logo}>
          <img src="/image/logo1.jpg" alt="company Logo" />
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={styles.information}>
        <h3 className={styles.title}>informacje</h3>
        <ul className={styles.footerList}>
          <li className={styles.eachList}>
            <NavLink to="/information/regulation">Regulamin</NavLink>
          </li>
          <li className={styles.eachList}>
            <NavLink to="/information/privacy policy">
              Polityka prywatnosci
            </NavLink>
          </li>
          <li className={styles.eachList}>
            <NavLink to="/information/data">
              Zasady przetwarzania danych
            </NavLink>
          </li>
          <li className={styles.eachList}>
            <NavLink to="/information/cookes">Polityka cookie</NavLink>
          </li>
        </ul>
      </div>
      <section className={styles.fanPage}>
        <h3>Nasz fanpage</h3>
        <div className={styles.instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className={styles.facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </section>
    </div>
    <div className={styles.bottomBorder}>
      <span>@2020 M-Tbis-Bis</span>
    </div>
  </section>
);

export default Footer;
