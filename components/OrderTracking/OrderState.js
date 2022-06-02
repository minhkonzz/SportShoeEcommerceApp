import React, {useRef} from 'react'
import { View, Text, Animated, Image, useWindowDimensions } from 'react-native'

const status = [
  'Đã tiếp nhận',
  'Đang đóng gói',
  'Đang vận chuyển',
  'Đã giao hàng'
]

const OrderState = ({item, index, statesCompleted, statesAmount}) => {
  const { height, width } = useWindowDimensions()
  const slidefromLeft = useRef(new Animated.Value(-500)).current;
  const slidefromRight = useRef(new Animated.Value(500)).current;
  React.useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(
        slidefromRight,{
          toValue: 0,
          delay: 1,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
      Animated.timing(
        slidefromLeft,{
          toValue: 0,
          delay: 1,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
    ]).start()
  }, [])
  return (
    <View style={{
      height: height / (width < height ? 8.25 : 3.9),
      flexDirection: 'row'
    }}>
      <View style={{ flex: 5 }}>
        <Animated.View style={{
          width: '85%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'flex-end',
          transform: [{ translateX: slidefromLeft}]
          }}>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: width < height ? 11 : 14,
            color: '#5F5E5E'
          }}>
            { index < statesCompleted ? item.date : '' }
          </Text>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: width < height ? 18 : 24,
            color: '#5F5E5E'
          }}>
            { index < statesCompleted ? item.time : '' }
          </Text>
        </Animated.View>
      </View>
      <Animated.View style={{ flex: 1, alignItems: 'center' }}>
        <View style={[
          {
            width: 16,
            height: 16,
            borderRadius: 50
          }, 
          {
            backgroundColor: index < statesCompleted ? '#5F5E5E' : '#E4E4E4'
          }
        ]}/>
        <View style={[
          {
            width: 4,
            height: '100%'
          }, 
          {
            backgroundColor: index === statesAmount-1 ? '#FCFCFC' : (index < statesCompleted-1 ? '#5F5E5E' : '#E4E4E4')
          }
        ]}/>
      </Animated.View>
      <Animated.View style={{
        flex: 7,
        paddingLeft: '4%',
        transform: [{ translateX: slidefromRight}]
        }}>
        <View style={{
          width: '16%',
          height: width < height ? '32%' : '45%',
          backgroundColor: '#5F5E5E',
          borderRadius: width < height ? 6 : 8, 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* <Image 
            source={{uri: ''}}
            style={{}}/> */}
        </View>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 11 : 12, 
          color: '#5F5E5E',
          marginTop: '3%'
        }}>{status[index]}</Text>
      </Animated.View>
    </View>
  )
}

export { OrderState }