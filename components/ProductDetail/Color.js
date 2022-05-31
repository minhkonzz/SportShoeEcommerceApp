import React from 'react'
import { View, useWindowDimensions } from 'react-native'

const colors = ['white', 'gray', 'black']

const Colors = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      marginLeft: 8, 
      flexDirection: 'row'
    }}>
      { colors.map((color, index) => 
        <View style={{
          marginLeft: width / 50, 
          width: width < height ? 42 : 50, 
          height: width < height ? 42 : 50, 
          borderRadius: 30, 
          backgroundColor: color, 
          elevation: 5 
        }}/> ) 
      }
    </View>
  )
}

export { Colors }