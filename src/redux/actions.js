export function getDataFromAPI() {
  return function(dispatch) {
  return fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9ba9f007-3ee7-4d15-9643-bbd0e70225b3&start=1&limit=100&convert=CAD')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: 'CRYPTO_LOADED', payload: json})
    })
  }
}


