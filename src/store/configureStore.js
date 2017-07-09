import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers  from '../reducers/index';


export default function configureStore() {
	let createStoreWithMiddleware = compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);
	const initialState = {config:{limit:20,sport:'NHL',period:'latest', status:'all', date:'all'}};
	const store = createStoreWithMiddleware(reducers, initialState);
	return store;
}



