import {connect} from 'react-redux';
import renderTableData from './tableData';
import {getOrder,loadOrderRequest,getRequest} from '../../../redux/orderRedux';

const mapStateToProps =(state) =>({
    order:getOrder(state),
    request: getRequest(state),
});

const mapDispatchToProps = (dispatch)=> ({
    loadOrder:()=> dispatch(loadOrderRequest()),
})

export default connect(mapStateToProps,mapDispatchToProps)(renderTableData)