import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { getDataFromAPI } from '../redux/actions'

class CryptoPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getDataFromAPI()
  }

  render() {
    return (
      <View>
        <Text>Hi</Text>
        <Text>Hi</Text>
        <Text>Hi</Text>
        <Text>Hi</Text>
        <Text>Hi</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { getDataFromAPI })(CryptoPage)