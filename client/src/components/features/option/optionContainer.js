import {connect} from 'react-redux';
import option from './option';
import  {setOptionSort,getOption} from '../../../redux/productRedux'

const mapStateToPros=state=>({
    option :getOption(state),
});

const mapDispatchToProps =(dispatch)=>({
    setOption : (option)=>
    dispatch(
        setOptionSort({
            option,
        }),
    )
});

export default connect(mapStateToPros,mapDispatchToProps)(option);