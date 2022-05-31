import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import { Sizes } from './Size'
import { Colors } from './Color'
import { Reviews } from './Reviews'

const ProductDesc = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ paddingHorizontal: width / (width < height ? 16 : 20) }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: 'https://tinyurl.com/4hvm67p8'}}
          style={{
            width: 22,
            height: 22
          }}/>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 19 : 22,
          marginLeft: width / 36
        }}>4.5</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: height / (width < height ? 100 : 30)
      }}>
        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: width < height ? 21 : 24
        }}>Grand Court 2.0</Text>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 20 : 22
        }}>450.000đ</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height / (width < height ? 150 : 60)
      }}>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 12 : 15
        }}>Tình trạng</Text>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 10 : 14,
          marginLeft: width / 30,
          paddingVertical: width < height ? 5 : 8,
          paddingHorizontal: width < height ? 14 : 18,
          backgroundColor: '#f5f5f5',
          borderRadius: 20
        }}>còn hàng</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height / (width < height ? 50 : 20)
      }}>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 15
        }}>Size</Text>
        <Sizes />
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height / 50
      }}>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 15
        }}>Màu</Text>
        <Colors />
      </View>
      <Reviews />
    </View>
  )
}

export { ProductDesc }