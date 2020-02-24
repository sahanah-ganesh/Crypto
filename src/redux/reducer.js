import { GET_CRYPTO } from "./constants"

const initialState = {
  crypto: [
    // {
    //   id: 1,
    //   name: 'Bitcoin',
    //   symbol: 'BTC',
    //   quote: {
    //     AUD: {
    //       price: 14568.89264157718,
    //       percent_change_7d: -4.80199241,
    //     },
    //   },
    // },
    // {
    //   id: 1027,
    //   name: 'Ethereum',
    //   symbol: 'ETH',
    //   quote: {
    //     AUD: {
    //       price: 396.36305143484486,
    //       percent_change_7d: -5.48225543,
    //     },
    //   },
    // },
    // {
    //   id: 52,
    //   name: 'XRP',
    //   symbol: 'XRP',
    //   quote: {
    //     AUD: {
    //       price: 0.4117184246698974,
    //       percent_change_7d: -17.57837712,
    //     },
    //   },
    // },
    // {
    //   id: 1831,
    //   name: 'Bitcoin Cash',
    //   symbol: 'BCH',
    //   quote: {
    //     AUD: {
    //       price: 566.7108034948294,
    //       percent_change_7d: -22.0051512,
    //     },
    //   },
    // },
    // {
    //   id: 3602,
    //   name: 'Bitcoin SV',
    //   symbol: 'BSV',
    //   quote: {
    //     AUD: {
    //       price: 432.1476538626304,
    //       percent_change_7d: 18.71525503,
    //     },
    //   },
    // },
  ],
  remoteCrypto: [],
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CRYPTO:
      return Object.assign({}, state, {
          crypto: state.crypto.concat(action.payload.data)
        })
    case "CRYPTO_LOADED": {
      return Object.assign({}, state, {
        remoteCrypto: state.remoteCrypto.concat(action.payload.data)
      })
    }
    default:
      return state
    }
}

export default rootReducer