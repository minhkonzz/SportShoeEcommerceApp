import React from 'react'
import { View, Text, useWindowDimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'

const banners = [
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/269683113_493180848894707_6196920160964027763_n.png?stp=dst-png_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=gaathkQeJcsAX--MF9m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJCLEB6hcsbC4F5WRLOmZhKVmXpJw251EVbNv7GIFKiAA&oe=62B2BBFA',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/281113451_1672687613104026_6642058812064168344_n.png?stp=dst-png_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=w8iiXtdXfi0AX-AlELT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKS0xrTwf2iuTsYDAjN7c7rqKg4ItPOgktcCasJQe67tA&oe=62B2D17C',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/279565194_1152238515555581_5866126495733247233_n.png?stp=dst-png_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=svQD3AlbHD0AX8apPSX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKOzfuonsL0F_PTBD_57txhs8XCj-xuCWmW04Ou6-IWBQ&oe=62B16B84',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/280687383_316230474004456_4157868091739302951_n.png?stp=dst-png_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=PxoDZ_4BeAYAX-dcFHH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKLQMccjuadQmmH0kK92TAq43vRR9OcFHFYjB_o6vFHNw&oe=62B3FCF3'
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