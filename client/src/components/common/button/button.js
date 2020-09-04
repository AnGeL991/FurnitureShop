import React from "react";
import styles from "./button.module.scss";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';

const Button = ({onClick,width,children,margin,padding,link}) => {
  return (
  <button className={styles.button} 
   style={{
       width: `${width}`,
       margin: `${margin}`,
       padding:`${padding}`
}}
  onClick={onClick}>
      <NavLink to={link}>
      {children}
      </NavLink>
  </button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func,
  width:PropTypes.string,
  margin: PropTypes.string,
  link:PropTypes.string,
  padding:PropTypes.string,
};
Button.defaultProps = {
    link:'/',
}

export default Button;
