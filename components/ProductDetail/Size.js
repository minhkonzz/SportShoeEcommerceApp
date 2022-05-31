import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'

const sizes = [38, 39, 40, 41]

const Sizes = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      marginLeft: 8, 
      flexDirection: 'row'
    }}>
      { sizes.map((size, index) => 
          <Text 
            key={index} 
            style={{ 
              paddingVertical: height / (width < height ? 60 : 20),
              paddingHorizontal: width / 30,
              borderRadius: 6, 
              backgroundColor: 'white', 
              marginLeft: width / 38,
              fontSize: 15,
              fontFamily: 'Montserrat-Medium'
            }}>{size}
          </Text>
        ) 
      }
    </View>
  )
}

export { Sizes }