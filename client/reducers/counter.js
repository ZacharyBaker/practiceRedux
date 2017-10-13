const counter = (state = 0, action) => {
	let nextState
  switch (action.type) {
    case 'INCREMENT':
      nextState = state + 1
      return nextState
    case 'DECREMENT':
      nextState = state - 1
      return nextState
    case 'INCREMENT_BY':
      nextState = state + action.num
      return nextState
    default:
      return state
  }
}

export default counter