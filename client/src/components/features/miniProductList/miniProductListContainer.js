import {connect} from 'react-redux';
import MiniProductList from './miniProductList';
import {getOrderProduct,removeFromBasekt} from '../../../redux/orderRedux'

const mapStateToProps = state=>({
    orders:getOrderProduct(state),
});
const mapDispatchToProps = (dispatch)=>({
    removeFromBasekt: (_id) =>
    dispatch(removeFromBasekt({
        id:_id
    }))
})


export default connect(mapStateToProps,mapDispatchToProps)(MiniProductList);