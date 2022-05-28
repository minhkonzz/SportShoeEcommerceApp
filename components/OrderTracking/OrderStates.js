import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { OrderState } from './OrderState'

const OrderObject = {
  statesCompleted: 3,
  orderStates: [
    {
      date: '21-09-2021',
      time: '14:25'
    },
    {
      date: '22-09-2021',
      time: '09:15'
    },
    {
      date: '23-09-2021',
      time: '16:30'
    },
    {
      date: '24-09-2021',
      time: '17:25'
    }
  ]
}

const OrderStates = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View>
      <Text style={{
        paddingTop: height / (width < height ? 40 : 20),
        paddingBottom: height / (width < height ? 30 : 14),
        color: '#5F5E5E',
        fontFamily: 'Montserrat-Bold',
        fontSize: width < height ? 15 : 19
      }}>
        Trạng thái đơn hàng
      </Text>
      { OrderObject.orderStates.map((state, index) => 
        <OrderState 
          item={state} 
          index={index} 
          statesCompleted={OrderObject.statesCompleted} 
          statesAmount={OrderObject.orderStates.length} />
        ) 
      }
    </View>
  )
}

export { OrderStates }