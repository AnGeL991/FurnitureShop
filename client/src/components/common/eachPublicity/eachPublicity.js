import React,{useState,useEffect,useRef} from "react";
import styles from "./eachPublicity.module.scss";
import Arrow from "../arrow/arrow";
import PropTypes from 'prop-types'


const EachPublicity = (props) => {
    const slides = [
       
         {index: 0 , context: '- 50% off',backgroundImage:'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'}, 
         {index: 1 ,context: '- 70% off',backgroundImage:'https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
    ]
    const [slide,setSlide]=useState({
        activeIndex:0,
        translate:0,
    })
    const {activeIndex,translate} = slide

    const handleNextSlide =()=>{
        setSlide({
            ...slide,
            activeIndex: (activeIndex >= slides.length -1 ? 0 : activeIndex+1),
            translate: 235 * (activeIndex+1> slides.length-1? 0 : activeIndex +1) ,
        })
        console.log(slide,slides.length);
    
    }
    console.log('slide',slide);
    const handlePrevSlide=()=>{
      setSlide({
          ...slide, 
          activeIndex: activeIndex === 0 ?slides.length -1  :activeIndex -1,
          translate:235 * (activeIndex+1> slides.length-1? 0 : activeIndex +1),
      })
      console.log(slide,slides.length);
        
    }
    
    

  return (
    <div className={styles.wrapper}
    style={{
        width: `${205*(slides.length +30)}px`,
    }}
    >
        {slides.map(el=>(
            <div className={styles.half}
             id={el.index}
             style={{
                 opacity: activeIndex ===(el.index) ? '1':'0',
                 transform:`translateX(-${slide.translate}px)`
             }}
             >
            <div 
            className={styles.publicityProduct}
            style={{backgroundImage:`url(${el.backgroundImage}`}}
            >
              <div className={[styles.arrow + " " + styles.left].join(" ")}>
                <Arrow direction="right" handleClick={()=>handleNextSlide()} ></Arrow>
              </div>
                <div className={styles.contexBox}>
                    <p className={styles.context}>{el.context}</p>
                </div>
              <div className={[styles.arrow + " " + styles.right].join(" ")}>
                <Arrow direction="left" handleClick={()=>handlePrevSlide()}></Arrow>
              </div>
            </div>
          </div>
        ))}
      {/* <div className={styles.half}>
        <div 
        className={styles.publicityProduct}
        style={{backgroundImage:`url(${backgroundImage}`}}
        >
          <div className={[styles.arrow + " " + styles.left].join(" ")}>
            <Arrow direction="right"></Arrow>
          </div>
            <div className={styles.contexBox}>
                <p className={styles.context}>{context}</p>
            </div>
          <div className={[styles.arrow + " " + styles.right].join(" ")}>
            <Arrow direction="left"></Arrow>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={styles.publicityProduct}>
          <div className={[styles.arrow + " " + styles.left].join(" ")}>
            <Arrow direction="right"></Arrow>
          </div>

          <div className={[styles.arrow + " " + styles.right].join(" ")}>
            <Arrow direction="left"></Arrow>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={styles.publicityProduct}>
          <div className={[styles.arrow + " " + styles.left].join(" ")}>
            <Arrow direction="right"></Arrow>
          </div>

          <div className={[styles.arrow + " " + styles.right].join(" ")}>
            <Arrow direction="left"></Arrow>
          </div>
        </div>
      </div> */}
    </div>
  );
};

EachPublicity.protoType={
    context: PropTypes.string,
    backgroundImage:PropTypes.string,
}
EachPublicity.defaultProps ={
    context:'-50% off',
    backgroundImage:"https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
}
export default EachPublicity;
