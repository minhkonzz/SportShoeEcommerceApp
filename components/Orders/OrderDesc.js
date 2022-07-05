import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function OrderDesc(props) {
  return (
    <View style={styles.container}>
      <Ionicons name={props.desc.icon} size={17} color='#5f5e5e'/>
      <Text style={styles.orderDescTitle}>{props.desc.desc}</Text>
      <Text style={styles.orderDescDetail}>{props.desc.descVal}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8
  },
  orderDescTitle: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#9A9A9A'
  },
  orderDescDetail: {
    marginStart: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'flex-end',
    color: '#9A9A9A'
  }
})