import React from 'react'
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'

const Product = props => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      width: width / 1.16,
      height: height / (width < height ? 6.5 : 2.8),
      backgroundColor: 'white',
      borderTopLeftRadius: 100,
      borderBottomLeftRadius: 100,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      flexDirection: 'row',
      elevation: 7,
      marginVertical: height / (width < height ? 70 : 25)
    }}>
      <View style={{
        flex: width < height ? 6 : 3,
        backgroundColor: '#f2f2f2',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: 'http://surl.li/bumdd'}}
          style={{
            width: width < height ? 90 : 110,
            height: width < height ? 50 : 60
          }}/>
      </View>
      <View style={{
        flex: 8,
        justifyContent: 'space-around',
        paddingVertical: width < height ? 10 : 14,
        paddingHorizontal: 20
      }}>
        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: width < height ? 13 : 18
        }}>{props.product.productName}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            fontSize: width < height ? 11 : 14,
            fontFamily: 'Montserrat-Medium'
          }}>Màu</Text>
          <View style={{
            flexDirection: 'row',
            position: 'relative',
            alignItems: 'center',
            marginLeft: 4
          }}>
            {
              props.product.colors.map((color, index) => 
                <View style={{
                  width: width < height ? 13 : 20,
                  height: width < height ? 13 : 20,
                  borderRadius: 30,
                  backgroundColor: color,
                  position: 'absolute',
                  borderColor: 'white',
                  borderWidth: width < height ? 1 : 2,
                  marginLeft: index == 0 ? 8 : 0
                }}/>
              )
            }
          </View>
        </View>
        <Text style={{
          fontSize: width < height ? 11 : 14,
          fontFamily: 'Montserrat-Medium'
        }}>{`Size ${props.product.sizes[0]}-${props.product.sizes[props.product.sizes.length-1]}`}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image 
              source={{uri: 'https://tinyurl.com/5yws4ah6'}}
              style={{
                width: width < height ? 15 : 20,
                height: width < height ? 15 : 20
              }}/>
            <Text style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: width < height ? 12 : 14,
              marginLeft: 5
            }}>{props.product.rate}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            position: 'relative'
          }}>
            {
              props.product.usersAvatar.map((avatar, index) => 
                <Image 
                  source={{uri: avatar}}
                  style={{
                    width: width < height ? 21 : 25,
                    height: width < height ? 21 : 25,
                    borderRadius: 30,
                    borderWidth: 2, 
                    borderColor: 'white',
                    position: 'absolute',
                    marginLeft: index >= 2 ? 0 : width < height ? (index == 0 ? 25 : 13) : (index == 0 ? 29 : 15)
                }}/>
              )
            }
            <Text style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: width < height ? 10 : 12,
              marginLeft: width < height ? 50 : 58
            }}>+8</Text>
          </View>
        </View>
      </View>
      <View style={{
        flex: width < height ? 2 : 1, 
        alignItems: 'center',
        paddingTop: 6
      }}>
        <TouchableOpacity style={{
          width: width / (width < height ? 17 : 26),
          height: height / (width < height ? 32 : 15),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff6363',
          borderRadius: width < height ? 10 : 12
        }}>
          <Text style={{ color: '#fcfcfc' }}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { Product }