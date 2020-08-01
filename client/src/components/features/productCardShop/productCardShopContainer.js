import {connect} from 'react-redux';
import productCardShop from './productCardShop';
import{
    addProductRequest,
    getRequest
} from '../../../redux/orderRedux';

const mapStateToProps =(state)=> ({
    requests:getRequest(state),

});
const mapDispatchToProps = dispatch =>({
    addProductRequest:(order) => dispatch(addProductRequest(order)),
})
export default connect (mapStateToProps,mapDispatchToProps)(productCardShop);