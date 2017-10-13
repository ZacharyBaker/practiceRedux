import React from 'react'
import CounterContainer from '../containers/Counter'
import AddABunch from '../containers/AddABunch'

const Wrap = (state) => {
	return (
		<div>
			<CounterContainer />
			<AddABunch />
		</div>
	)
}


export default Wrap