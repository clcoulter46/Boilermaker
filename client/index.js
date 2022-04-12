//entry file

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
//import "../public/index.css"

render(
  <Provider store={store}>
    {/* <Routes/> */}
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app') //to connect to index.html
)
