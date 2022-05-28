import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { OrderProduct } from './OrderProduct'

const OrderProducts = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View>
      <Text style={{
        fontSize: width < height ? 15 : 19,
        fontFamily: 'Montserrat-Bold',
        color: '#5F5E5E',
        paddingBottom: height / 40
      }}>Sản phẩm mua</Text>
      <OrderProduct />
      <OrderProduct />
    </View>
  )
}

export { OrderProducts }