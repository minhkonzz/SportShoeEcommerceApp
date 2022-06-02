import React, {useRef} from 'react'
import { View, Text, Animated, Image, useWindowDimensions } from 'react-native'
import { Product } from './Product'

const Products = () => {
  const { height, width } = useWindowDimensions()
  const bounceAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.spring(
      bounceAnim, {
        toValue: 1,
        delay: 2,
        bounciness: 15,
        useNativeDriver: true,
        speed: 6,
      }
    ).start()
  }, [])
  return (
    <Animated.View style={{
      marginTop: height / (width < height ? 25 : 12),
      width: width / (width < height ? 1.15 : 1.1),
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 5,
      transform: [{ scale: bounceAnim}]
    }}>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 13,
        alignItems: 'center',
        paddingLeft: 13
      }}>
        <Image 
          source={{uri: 'https://tinyurl.com/mr338f4b'}}
          style={{
            width: 26, 
            height: 26
          }}/>
        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 14, 
          marginLeft: 10 
        }}>3 sản phẩm</Text>
      </View>
      <View style={{
        flexDirection: width < height ? 'column' : 'row',
        flexWrap: 'wrap'
      }}>
        <Product />
        <Product />
        <Product />
      </View>
    </Animated.View>
  )
}

export  { Products }