import { connect } from 'react-redux'
import { increment, decrement, incrementBy } from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = state => {
	return {
		counter: state.counter
	}
}
const mapDispatchToProps = dispatch => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		},
		incrementBy: num => {
			dispatch(incrementBy(num))
		}
	}
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default CounterContainer