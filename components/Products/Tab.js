import React from 'react'
import { View, Image, Text, useWindowDimensions } from 'react-native'

const NIKE_TAB_INDEX = 1

const Tab = props => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      width: width / 5.8,
      alignItems: 'center'
    }}>
      <View style={{
        width: 70,
        height: 70,
        backgroundColor: '#EEEEEE',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: props.brand.logo}}
          style={{
            width: 38,
            height: 38,
            marginLeft: props.index == NIKE_TAB_INDEX ? 5 : 0 
          }}/>
      </View>
      <Text style={{
        fontFamily: 'Montserrat-Medium',
        marginTop: 10,
        fontSize: 13
      }}>{props.brand.brandName}</Text>
    </View>
  )
}

export { Tab }