import {connect} from 'react-redux';
import MiniProductList from './miniProductList';
import {getOrderProduct} from '../../../redux/orderRedux'

const mapStateToProps = state=>({
    orders:getOrderProduct(state),
});


export default connect(mapStateToProps)(MiniProductList);