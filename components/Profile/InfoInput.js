import React, {useRef} from 'react'
import { View, Text, TextInput, Animated, Image, useWindowDimensions } from 'react-native'

const InfoInput = props => {
  const { height, width } = useWindowDimensions()
  const bounce = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.stagger(300, [
      Animated.spring(
        bounce,{
          toValue: 1,
          delay: 2,
          bounciness: 15,
          useNativeDriver: true,
          speed: 6,
        }
      ),
    ]).start()
  }, [])
  return (
      <Animated.View style={{
        marginTop: height / (width < height ? 38 : 14), 
        width: width / (width < height ? 1.2 : 1.15),
        transform: [{ scale: bounce}]
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image 
            source={{uri: props.info.image}}
            style={{
              width: width < height ? 20 : 30,
              height: width < height ? 20 : 30
            }}/>
          <Text style={{
            marginLeft: 10,
            fontSize: width < height ? 12 : 16,
            fontFamily: 'Montserrat-Medium'
          }}>{props.info.title}</Text>
        </View>
        <TextInput style={{
          height: height / (width < height ? 12 : 6),
          borderRadius: 8,
          marginTop: 14,
          backgroundColor: '#EEEEEE',
          paddingLeft: width / (width < height ? 24 : 36),
          fontFamily: 'Montserrat-Bold',
          fontSize: width < height ? 16 : 19,
          color: '#5f5e5e'
        }}/>
      </Animated.View>
  )
}

export { InfoInput }