import { CRYPTO_KEY } from 'react-native-dotenv'

export function getDataFromAPI() {
  return function(dispatch) {
  return fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${CRYPTO_KEY}&limit=100&convert=CAD`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: 'CRYPTO_LOADED', payload: json})
    })
  }
}