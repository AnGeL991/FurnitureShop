import {connect } from 'react-redux';
import ProductNav from './productNav';
import {addCategory,getCategory} from '../../../redux/categoryRedux';

const mapStateToProps = state =>({
    categories:getCategory(state)
})
const mapDispatchToProps = dispatch=>({
    addCategories: (id)=>
    dispatch(
        addCategory({
            id,
        })
    )
});
export default connect(mapStateToProps,mapDispatchToProps)(ProductNav)
