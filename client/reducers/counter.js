const counter = (state = 0, action) => {
	let nextState
  switch (action.type) {
    case 'INCREMENT':
      nextState = state + 1
      return nextState
    case 'DECREMENT':
      nextState = state - 1
      return nextState
    default:
      return state
  }
}

export default counter