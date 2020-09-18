import {connect} from 'react-redux';
import renderOrderList from './renderOrderList';
import {getOrderProduct,removeFromBasekt} from '../../../redux/orderRedux';

const mapStateToProps = state=>({
    orders:getOrderProduct(state),
});
const mapDispatchToProps = (dispatch)=>({
    removeFromBasekt: (_id) =>
    dispatch(removeFromBasekt({
        id:_id
    }))
})

export default connect(mapStateToProps,mapDispatchToProps)(renderOrderList);