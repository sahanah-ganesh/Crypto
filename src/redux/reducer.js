import { CRYPTO_LOADED, ADD_CRYPTO } from "./constants"

const initialState = {
  hardcoded: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      quote: {
        AUD: {
          price: 14492.507143536526,
          percent_change_24h: -1.88176517,
        },
      },
    },
    {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      quote: {
        AUD: {
          price: 392.5743182983321,
          percent_change_24h: -3.10142705,
        },
      },
    },
    {
      id: 52,
      name: 'XRP',
      symbol: 'XRP',
      quote: {
        AUD: {
          price: 0.4030756312336932,
          percent_change_24h: -2.9084828,
        },
      },
    },
    {
      id: 1831,
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      quote: {
        AUD: {
          price: 558.0466670570355,
          percent_change_24h: -5.10256499,
        },
      },
    },
    {
      id: 3602,
      name: 'Bitcoin SV',
      symbol: 'BSV',
      quote: {
        AUD: {
          price: 408.2905764581468,
          percent_change_24h: -6.09283117,
        },
      },
    },
    {
      "id": 2,
      "name": "Litecoin",
      "symbol": "LTC",
      "quote": {
        "AUD": {
          "price": 112.01563553455634,
          "percent_change_24h": -2.83513086,
        }
      }
    },
    {
      "id": 825,
      "name": "Tether",
      "symbol": "USDT",
      "quote": {
        "AUD": {
          "price": 1.5161949096077483,
          "percent_change_24h": 0.12176123,
        }
      }
    },
    {
      "id": 1765,
      "name": "EOS",
      "symbol": "EOS",
      "quote": {
        "AUD": {
          "price": 6.173572749058351,
          "percent_change_24h": -2.81896569,
        }
      }
    },
    {
      "id": 1839,
      "name": "Binance Coin",
      "symbol": "BNB",
      "quote": {
        "AUD": {
          "price": 32.136412534585475,
          "percent_change_24h": 5.85771779,
        }
      }
    },
    {
      "id": 2011,
      "name": "Tezos",
      "symbol": "XTZ",
      "quote": {
        "AUD": {
          "price": 4.5178408433852475,
          "percent_change_24h": -8.86956786,
        }
      }
    }
  ],
  crypto: [],
  remoteCrypto: [],
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case CRYPTO_LOADED: {
      return Object.assign({}, state, {
        remoteCrypto: state.remoteCrypto.concat(action.payload.data)
      })
    }
    case ADD_CRYPTO: {
      return Object.assign({}, state, {
        crypto: state.crypto.concat(action.payload)
      })
    }
    default:
      return state
    }
}

export default rootReducer