import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Home from './Home';

function mapStateToProps(state) {
	return {
		result: state.result,
		config:state.config,
	 }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}
const Root = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Root;