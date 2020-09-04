import {useEfferct} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop =()=>{
    const {pathName} = useLocation();

    useEfferct(()=>{
        window.scrollTo(0,0);
    },[pathName]);

    return null;
}

export default ScrollToTop;