import {connect} from 'react-redux';

import {getOrderProduct} from '../../../redux/orderRedux';
import TableData from './tableData';

const mapStateToProps =(state) =>({
    order:getOrderProduct(state),
    //request: getRequest(state),
});

// const mapDispatchToProps = (dispatch)=> ({
//     loadOrder:()=> dispatch(loadOrderRequest()),
// })

export default connect(mapStateToProps)(TableData);