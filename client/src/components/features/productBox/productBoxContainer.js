import {connect} from 'react-redux';
import ProductBox from'./productBox';

import {getOrderProduct,addToBasket} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
    basket: getOrderProduct(state),
  });

const mapDispatchToProps = (dispatch, props)=>({
    addToBasket: ()=>
    dispatch(
        addToBasket({
        id:props.id,
        ...props,
    }),
    )
});


export default connect(mapStateToProps,mapDispatchToProps)(ProductBox);