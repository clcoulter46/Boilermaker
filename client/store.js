import { createStore, applyMiddleware } from 'redux'
import appReducer from './redux'
import { createLogger } from 'redux-logger'
import { thunkMiddleware } from 'redux-thunk'

// let middleware = [
//   thunkMiddleware.withExtraArgument({axios}),
// ]
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
    thunkMiddleware,
    createLogger()
  )
)

export default store
