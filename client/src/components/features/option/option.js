import React, { useState } from "react";
import styles from "./option.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Option = ({setOption}) => {

    const options =[
        {option:'defaultSort',text:'Sortowanie domyślne'},
        {option:'maxPriceSort',text:'Sortuj wg. ceny: od najwyższej'},
        {option:'minPriceSort',text:'Sortuj wg. ceny: od najniższej'},
        {option:'popularitySort',text:'Sortuj wg. popularności'},
        {option:'newsProductSort',text:'Sortuj od najnowszych'},
    ];
   function handleChangeOption(chooseOption){
        setOption(chooseOption)
        console.log(chooseOption);
        setActive((prevState)=>({option:prevState.chooseOption}))
    }
    const [active,setActive]=useState({
        option:'defaultSort',
        active:true,
    });

  return (
    <div className={styles.optionBox}>
      <p>
        sortuj
        <FontAwesomeIcon icon={faSortDown} className={styles.arrowIcon} />
      </p>
      <ul className={styles.showList}>
          {options.map((item)=>(
             <li key={item.option} onClick={()=>handleChangeOption(item.option)}>
              <p className={`${active.option === item.option? styles.active: ''}`}>{item.text}</p>
              </li>
              
          ))}
        {/* <li>
          <p  className={styles.active}>
            Sortowanie domyślne
          </p>
        </li>
        <li>
          <p >Sortuj wg. ceny: od najwyższej</p>
        </li>
        <li>
          <p >Sortuj wg. ceny: od najniższej</p>
        </li>
        <li>
          <p >Sortuj wg. popularności</p>
        </li>
        <li>
          <p >Sortuj od najnowszych</p>
        </li> */}
      </ul>
    </div>
  );
};
Option.propTypes ={
    option: PropTypes.object,
    setOption:PropTypes.func,
}

export default Option;
