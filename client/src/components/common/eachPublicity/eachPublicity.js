import React, { useState, useEffect, useRef } from "react";
import styles from "./eachPublicity.module.scss";
import Arrow from "../arrow/arrow";
import PropTypes from "prop-types";

const EachPublicity = (props) => {
  const { slides } = props;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [slide, setSlide] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeIndex, transition } = slide;

  const autoPlayRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    let interval = null;
    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }
    return () => {
      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, [props.autoPlay]);

  useEffect(() => {
    if (transition === 0) setSlide({ transition: 0.5 });
  }, [transition]);
  const smoothTransition = () => {
    let _slides = [];
    if (activeIndex === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeIndex === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    } else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

    setSlide({
      _slides,
      transition: 0,
      translate: 235,
    });
  };

  const nextSlide = () => {
    setSlide({
      activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
      translate:
        235 * (activeIndex + 1 > slides.length - 1 ? 0 : activeIndex + 1),
    });
    console.log(slide, slides.length);
  };
  console.log("slide", slide);
  const prevSlide = () => {
    setSlide({
      activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
      translate:
        235 * (activeIndex + 1 > slides.length - 1 ? 0 : activeIndex + 1),
    });
    console.log(slide, slides.length);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        width: `${205 * (slides.length + 30)}px`,
      }}
    >
      {slides.map((el) => (
        <div
          className={styles.half}
          key={el.index}
          style={{
            opacity: activeIndex === el.index ? "1" : "0",
            transform: `translateX(-${slide.translate}px)`,
          }}
        >
          <div
            className={styles.publicityProduct}
            style={{ backgroundImage: `url(${el.backgroundImage}` }}
          >
            <div className={[styles.arrow + " " + styles.left].join(" ")}>
              <Arrow direction="right" handleClick={() => nextSlide()}></Arrow>
            </div>
            <p className={styles.context}>{el.context}</p>
            <div className={[styles.arrow + " " + styles.right].join(" ")}>
              <Arrow direction="left" handleClick={() => prevSlide()}></Arrow>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

EachPublicity.protoType = {
  context: PropTypes.string,
  backgroundImage: PropTypes.string,
  mauseMove: PropTypes.string,
  shadow: PropTypes.string,
};
EachPublicity.defaultProps = {
  slides: [],
  context: "-50% off",
  backgroundImage:
    "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
};
export default EachPublicity;
