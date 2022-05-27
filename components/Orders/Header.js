import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'

const Header = props => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ 
      height: height / (width < height ? 6 : 2.8),
      // paddingHorizontal: props.screen == 'Cart' ? width / 14 : 0,
      marginBottom: height / (width < height ? 40 : 14)
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: 'https://tinyurl.com/2p9yhu6x'}}
          style={{
            width: 90,
            height: 13
          }}/>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: width < height ? 18 : 22,
          fontFamily: 'Montserrat-Bold'
        }}>{props.title}</Text>
        <Image 
          source={{uri: props.imageRight}}
          style={{
            width: width < height ? (props.screen == 'Products' ? 25 : 45) : (props.screen == 'Products' ? 28 : 55), 
            height: width < height ? (props.screen == 'Products' ? 25 : 45) : (props.screen == 'Products' ? 28 : 55),
            borderRadius: props.screen == 'Products' ? 0 : (width < height ? 25 : 30)
          }}/>
      </View>
    </View>
  )
}

export { Header }