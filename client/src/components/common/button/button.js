import React from "react";
import styles from "./button.module.scss";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';

const Button = ({onClick,width,children,margin,padding,link,fontSize,uppercase}) => {
  return (
    <NavLink to={link}>
  <button className={styles.button} 
   style={{
       width: `${width}`,
       margin: `${margin}`,
       padding:`${padding}`,
       fontSize:`${fontSize}`,
       textTransform:`${uppercase === false ? "none" : "uppercase"}`
}}
  onClick={onClick}>
     
      {children}
      
  </button>
  </NavLink>
  )
};

Button.propTypes = {
  onClick: PropTypes.func,
  width:PropTypes.string,
  margin: PropTypes.string,
  link:PropTypes.string,
  padding:PropTypes.string,
  fontSize: PropTypes.string,
  uppercase: PropTypes.bool,
};
Button.defaultProps = {
    link:'/',
}

export default Button;
