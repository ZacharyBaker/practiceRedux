import React from 'react'
import CounterContainer from '../containers/Counter'

const Wrap = (state) => {
	return (
		<div>
			<CounterContainer />
			<div>another compoentnt</div>
		</div>
	)
}


export default Wrap