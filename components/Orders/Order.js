import React from 'react'
import { View, Image, Text, useWindowDimensions, TouchableOpacity, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { OrderDesc } from './OrderDesc'

const WAIT_RECEIVE = 0
const RECEIVED = 1
const BUNDLING = 2
const SHIPPING = 3
const ORDER_COMPLETED = 4
const CANCELED = 5

const Order = ({index, order, orders}) => {
  const { height, width } = useWindowDimensions()
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
    <View style={{ marginBottom: height / (width < height ? 70 : 50)}}>
      {
        orders[index - (index > 0 ? 1 : 0)].month != order.month || index == 0 ?
        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 16,
          marginTop: height / (width < height ? 45 : 30)
        }}>{`Tháng ${order.month}`}</Text> : null 
      }
      <View style={{
        width: width / 1.16,
        height: height / (width < height ? 3.45 : 1.6),
        backgroundColor: '#F8F8F8',
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginTop: width < height ? 15 : 18
      }}>
        <View style={{
          flex: 2, 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <LinearGradient
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: width < height ? 18 : 25,
                padding: width < height ? 7 : 10,
                marginRight: width < height ? 12 : 14
              }} 
              colors={['#7f8c8d', '#000000']}
              useAngle={true}
              angle={145}>
              <Image 
                source={{uri: 'https://tinyurl.com/49unfs78'}}
                style={{
                  width: width < height ? 16 : 20,
                  height: width < height ? 16 : 20
                }}/>
            </LinearGradient>
            <Text style={{ 
              color: '#535353',
              fontFamily: 'Montserrat-Bold',
              fontSize: width < height ? 14 : 17 
            }}>{`Mã đơn: ${order.id}`}</Text>
          </View>
          <Pressable>
            <Image 
              source={{uri: 'https://tinyurl.com/4zh7fxtm'}}
              style={{
                width: width < height ? 22 : 24,
                height: 14
              }}/>
          </Pressable>
        </View>
        <View style={{
          flex: 4,
          justifyContent: 'space-around',
          paddingVertical: 3
        }}>
          { order.descs.map((desc, index) => <OrderDesc key={index} index={index} desc={desc}/>) }
        </View>
        <View style={{
          flex: 3, 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View style={{
            width: '75%',
            height: '80%',
            backgroundColor: getStateColors().backgroundColor,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ 
              color: getStateColors().color,
              fontFamily: 'Montserrat-Bold',
              fontSize: width < height ? 14 : 17
            }}>{order.state.stateTitle}</Text>
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: 21,
              paddingVertical: 19,
              borderRadius: 15,
              backgroundColor: 'white',
              elevation: 10
            }}
            activeOpacity={0.8}>
            <Image 
              source={{uri: 'https://tinyurl.com/eh44227w'}}
              style={{
                width: 18, 
                height: 18
              }}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export { Order } 