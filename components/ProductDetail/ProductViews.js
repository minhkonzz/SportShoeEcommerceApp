import React from 'react'
import { View, Text, Image, Pressable, useWindowDimensions } from 'react-native'
import Swiper from 'react-native-swiper'

const productImages = [
  'http://surl.li/bumdd',
  'http://surl.li/bumdd',
  'http://surl.li/bumdd'
]

const ProductViews = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      height: height / (width < height ? 1.8 : 1.1),
      position: 'relative'
    }}>
      <View style={{
        width: width < height ? '72%' : '60%',
        height: width < height ? '70%' : '95%',
        backgroundColor: '#5f5e5e',
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 500, 
        position: 'absolute'
      }}/>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height / (width < height ? 10 : 4.5),
        paddingLeft: width / 20
      }}>
        <Pressable>
          <Image 
            source={{uri: 'https://tinyurl.com/3u6e3wej'}}
            style={{
              width: 15,
              height: 15
            }}/>
        </Pressable>
        <View style={{ 
          alignItems: 'center',
          marginLeft: width / 15,
          marginTop: height / 40
        }}>
          <Image 
            source={{uri: 'https://tinyurl.com/4c9pm9kr'}}
            style={{
              width: width < height ? 45 : 55,
              height: width < height ? 45 : 55
            }}/>
          <Text style={{
            fontSize: width < height ? 11 : 14,
            fontFamily: 'Montserrat-Medium',
            color: '#fcfcfc'
          }}>Adidas</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          backgroundColor: 'white',
          paddingVertical: height / (width < height ? 115 : 40),
          paddingHorizontal: width / 35
        }}>
          <Image 
            source={{uri: 'https://tinyurl.com/dvdmxecx'}}
            style={{
              width: width < height ? 20 : 26,
              height: width < height ? 20 : 26
            }}/>
          <Text style={{
            paddingVertical: width < height ? 1 : 5,
            paddingHorizontal: width < height ? 6 : 11,
            backgroundColor: 'red',
            borderRadius: width < height ? 10 : 30,
            marginLeft: width < height ? 10 : 12,
            color: 'white'
          }}>2</Text>
        </View>
      </View>
      <Swiper activeDotColor='#5f5e5e'>
        {
          productImages.map((source, index) => 
            <View
              key={index}
              style={{
                flex: 1,
                alignItems: 'center'
              }}>
              <Image
                style={[{
                  marginTop: height / (width < height ? 10 : 8),
                  width: width / (width < height ? 1.3 : 2.4),
                  height: height / (width < height ? 5 : 3),
                  borderRadius: 20,
                  position: 'absolute'
                }, { transform: [{ rotate: width < height ? '-30deg' : '-15deg'}] }]} 
                source={{uri: source}}/>
            </View>
          )
        }
      </Swiper>
    </View>
  )
}

export { ProductViews }