import {connect} from 'react-redux';
import MiniProductList from './miniProductList';
import {getOrderProduct,removeFromBasekt} from '../../../redux/orderRedux'

const mapStateToProps = state=>({
    orders:getOrderProduct(state),
});
const mapDispatchToProps = (dispatch)=>({
    removeFromBasekt: (id) =>
    dispatch(removeFromBasekt({
        id
    }))
})


export default connect(mapStateToProps,mapDispatchToProps)(MiniProductList);