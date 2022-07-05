import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
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

export function OrderStates() {

  const fadeText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeText,{
        toValue: 1,
        delay: 1,
        useNativeDriver: true,
        duration: 1000,
      }
    ).start()
  }, [])

  return (
    <>
      <Animated.Text style={{
        marginVertical: 30,
        color: '#5F5E5E',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        opacity: fadeText
      }}>
        Trạng thái đơn hàng
      </Animated.Text>
      { OrderObject.orderStates.map((state, index) => 
        <OrderState 
          item={state} 
          index={index} 
          statesCompleted={OrderObject.statesCompleted} 
          statesAmount={OrderObject.orderStates.length} />
        ) 
      }
    </>
  )
}