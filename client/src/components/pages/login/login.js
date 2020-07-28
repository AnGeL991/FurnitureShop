import React from 'react';
import styles from './login.module.scss';
import Container from '../../layout/container/container';
import Header from '../../common/headerTitle/header';
import PublicitySlider from '../../features/publicitySlider/publicitySlider'
const Login =()=>{

    return(
        <div className={styles.page}>
           <Header
          fontSize="34px"
          textAlign="left"
          fontWeight="300"
          margin="20px 140px "
        >
          moje konto
        </Header>
            <Container>
                <div className={styles.contentBox}>
                <section className={styles.accontForm}>
                <h3 className={styles.accountTitle}>Zaloguj się</h3>
                <form method="post" autoComplete='off'>
                <p className={styles.accountWrapper}>
                    <label for='username'>Użytkownik lub e-mail&nbsp;<span className={styles.required}>*</span></label>
                    <input type='text' name='username' autoComplete='username' ></input>
                </p>
                <p className={styles.accountWrapper}>
                <label for="password">
                    Hasło&nbsp;
                    <span className={styles.required}>*</span>
                </label>
                    <input type="password" name="password" autoComplete="current-Password" />
                </p>
                <p className={styles.accountWrapper}>
                    <label>
                        <input type="checkbox" value='forever' className={styles.checked}/>
                            <span>Zapamietaj mnie</span>
                        
                    </label>
                    <button type="submit" name='login' value="zaloguj się" className={styles.submitBtn} > zaloguj się</button>
                </p>
                <p className={styles.lostPassoword}>
                <a href='/' alt='losta Passowrd' className={styles.lostLink}>Nie pamiętasz hasła?</a>
                </p>
                </form>
                </section>
               <div className={styles.publicity}>
               <PublicitySlider radius="none" />
               </div>
                </div>
            </Container>
        </div>
    )
};

export default Login;