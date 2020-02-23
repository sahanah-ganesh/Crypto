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
          quote: {
            AUD: {
              price: 14568.89264157718,
              percent_change_7d: -4.80199241,
            },
          },
        },
        {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          quote: {
            AUD: {
              price: 396.36305143484486,
              percent_change_7d: -5.48225543,
            },
          },
        },
        {
          id: 52,
          name: 'XRP',
          symbol: 'XRP',
          quote: {
            AUD: {
              price: 0.4117184246698974,
              percent_change_7d: -17.57837712,
            },
          },
        },
        {
          id: 1831,
          name: 'Bitcoin Cash',
          symbol: 'BCH',
          quote: {
            AUD: {
              price: 566.7108034948294,
              percent_change_7d: -22.0051512,
            },
          },
        },
        {
          id: 3602,
          name: 'Bitcoin SV',
          symbol: 'BSV',
          quote: {
            AUD: {
              price: 432.1476538626304,
              percent_change_7d: 18.71525503,
            },
          },
        },
      ],
    };
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
        <CryptoCard
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          price={Number.parseFloat(coin.quote.AUD.price).toFixed(2)}
          change={Number.parseFloat(coin.quote.AUD.percent_change_7d).toFixed(2)}
          color={coin.quote.AUD.percent_change_7d < 0 ? "red" : "green"}
        />
      );
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginHorizontal: 20,
    backgroundColor: 'lightgrey',
    height: '100%'
  },
  text: {
    textAlign: 'center',
    fontSize: 42,
    color: 'white',
    fontFamily: 'AmericanTypewriter-Bold',
    letterSpacing: 5,
    paddingBottom: 50,
  },
});

// function mapStateToProps(state) {
//   return {
//     crypto: state.crypto
//   }
// }

// export default connect(mapStateToProps, { getDataFromAPI })(CryptoPage)

export default CryptoPage
