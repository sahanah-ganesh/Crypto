import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CryptoCard = ({key, name, symbol, price, change, color}) => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.symbolTitleBox}>
        <View style={styles.symbolBox}>
          <Text style={styles.symbolText}>{symbol}</Text>
        </View>
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>${price}</Text>
        <Text style={color === "red" ? styles.changeTextRed : styles.changeText}>{color === "red" ? null : "+"}{change}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 1,
    display: 'flex',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbolTitleBox: {
    flexDirection: 'row',
  },
  symbolBox: {
    backgroundColor: 'lightgreen',
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
  },
  symbolText: {
    padding: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 20,
    margin: 10,
  },
  priceBox: {
    flexDirection: 'column',
  },
  priceText: {
    fontSize: 30,
    letterSpacing: 1,
  },
  changeText: {
    textAlign: 'right',
    color: 'green',
  },
  changeTextRed: {
    textAlign: 'right',
    color: 'red',
  },
});

export default CryptoCard