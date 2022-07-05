import React, { useEffect, useRef } from 'react'
// import { useNavigation } from '@react-navigation/native'
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrderDesc } from './OrderDesc'

const WAIT_RECEIVE = 0
const RECEIVED = 1
const BUNDLING = 2
const SHIPPING = 3
const ORDER_COMPLETED = 4
const CANCELED = 5

export function Order({index, order, orders}) {

  const odsAnim = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.stagger(500, [
      Animated.timing(odsAnim, {
        toValue: 0,
        duration: 1000
      })
    ]).start()
  }, [])

  const getStateColors = () => {
    switch(order.state.stateCode) {
      case CANCELED: 
        return { backgroundColor: '#FEDBDB', color: '#FF5555' }
      case BUNDLING: 
        return { backgroundColor: '#FFE2B6', color: '#FEA929' }
      case ORDER_COMPLETED: 
        return { backgroundColor: '#C2FFA5', color: '#05EF00' }
    }
  }
  return (
    <Animated.View style={[styles.container, { marginStart: odsAnim }]}>
      {
        orders[index - (index > 0 ? 1 : 0)].month != order.month || index == 0 &&
        <Text style={styles.monthTitle}>{`Tháng ${order.month}`}</Text>
      }
      <View style={styles.orderWrapper}>
        <View style={styles.orderID}>
          <LinearGradient
            style={styles.gradientColor} 
            colors={['#7f8c8d', '#000000']}
            useAngle={true}
            angle={145}>
            <Ionicons name='cart' size={20} color='white'/>
          </LinearGradient>
          <Text style={styles.orderIDText}>{`Mã đơn: ${order.id}`}</Text>
        </View>
        <View style={styles.orderDescs}>
          { order.descs.map((desc, index) => <OrderDesc key={index} index={index} desc={desc}/>) }
        </View>
        <View style={styles.orderState}>
          <View style={[styles.orderStateWrapper, { backgroundColor: getStateColors().backgroundColor }]}>
            <Text style={[styles.orderStateText, { color: getStateColors().color }]}>{order.state.stateTitle}</Text>
          </View>
          <TouchableOpacity
            style={styles.goDetailBtn}
            activeOpacity={0.8}>
            <Ionicons name='arrow-forward' size={24} color='#5f5e5e'/>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  orderWrapper: {
    height: 225,
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginTop: 15
  },
  monthTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginTop: 10,
  },
  orderID: {
    flex: 2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  gradientColor: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    padding: 8,
    marginRight: 12
  },
  orderIDText: {
    color: '#5f5e5e',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13
  },
  orderDescs: {
    flex: 4,
    justifyContent: 'space-around',
    paddingVertical: 3
  },
  orderState: {
    flex: 3, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  orderStateWrapper: {
    width: '75%',
    height: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderStateText: { fontFamily: 'Montserrat-Bold' },
  goDetailBtn: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 8
  }
})