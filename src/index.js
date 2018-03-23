import React from 'react';
import { render } from 'react-dom';
import App from './App';
import InfoTable from './InfoTable';
import { BrowserRouter, Route } from 'react-router-dom';


render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={App} />
			<Route exact path='/customers' component={InfoTable} />
		</div>
	</BrowserRouter>,	
	document.getElementById('root'));