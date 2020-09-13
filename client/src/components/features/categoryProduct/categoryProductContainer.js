import {connect} from 'react-redux';
import categoryProduct from './categoryProduct';

import {getCategory,addCategory} from '../../../redux/categoryRedux';
import {setSearchValues} from '../../../redux/productRedux';

const mapStateToProps = state =>({
    categories: getCategory(state)
});

const mapDispatchToProps = (dispatch)=> ({
    addCategories: (id)=>
    dispatch(addCategory({
         category: id,
    })),
    searchValue :(type,value)=> dispatch(setSearchValues(
        {
          type,
          value,
        }
      ))
});

export default connect(mapStateToProps,mapDispatchToProps)(categoryProduct);
