import React from "react";
import styles from "./productNav.module.scss";
import { NavLink } from "react-router-dom";

class ProductNav extends React.Component {
  constructor(props){
    super(props);
    this.handleTakeValue = this.handleTakeValue.bind(this);
  }

  handleTakeValue(e){
    const nazwa = e.this.value;
    console.log(nazwa);
  }
  render() {
    return (
      <nav className={styles.productNav} id="homeProductNav">
        <ul className={styles.navList}>
          <li>
            <NavLink to="/home/news">Nowości</NavLink>
          </li>
          <li>
            <NavLink to="/home/furniture">Meble</NavLink>
          </li>
          <li>
            <NavLink to="/home/table">Stoliki</NavLink>
          </li>
          <li>
            <NavLink to="/home/sofa">Sofy</NavLink>
          </li>
          <li>
            <NavLink to="/home/accessories">Akcesoria</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ProductNav;
