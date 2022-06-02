import React, {useRef} from 'react'
import { View,  Animated, useWindowDimensions } from 'react-native'
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
  const fadeText = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
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
    <View>
      <Animated.Text style={{
        paddingTop: height / (width < height ? 40 : 20),
        paddingBottom: height / (width < height ? 30 : 14),
        color: '#5F5E5E',
        fontFamily: 'Montserrat-Bold',
        fontSize: width < height ? 15 : 19,
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
    </View>
  )
}

export { OrderStates }