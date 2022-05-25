import React from 'react'
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'

const Product = props => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      width: width / 2.5,
      height: height / (width < height ? 3.4 : 1.2),
      marginLeft: props.index % 2 == 0 ? 0 : 23.5,
      marginTop: props.index % 2 == 0 ? (props.index > 0 ? 20 : 50) : (props.index > 1 ? 50 : 80),
    }}>
      <View style={{
        flex: 3,
        backgroundColor: '#EEEEEE',
        borderRadius: 25
      }}>
        <View style={{ flex: 5 }}>
          <Image 
            source={{uri: props.product.image}}
            style={[
              {
                width: width < height ? 168 : 300,
                height: width < height ? 70 : 140,
                marginLeft: width < height ? -16 : -8,
                marginTop: width < height ? 8 : 4
              },
              { transform: [ {rotate: width < height ? '-38deg' : '-22deg'} ] }
            ]}/>
        </View>
        <View style={{
          flex: 2, 
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10
        }}>
          <View style={{
            width: width < height ? '52%' : '42%',
            height: width < height ? '72%' : '68%',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 50,
            justifyContent: 'space-around',
            paddingHorizontal: width < height ? 10 : 16,
            alignItems: 'center',
            marginTop: width < height ? 3 : 14
          }}>
            <Image 
              source={{uri: 'https://tinyurl.com/4hvm67p8'}}
              style={{
                width: width < height ? 17 : 26,
                height: width < height ? 17 : 26
              }}/>
            <Text style={{ 
              fontFamily: 'Montserrat-Bold',
              fontSize: width < height ? 14 : 23 
            }}>4.5</Text>
          </View>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: width < height ? 15 : 22,
            paddingVertical: width < height ? 11 : 21,
            paddingHorizontal: width < height ? 12 : 20,
            alignSelf: 'flex-start',
            elevation: width < height ? 8 : 12
          }}>
            <Image 
              source={{uri: 'https://tinyurl.com/2p8c4cuc'}}
              style={{
                width: width < height ? 16 : 22,
                height: width < height ? 16 : 22
              }}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        flex: 1, 
        alignItems: 'center'
      }}>
        <Text style={{
          marginTop: width < height ? 14 : 20,
          fontSize: width < height ? 16 : 26,
          fontFamily: 'Montserrat-Bold'
        }}>{props.product.productName}</Text>
        <Text style={{
          marginTop: width < height ? 4 : 6,
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 13 : 17
        }}>{props.product.price}</Text>
      </View>
    </View>
  )
}

export { Product }