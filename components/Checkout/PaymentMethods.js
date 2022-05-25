import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'

const paymentMethods = [
  'Bank Transfer', 
  'Credit Card',
  'Cash on delivery'
]

const PaymentMethod = props => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      width: width / (width < height ? 1.15 : 1.1),
      height: height / (width < height ? 12: 8),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#e4e4e4',
      borderBottomWidth: 1
    }}>
      <Text style={{
        fontFamily: 'Montserrat-Medium'
      }}>{props.paymentMethod}</Text>
      <View style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2
      }}/>
    </View> 
  )
}

const PaymentMethods = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ marginTop: height / (width < height ? 30 : 18) }}>
      <Text style={{
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        paddingVertical: width < height ? 14 : 16
      }}>Choose payment method</Text>
      { paymentMethods.map((paymentMethod, index) => <PaymentMethod key={index} paymentMethod={paymentMethod}/>) }
    </View>
  )
}

export { PaymentMethods }