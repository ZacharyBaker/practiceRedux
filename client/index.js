import React from 'react'
import { render } from 'react-dom'
import Wrap from './components/Wrap'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from './reducers' // i dont know
let store = createStore(counterApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

render(
	<Provider store={store} >
		<Wrap />
	</Provider>,
	document.getElementById('root')	
);