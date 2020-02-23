import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
// import { getDataFromAPI } from '../redux/actions'
import CryptoCard from './CryptoCard'

class CryptoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          circulating_supply: 18230537,
          total_supply: 18230537,
          quote: {
            AUD: {
              price: 14568.89264157718,
              volume_24h: 60893778823.04279,
              market_cap: 265598736351.30054,
            },
          },
        },
        {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          circulating_supply: 109799694.374,
          total_supply: 109799694.374,
          quote: {
            AUD: {
              price: 396.36305143484486,
              volume_24h: 30437072498.435917,
              market_cap: 43520541908.69201,
            },
          },
        },
        {
          id: 52,
          name: 'XRP',
          symbol: 'XRP',
          circulating_supply: 43749413421,
          total_supply: 99991077044,
          quote: {
            AUD: {
              price: 0.4117184246698974,
              volume_24h: 3821292249.7768674,
              market_cap: 18012439573.926186,
            },
          },
        },
        {
          id: 1831,
          name: 'Bitcoin Cash',
          symbol: 'BCH',
          circulating_supply: 18291750,
          total_supply: 18291750,
          quote: {
            AUD: {
              price: 566.7108034948294,
              volume_24h: 6528902008.986556,
              market_cap: 10366132339.826546,
            },
          },
        },
        {
          id: 3602,
          name: 'Bitcoin SV',
          symbol: 'BSV',
          circulating_supply: 18288889.5819233,
          total_supply: 18288889.5819233,
          quote: {
            AUD: {
              price: 432.1476538626304,
              volume_24h: 3314671269.7481284,
              market_cap: 7903500724.580858,
            },
          },
        },
      ],
    }
  }
  componentDidMount() {
    // this.props.getDataFromAPI()
  }

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>Crypto</Text>
          {this.showCard()}
        </ScrollView>
      </SafeAreaView>
    );
  }

  showCard() {
    return this.state.data.map((coin) => {
      return (
        <CryptoCard name={coin.name} />
      )
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginHorizontal: 20,
    backgroundColor: 'lightgreen',
  },
  text: {
    textAlign: 'center',
    fontSize: 42,
    color: 'white',
    fontFamily: 'AmericanTypewriter-Bold',
    letterSpacing: 5,
  },
});

// function mapStateToProps(state) {
//   return {
//     crypto: state.crypto
//   }
// }

// export default connect(mapStateToProps, { getDataFromAPI })(CryptoPage)

export default CryptoPage
