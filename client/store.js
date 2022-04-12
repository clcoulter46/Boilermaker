import { createStore, applyMiddleware } from 'redux'
import appReducer from './redux/index'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

let middleware = [
  thunkMiddleware,
  createLogger()
]
// if (process.browser) {
//   middleware = [...middleware, createLogger({collapsed: true})]
// }
// // not sure if this is needed, found it on jpfp

// const store = createStore(
//   appReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const store = createStore(
  appReducer,
  applyMiddleware(
    ...middleware
    // thunkMiddleware.withExtraArgument({axios}),
    // createLogger({collapsed: true})
  )
)

export default store
