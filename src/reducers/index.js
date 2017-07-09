import { combineReducers } from 'redux';
import result from './result';
import config from './config';

const reducers = combineReducers({
	result,
	config
});

export default reducers;