/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import CryptoPage from './components/CryptoPage'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <CryptoPage />
      </PersistGate>
      </Provider>
    )
  }
}

export default App
