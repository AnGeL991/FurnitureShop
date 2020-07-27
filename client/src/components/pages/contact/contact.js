import React from "react";
import styles from "./contact.module.scss";
import Header from "../../common/headerTitle/header";
import MapContainer from "../../features/mapContainer/mapContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt,faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        name: "",
        surname: "",
        email: "",
        telephone: "",
        option: "",
        text: "",
      },
      isError: false,
      consent: false,
    };
    this.handleInputChecked = this.handleInputChecked.bind(this);
  }
  handleInputChange = ({ target }) => {
    const { message } = this.state;
    const { value, name } = target;
    this.setState({ message: { ...message, [name]: value } });
  };
  updateSelectFlield = ({ target }) => {
    const { message } = this.state;
    const { value } = target;
    this.setState({ message: { [message.option]: value } });
  };
  handleInputChecked(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  render() {
    const { handleInputChange, updateSelectFlield, handleInputChecked } = this;
    const { message, consent } = this.state;
    return (
      <section className={styles.page}>
        <Header
          fontSize="34px"
          textAlign="left"
          fontWeight="500"
          margin="20px 140px "
        >
          kontakt
        </Header>
        <section className={styles.adressBox}>
          <div className={styles.addresCompany}>
            Bohaterów Modlina 32, 05-100 Nowy Dwór Mazowiecki
          </div>
          <div className={styles.contactWrapper}>
            <div className={styles.phoneContact}>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
              Jarosław (+48) 999 999 999
            </div>
            <div className={styles.phoneContact}>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
              Jarosław (+48) 999 999 999
            </div>
            <div className={styles.phoneContact}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon}/>
            M_Tibis_Bis@gmail.com
            </div>
          </div>
        </section>
        <section className={styles.contactBox}>
          <div className={styles.container}>
            <div className={styles.contactForm}>
              <form>
                <input
                  required
                  type="text"
                  color="#000000"
                  value={message.name}
                  id="fname"
                  name="name"
                  placeholder="Imie"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="text"
                  value={message.surname}
                  id="Sname"
                  name="surname"
                  placeholder="nazwisko"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="email"
                  value={message.email}
                  name="email"
                  placeholder="email"
                  onChange={handleInputChange}
                />
                <input
                  required
                  type="text"
                  value={message.telephone}
                  name="telephone"
                  placeholder="Telefon"
                  onChange={handleInputChange}
                />
                <select
                  value={message.option}
                  onChange={updateSelectFlield}
                  name="option"
                >
                  <option value="test1">Wycena indywidualna</option>
                  <option value="test1">Reklamacja zakupionego towaru</option>
                  <option value="test1">Współpraca długodystansowa</option>
                  <option value="test1">inne</option>
                </select>
                <textarea
                  value={message.text}
                  name="text"
                  onChange={handleInputChange}
                  placeholder="Treść wiadomości"
                  cols="40"
                  rows="4"
                />
                <div className={styles.consentInput}>
                  <input
                    required
                    name="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={handleInputChecked}
                    className={styles.checkedButton}
                  />
                  <p className={styles.lebelCheckedBox}>
                    KORZYSTAJĄC Z FORMULARZA ZGADZASZ SIĘ NA PRZECHOWYWANIE I
                    PRZETWARZANIE TWOICH DANYCH PRZEZ TĘ WITRYNĘ.
                  </p>
                </div>
                <input
                  type="submit"
                  value="Wyślij"
                  className={styles.inputSubmit}
                />
              </form>
            </div>
            <div className={styles.mapBox}>
              <MapContainer />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Contact;
