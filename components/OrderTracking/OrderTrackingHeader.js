import React from 'react'
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'

const OrderTrackingHeader = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      height: height / (width < height ? 12 : 5),  
      paddingTop: height / (width < height ? 25 : 14)
    }}>
      <TouchableOpacity style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: -height / (width < height ? 40 : 25)
      }}>
        <Image 
          source={{uri: 'https://tinyurl.com/3u6e3wej'}}
          style={{
            width: 15, 
            height: 15
          }}/>
      </TouchableOpacity>
      <Text style={{
        color: '#5f5e5e',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center'
      }}>Order Tracking</Text>
    </View>
  )
}

export { OrderTrackingHeader }