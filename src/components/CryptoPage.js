import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, SafeAreaView, StyleSheet, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import { getDataFromAPI } from '../redux/actions'
import CryptoCard from './CryptoCard'

class CryptoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log("state", this.props.crypto)
  }
  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.appTitle}>Crypto</Text>
          <View style={styles.refresh}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.refreshCrypto()}>
              <Image
                style={styles.image}
                source={require('../assets/reload.png')}
              />
            </TouchableOpacity>
          </View>
          {this.showCard()}
        </ScrollView>
      </SafeAreaView>
    );
  }

  showCard() {
    // let data
    // this.props.remoteCrypto.length > 1 ? data = this.props.crypto : data = this.props.remoteCrypto
    // return data.map((coin) => {
    return this.props.crypto.map((coin) => {
      return (
        <CryptoCard
          name={coin.name}
          symbol={coin.symbol}
          price={Number.parseFloat(coin.quote.AUD.price).toFixed(2)}
          change={Number.parseFloat(coin.quote.AUD.percent_change_7d).toFixed(2)}
          color={coin.quote.AUD.percent_change_7d < 0 ? "red" : "green"}
        />
      );
    })
  }

  refreshCrypto() {
    if (this.state.count === 0) {
      this.props.getDataFromAPI()
      .then(this.setState({ count: 1 }))
    }
      return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginHorizontal: 20,
    backgroundColor: 'whitesmoke',
    height: '100%',
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 42,
    color: 'mediumseagreen',
    fontFamily: 'AmericanTypewriter-Bold',
    letterSpacing: 5,
    paddingBottom: 20,
  },
  refresh: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    paddingBottom: 20,
  },
});

function mapStateToProps(state) {
  return {
    crypto: state.crypto,
    remoteCrypto: state.remoteCrypto
  }
}

export default connect(mapStateToProps, { getDataFromAPI })(CryptoPage)