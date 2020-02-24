import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const CryptoSearch = () => {
  const [value, onChangeText] = React.useState('')
  return (
    <TextInput
      style={styles.cryptoInput}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  cryptoInput: {
    height: 50,
    borderColor: 'darkgreen',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: 'darkgreen'
  }
})

export default CryptoSearch