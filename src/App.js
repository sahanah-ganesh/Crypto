/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CryptoPage from './components/CryptoPage'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <CryptoPage />
      </Provider>
    )
  }
}

export default App
