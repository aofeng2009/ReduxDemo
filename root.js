
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {store} from './store';
import Index from './index';

export default class reduxDemo extends Component{
	render(){
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		)
	}
}
