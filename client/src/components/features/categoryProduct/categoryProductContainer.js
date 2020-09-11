import {connect} from 'react-redux';
import categoryProduct from './categoryProduct';

import {getCategory,addCategory} from '../../../redux/categoryRedux';

const mapStateToProps = state =>({
    categories: getCategory(state)
});

const mapDispatchToProps = (dispatch)=> ({
    addCategories: (name)=>
    dispatch(addCategory({
        category: name,
    }))
});

export default connect(mapStateToProps,mapDispatchToProps)(categoryProduct);
