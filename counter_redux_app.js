import { createStore } from 'redux'

// Single root reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Redux store
let store = createStore(counter);

// subscribing to state change event
store.subscribe(() =>
  console.log(store.getState())
)

// dispatch actions
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })

