import React from 'react'
import { View, Text, useWindowDimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'

const banners = [
  'http://surl.li/bunlo',
  'http://surl.li/bucat',
  'http://surl.li/bucbv',
  'http://surl.li/bucby'
]

const Banner = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      paddingHorizontal: width/( width < height ?  15 :  20),
    }}>
      <Swiper
        activeDotColor='white'
        containerStyle={{
          marginTop: height / 80,
          height:height/( width < height ? 3.4 : 1) 
        }}>
        {
          banners.map((source, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    position: 'absolute'
                  }} 
                  source={{uri: source}}/>
                <View style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  borderRadius: 20
                }}/>
              </View>
            )
          })
        }
      </Swiper>
    </View>
  )
}

export { Banner }