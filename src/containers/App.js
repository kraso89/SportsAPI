import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {createHistory} from 'history';
import Root from '../components/Root';
import Home from '../components/Home';
require('../styles/app.scss');
const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
					 <Root>
						<Home/>
					 </Root>
			</Provider>
		);
	}
}
export default App;
					