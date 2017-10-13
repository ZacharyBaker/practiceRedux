import React from 'react'
import { connect } from 'react-redux'
import { incrementBy } from '../actions'

let AddABunch = ({ dispatch }) => {
	let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(incrementBy(Number(input.value)))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          add numbers
        </button>
      </form>
    </div>
  )
}

AddABunch = connect()(AddABunch)

export default AddABunch