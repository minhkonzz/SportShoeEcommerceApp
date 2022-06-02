import React, { useRef } from 'react'
import { View, Text, Image, Animated, useWindowDimensions } from 'react-native'

const Header = props => {
  const fadeOutText = useRef(new Animated.Value(0)).current;
  const avartarAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.parallel( [
      Animated.timing(fadeOutText, {
        toValue: 1,
        delay: 2,
        useNativeDriver: true,
        duration: 1000
      }),
      Animated.spring(avartarAnim, {
        toValue: 1,
        bounciness: 20,
        useNativeDriver: true,
        speed: 8,
      })
    ]).start()
  }, [])
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
          source={{uri: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/278020062_538049024718497_5018203892695914340_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6NP0GMfk-soAX-hSrAX&_nc_ht=scontent.fhan15-1.fna&oh=03_AVIL4AEnGM4L4YlwrJI_R_QdR9HaUrRxJvjBYt34z_H_QQ&oe=62BB411C'}}
          style={{
            width: 90,
            height: 13,
          }}/>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Animated.Text style={{
          fontSize: width < height ? 18 : 22,
          fontFamily: 'Montserrat-Bold',
          opacity: fadeOutText
        }}>{props.title}</Animated.Text>
        <Animated.Image 
          source={{uri: props.imageRight}}
          style={{
            width: width < height ? (props.screen == 'Products' ? 25 : 45) : (props.screen == 'Products' ? 28 : 55), 
            height: width < height ? (props.screen == 'Products' ? 25 : 45) : (props.screen == 'Products' ? 28 : 55),
            borderRadius: props.screen == 'Products' ? 0 : (width < height ? 25 : 30),
            transform: [{ scale: avartarAnim}]
          }}/>
      </View>
    </View>
  )
}

export { Header }