import React from 'react'

const App = (state) => {
	return (
		<div style={{textAlign: 'center', paddingTop: '50px'}}>
			<button onClick={state.decrement}>😭</button>{state.counter}<button onClick={state.increment}>😘</button>
		</div>
	)
}


export default App