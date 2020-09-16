import {connect} from 'react-redux';
import ProductCard from './productCard';
import {getProductByCategory,loadProductRequest} from '../../../redux/productRedux';

const mapStateToProps = state=>({
    products: getProductByCategory(state),
})
const mapDispatchToProps = (dispatch) => ({
  loadProduct : ()=> dispatch(loadProductRequest())
  });


export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);