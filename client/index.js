//entry file

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

render(
  <Provider store={store}>
    {/* rest of app goes here */}
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app') //to connect to index.html
)
