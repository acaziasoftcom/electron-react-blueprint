import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app-loader'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
)
