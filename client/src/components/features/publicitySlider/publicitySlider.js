/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styles from "./publicitySlider.module.scss";
import ProductBox from '../productBox/productBox';
import Arrow from '../../common/arrow/arrow';

const PublicitySlider = ({amount,radius,shadow}) => {
  return (
    <section id="publictySlider" className={styles.contentBox}
    css={
      css`
      ${amount === '1'? `width:300px`:` `};
      ${radius ==='none'? `border-radius:none`:`border-radius:24px`};
      ${shadow ==='yes'?`box-shadow: inset 10px 2px 300px -66px rgba(0,0,0,0.5)`:` `};
      `
    }>
      <div className={styles.arrow}>
    <Arrow direction="right"/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.sliderPublicity}>
          <ProductBox 
          width ="300px"
          />
          <ProductBox width="300px" />
          <ProductBox width="300px" />
          <ProductBox width="300px" />
        </div>
      </div>
      <div className={styles.arrow}><Arrow direction="left"/></div>
    </section>
  );
};

export default PublicitySlider;
