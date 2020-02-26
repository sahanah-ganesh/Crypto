import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

const CryptoAdd = () => {
  const [value, onChangeText] = React.useState('')
  return (
    <View>
      <Text style={styles.cryptoSearchText}>Add crypto:</Text>
      <TextInput
        style={styles.cryptoInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cryptoSearchText: {
    fontSize: 12,
    color: 'darkgreen',
    paddingLeft: 20,
    paddingBottom: 5,
  },
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

export default CryptoAdd