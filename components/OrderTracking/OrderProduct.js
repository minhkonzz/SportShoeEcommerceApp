import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export function OrderProduct({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: 'http://surl.li/bumdd'}}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.qty}>quantity</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.name}>Product name</Text>
          <Text style={styles.price}>Product price</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10, 
    flexDirection: 'row',
    marginVertical: 10
  },
  imageContainer: {
    flex: 4, 
    backgroundColor: '#F5F5F5',
    borderBottomEndRadius: 300, 
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10
  },
  image: {
    width: '60%',
    height: '60%',
    margin: '8%'
  },
  info: {
    flex: 2, 
    borderTopEndRadius: 10, 
    borderBottomEndRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingEnd: '3%',
    paddingVertical: '1%'
  },
  qty: {
    fontSize: 12,
    color: '#5F5E5E'
  },
  name: {
    fontSize: 14,
    color: '#5F5E5E'
  },
  price: {
    fontSize: 12,
    color: '#9A9A9A'
  }
})