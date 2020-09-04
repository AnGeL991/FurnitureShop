import React from 'react';
//import {useDispatch} from 'react-redux';
//import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './search.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from "@fortawesome/free-solid-svg-icons";

const Search =() =>{
    // const [isRedirect,setRedirect]=useState(false);
    // const[searchValue,setSearchValue] = useState('');

    // const dispatch = useDispatch();
    // const searchRef = useRef(null);

    // const handleInputChange = e=>{
    //     setSearchValue(e.target.value);
    // };
    // const cleanSearch =()=> {
    //     setSearchValue('');
    //     closeSearch();
    //     if(close) close();
    // };
    // const handleSubmit=e=>{
    //     e.preventDefault();
    //     dispatch(setSearchValueAction('search',searchValue));
    //     setRedirect(true);
    //     cleanSearch();
    // }
    // useEffect(()=>{
    //     if(isVisible) searchRef.current.focus();
    //     else searchRef.current.blur();
        
    //     setRedirect(false);
    // },[isRedirect,isVisible]);
    return (
        <div className={styles.searchBox}>
        <form className={styles.formSearch} action="search" method="get" >
          <input placeholder="Szukaj w sklepie"
          type="text"
          name="s[search_text]"
          />
          
          <button type='submit' className={styles.btnSubmit}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </button>
        </form>
      </div>
    )
}
Search.propTypes = {
    IsVisible:PropTypes.bool.isRequired,
    closeSearch: PropTypes.func.isRequired,
    close:PropTypes.func,
};
Search.defaultProps = {
    close:null,
}

export default Search;

