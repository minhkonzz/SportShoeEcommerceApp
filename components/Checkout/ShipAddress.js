import React, {useRef} from 'react'
import { View, Image, Text, Animated, TouchableOpacity, useWindowDimensions } from 'react-native'

const ShipAddress = () => {
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
      width: width / (width < height ? 1.15 : 1.1),
      backgroundColor: 'white', 
      padding: 12, 
      justifyContent: 'space-between', 
      borderRadius: 10,
      marginTop: height / (width < height ? 30 : 20),
      elevation: 5,
      transform: [{ scale: bounceAnim }]
    }}>
      <View>
        <View>
          <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Image 
                source={{uri: 'https://tinyurl.com/2p8j35ys'}}
                style={{
                  width: 20,
                  height: 20
                }}/>
              <Text style={{ 
                fontFamily: 'Montserrat-Bold',
                marginLeft: 10 
              }}>Địa chỉ giao hàng</Text>
            </View>
            <TouchableOpacity>
              <Image 
                source={{uri: 'https://tinyurl.com/ms9dy8j9'}}
                style={{
                  width: 16,
                  height: 16
                }}/>
            </TouchableOpacity>
          </View>
          <View style={{
            width: width / 1.5,
            paddingLeft: 30,
            paddingVertical: 10
          }}>
            <Text style={{
              fontSize: 13,
              fontFamily: 'Montserrat-Medium', 
              lineHeight: 22 
            }}>Số 94 ngõ 73 Nguyễn Lương Bằng Đống Đa Hà Nội</Text>
          </View>
        </View>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5F5E5E',
          paddingVertical: 16,
          borderRadius: 10,
          marginTop: height / (width < height ? 50 : 25)
        }}>
          <Text style={{
            fontSize: 13,
            fontFamily: 'Montserrat-Bold', 
            color: 'white' 
          }}>Thêm ghi chú</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export { ShipAddress }