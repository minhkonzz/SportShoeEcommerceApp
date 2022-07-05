import React, { useEffect, useRef } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'

const status = [
  'Đã tiếp nhận',
  'Đang đóng gói',
  'Đang vận chuyển',
  'Đã giao hàng'
]

export function OrderState({item, index, statesCompleted, statesAmount}) {
  
  const slidefromLeft = useRef(new Animated.Value(-500)).current;
  const slidefromRight = useRef(new Animated.Value(500)).current;

  useEffect(() => {
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
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <Animated.View style={[styles.dateTime, { transform: [{ translateX: slidefromLeft }] }]}>
          <Text style={[styles.textMedium, { fontSize: 11 }]}>
            { index < statesCompleted ? item.date : '' }
          </Text>
          <Text style={[styles.textMedium, { fontSize: 18 }]}>
            { index < statesCompleted ? item.time : '' }
          </Text>
        </Animated.View>
      </View>
      <Animated.View style={{ flex: 1, alignItems: 'center' }}>
        <View style={[styles.decor, { backgroundColor: index < statesCompleted ? '#5F5E5E' : '#E4E4E4' }]}/>
        { index !== statesAmount-1 && <View style={[styles.decorEdge, { backgroundColor:  index < statesCompleted-1 ? '#5F5E5E' : '#E4E4E4'}]}/> }
      </Animated.View>
      <Animated.View style={[styles.detail, { transform: [{ translateX: slidefromRight}] }]}>
        <View style={styles.stateIc}>
        </View>
        <Text style={[styles.textMedium, { fontSize: 12, marginTop: '3%' }]}>{status[index]}</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 95,
    flexDirection: 'row'
  },
  dateTime: {
    width: '85%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  textMedium: {
    fontFamily: 'Montserrat-Medium', 
    color: '#5f5e5e'
  },
  decor: {  
    width: 16,
    height: 16,
    borderRadius: 8
  },
  decorEdge: {
    width: 4,
    height: '100%'
  },
  detail: {
    flex: 7,
    paddingLeft: '4%'
  },
  stateIc: {
    width: '16%',
    height: '32%',
    backgroundColor: '#5F5E5E',
    borderRadius: 6, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})