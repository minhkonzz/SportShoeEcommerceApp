import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'

const Product = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      width: width < height ? width / 1.15 : '50%',
      height: height / (width < height ? 6.5 : 3.5),
      flexDirection: 'row',
      borderTopColor: '#e4e4e4',
      borderTopWidth: 1,
      borderRightColor: '#e4e4e4',
      borderRightWidth: width < height ? 0 : 1
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279472069_582436386395177_7456601121581054285_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CCdhCG5yT0oAX-J-eSY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLKIjFConGLreJGoujLryqx2DHpRL8AQHGCHmXawYBG-w&oe=62B213C1'}}
          style={{
            width: 130,
            height: 60
          }}/>
      </View>
      <View style={{
        flex: 1, 
        paddingTop: 10
      }}>
        <Text style={{
          fontFamily: 'Montserrat-Bold'
        }}>Ultraboost 2.0</Text>
        <Text style={{
          fontSize: 13,
          lineHeight: 20,
          fontFamily: 'Montserrat-Medium'
        }}>200.000đ</Text>
        <View style={{ 
          flexDirection: 'row',
          alignItems: 'center' 
        }}>
          <Text style={{
            fontSize: 13,
            lineHeight: 20,
            fontFamily: 'Montserrat-Medium'
          }}>Màu</Text>
          <View style={{
            width: 12, 
            height: 12,
            backgroundColor: 'gray',
            borderRadius: 10,
            marginLeft: 5
          }}/>
        </View>
        <Text style={{
          fontSize: 13, 
          lineHeight: 20,
          fontFamily: 'Montserrat-Medium'
        }}>Size: 39</Text>
        <Text style={{
          fontSize: 13, 
          lineHeight: 20,
          fontFamily: 'Montserrat-Medium'
        }}>Số lượng: 2</Text>
      </View>
    </View>
  )
}

export { Product }