import { GET_CRYPTO } from "./constants"

const initialState = {
  crypto: [],
  remoteCrypto: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CRYPTO:
      return Object.assign({}, state, {
          crypto: state.crypto.concat(action.payload)
        })
    case "CRYPTO_LOADED": {
      return Object.assign({}, state, {
        remoteCrypto: state.remoteCrypto.concat(action.payload)
      })
    }
    default:
      return state
    }
}

export default rootReducer