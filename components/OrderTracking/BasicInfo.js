import React, {useRef} from 'react'
import { View, Text, Image, Animated, useWindowDimensions } from 'react-native'

const BasicInfo = props => {
  console.log(props.infoAmount)
  const { height, width } = useWindowDimensions()
  const slidefromRight = useRef(new Animated.Value(500)).current;
  const slidefromLeft = useRef(new Animated.Value(-500)).current;
  React.useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(
        slidefromRight,{
          toValue: 0,
          delay: 1,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
      Animated.timing(
        slidefromLeft,{
          toValue: 0,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
    ]).start()
  }, [])
  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 16
        }}>
        <Animated.View style={{
          flexDirection: 'row',
          alignItems: 'center',
          transform: [{ translateX: slidefromLeft}]
          }}>
          <View style={[{
            width: 12,
            height: 12,
            backgroundColor: '#5f5e5e'
          }, { transform: [ {rotate: '-45deg'} ] }]}/>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 12
          }}>
            <Image 
              source={{uri: props.info.icon}}
              style={{
                width: 18,
                height: 18
              }}/>
            <Text style={{
              fontSize: 12,
              fontFamily: 'Montserrat-Medium',
              marginLeft: 5
            }}>{props.info.title}</Text>
          </View>
        </Animated.View>
        <Animated.Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 12,
          transform: [{ translateX: slidefromRight}]
        }}>20-09-2022</Animated.Text>
      </View>
      {
        props.index == props.infoAmount - 1 ? 
        <View /> :
        <Animated.View style={{
          width: 2,
          height: 25,
          backgroundColor: '#5f5e5e',
          marginLeft: 5,
          transform: [{ translateX: slidefromLeft}]
        }}/>
      }
    </View>
  )
}

export { BasicInfo }