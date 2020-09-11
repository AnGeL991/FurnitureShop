import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
//import PropTypes from "prop-types";
import styles from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {setSearchValues as setSearchValueAction} from '../../../redux/productRedux'


const Search = ({ close, IsVisible, closeSearch }) => {
  const [isRedirect, setRedirect] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
 }



    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(setSearchValueAction("search", searchValue));
      setRedirect(true);
    };

    useEffect(() => {
      if (IsVisible) searchRef.current.focus();
      else searchRef.current.blur();

      setRedirect(false);
    }, [isRedirect, IsVisible]);

    return (
      <>
        {isRedirect && <Redirect to="/shop" />}
        <div className={styles.searchBox}>
          <form
            className={styles.formSearch}
            action="search"
            method="get"
            onSubmit={handleSubmit}
            active={IsVisible}
          >
            <input
              placeholder="Szukaj w sklepie"
              type="search"
              name="s[search_text]"
              onChange={(e) => handleInputChange(e)}
              value={searchValue}
              ref={searchRef}
            />

            <button type="submit" className={styles.btnSubmit}>
              <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </button>
          </form>
        </div>
      </>
    );
  };
;
Search.propTypes = {

};
Search.defaultProps = {
  close: null,
};

export default Search;
