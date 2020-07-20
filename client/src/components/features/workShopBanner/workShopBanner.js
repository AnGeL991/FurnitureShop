import React from 'react';
import styles from './workShopBanner.module.scss';
import Header from "../../common/headerTitle/header";
import Container from "../../layout/container/container";

const WorkShopBanner = ()=>(
    <section id='WorkShopBanner'>
         <Header
        textAlign="left"
        fontSize="24px"
        fontWeight="300"
        margin="30px 70px"
      >
        Pracownia
      </Header>
      <Container>
        <div className={styles.contentBox}>
          <div className={styles.textBoxLeft}>
            <Header color="white" border="none">
              M-Tibis-bis
            </Header>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className={styles.textBoxRight}>
            <p className={styles.description}>
              Jeśli stawiasz na pewność, doświadczenie i bezpieczeństwo to
              własnie nam powinieneś zaufać. Rodzina wraz z pasją są dla nas
              najwaźniejszymi rzeczami, dlatego wykonujemy nasze meble z
              najlepsza starannością. Jesteśmy pewnie ze nie zawiedziemy twoich
              oczekiwań.
            </p>
          </div>
        </div>
      </Container>
    </section>
);

export default WorkShopBanner;