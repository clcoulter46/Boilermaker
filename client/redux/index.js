import { combineReducers } from "redux";

function dummyReducer (state = {}, action) {
  return state
}

const appReducer = combineReducers({
  dummyReducer: dummyReducer //replace this with a real reducer once ready
})

export default appReducer

// Now you're ready to go, and the rest is up to you! Define the action types, action creators and sub-reducers that your redux app will use to calculate the state. Use the connect function from react-redux to obtain slices of state and the dispatch method throughout your app.
