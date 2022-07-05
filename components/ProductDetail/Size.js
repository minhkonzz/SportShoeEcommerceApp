import React from 'react'
import { View, Text } from 'react-native'

const sizes = [38, 39, 40, 41]

export function Sizes() {
  return (
    <View style={{ marginLeft: 8, flexDirection: 'row' }}>
      { sizes.map((size, index) => 
          <Text 
            key={index} 
            style={{ 
              padding: 13,
              borderRadius: 6, 
              backgroundColor: 'white', 
              marginStart: 12,
              fontSize: 15,
              fontFamily: 'Montserrat-Medium'
            }}>{size}</Text>
        ) 
      }
    </View>
  )
}