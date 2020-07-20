/** @jsx jsx */
import styles from './header.module.scss';
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const Header =({children,color,textAlign,fontSize,fontWeight,margin,border})=>(
    <header className={styles.title}
    css={css`border:${border};`}
   >
        <h3
         css={css`
         color:${color};
         text-align:${textAlign};
         font-size:${fontSize};
         font-weight:${fontWeight};
         margin:${margin};
         
         `}
        >{children}</h3>
    </header>
);

Header.propTypes={
    color:PropTypes.string,
    textAlign: PropTypes.string,
    fontSize:PropTypes.string,
    fontWeight:PropTypes.string,
    border:PropTypes.string,
}
Header.defaultProps={
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '700',
}
export default Header;