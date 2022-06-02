import React, { useRef } from 'react'
import { View, Image, Text, Animated, useWindowDimensions } from 'react-native'

const NIKE_TAB_INDEX = 1

const Tab = props => {
  const { height, width } = useWindowDimensions()
  const tabAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.parallel( [
    Animated.spring(tabAnim, {
      toValue: 1,
      delay: 2,
      bounciness: 20,
      useNativeDriver: true,
      speed: 6,
    })
  ]).start()
}, [])
  return (
    <View style={{
      width: width / 5.8,
      alignItems: 'center'
    }}>
      <Animated.View style={{
        width: 70,
        height: 70,
        backgroundColor: '#EEEEEE',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scale: tabAnim }]
        }}>
        <Image 
          source={{uri: props.brand.logo}}
          style={{
            width: 38,
            height: 38,
            marginLeft: props.index == NIKE_TAB_INDEX ? 5 : 0 
          }}/>
      </Animated.View>
      <Text style={{
        fontFamily: 'Montserrat-Medium',
        marginTop: 10,
        fontSize: 13
      }}>{props.brand.brandName}</Text>
    </View>
  )
}

export { Tab }