import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import appReducer from './redux'
import { createLogger } from 'redux-logger'
import { ThunkMiddleware } from 'redux-thunk'

// let middleware = [
//   ThunkMiddleware.withExtraArgument({axios}),
// ]
// if (process.browser) {
//   middleware = [...middleware, createLogger({collapsed: true})]
// }
// not sure if this is needed, found it on jpfp

const store = createStore(
  appReducer,
  applyMiddleware(
    ThunkMiddleware,
    createLogger()
  )
);

export default store
