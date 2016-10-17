import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import * as Actions from '../actions/Actions'

const mapStatesToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStatesToProps, mapDispatchToProps)(Cart)