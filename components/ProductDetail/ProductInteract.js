import React from 'react'
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const ProductOption = props => {
  const { height, width } = useWindowDimensions()
  return (
    <TouchableOpacity style={{
      width: width < height ? 52 : 60, 
      height: width < height ? 52 : 60,
      borderRadius: 30,
      borderWidth: 1, 
      borderColor: '#d1d1d1',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image 
        source={{uri: props.icon}}
        style={{
          width: width < height ? 20 : 26, 
          height: width < height ? 20 : 26
        }}/>
    </TouchableOpacity>
  )
}

const ProductInteract = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: height / (width < height ? 8 : 4),
      paddingHorizontal: width / (width < height ? 16 : 20)
    }}>
      <View style={{
        width: width < height ? '32%' : '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <ProductOption icon={'https://tinyurl.com/yckt5343'}/>
        <ProductOption icon={'https://tinyurl.com/3e6v5zjx'}/>
      </View>
      <TouchableOpacity style={{
        width: width / (width < height ? 2.1 : 3),
        height: height / (width < height ? 13 : 6)
      }}>
        <LinearGradient
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
          }} 
          colors={['gray', '#000000']}
          useAngle={true}
          angle={177}>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: width < height ? 14 : 16,
            color: '#fcfcfc'
          }}>Thêm giỏ hàng</Text>
          <Image 
            source={{uri: 'https://tinyurl.com/yeyrf4af'}}
            style={{
              width: width < height ? 22 : 30,
              height: width < height ? 22 : 30,
              marginLeft: width / 40
            }}/>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export { ProductInteract }