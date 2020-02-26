import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunk))

export default store