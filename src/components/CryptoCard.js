import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CryptoCard = ({name}) => {
  return (
    <View style={styles.cardBox}>
      <Text style={styles.cardTitle}>
        {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
  },
  cardTitle: {
    fontSize: 10
  }
})

export default CryptoCard