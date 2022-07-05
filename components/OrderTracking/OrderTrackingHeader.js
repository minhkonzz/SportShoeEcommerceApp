import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function OrderTrackingHeader() {
  return (
    <View style={styles.container}>
      <Ionicons name='chevron-back' size={28} />
      <Text style={styles.title}>Order Tracking</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center'
  },
  title: {
    color: '#5f5e5e',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center'
  }
})