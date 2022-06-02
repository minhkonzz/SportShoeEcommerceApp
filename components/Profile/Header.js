import React, {useRef} from 'react'
import { View, Text, Animated, Image, TouchableOpacity, useWindowDimensions } from 'react-native'

const Header = () => {
  const { height, width } = useWindowDimensions()
  const bounce = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(bounce, {
      toValue: 1,
      delay: 2,
      bounciness: 15,
      useNativeDriver: true,
      speed: 6,
    }).start()
}, [])
  return (
      <Animated.View style={{
        width: width / (width < height ? 1.2 : 1.15),
        height: height / (width < height ? 5.5 : 2.5),
        backgroundColor: '#5F5E5E',
        borderRadius: width < height ? 12 : 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width / (width < height ? 18 : 16),
        marginBottom: height / (width < height ? 50 : 20),
        transform: [{ scale: bounce}]
      }}>
        <Image 
          source={{uri: 'https://tinyurl.com/2p899ms8'}}
          style={{
            width: width < height ? 80 : 100,
            height: width < height ? 80 : 100,
            borderRadius: 50,
            borderColor: '#fcfcfc',
            borderWidth: width < height ? 2.5 : 3
          }}/>
        <View style={{ marginRight: width / (width < height ? 6 : 3) }}>
          <Text style={{
            fontSize: width < height ? 15 : 22,
            fontFamily: 'Montserrat-Bold',
            color: '#fcfcfc',
            lineHeight: width < height ? 22 : 30
          }}>Minh Pham</Text>
          <Text style={{
            fontSize: width < height ? 9.5 : 13,
            fontFamily: 'Montserrat-Medium',
            color: '#fcfcfc',
            lineHeight: width < height ? 22 : 30
          }}>New customer</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image 
              source={{uri: 'https://tinyurl.com/5yws4ah6'}}
              style={{
                width: width < height ? 15 : 18,
                height: width < height ? 15 : 18
              }}/>
            <Text style={{
              marginLeft: 5,
              fontSize: width < height ? 9.5 : 13,
              fontFamily: 'Montserrat-Medium',
              color: '#fcfcfc'
            }}>1 đánh giá</Text>
          </View>
        </View>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image 
            source={{uri: 'https://tinyurl.com/25efyyza'}}
            style={{
              width: width < height ? 18 : 24,
              height: width < height ? 18 : 24
            }}/>
        </TouchableOpacity>
      </Animated.View>
  )
}

export { Header }