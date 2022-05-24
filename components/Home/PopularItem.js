import React from 'react'
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const PopularItem = ({item}) => {
  const { height, width } = useWindowDimensions()
  return (
      <View style={{
        width: width/( width < height ? 1.16 : 1.115),
        height: width < height ? height / 3.2 : height * 1.08,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: height/( width < height ? 20 : 5)
      }}>
        <View style={{
          flex: 4,
          flexDirection: 'row',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}>
          <Image 
            source={{uri: 'http://surl.li/bulxp'}}
            style={{
              width: width/( width < height ? 13 : 18),
              height: height/( width < height ? 25 : 10),
              marginTop: 18,
              marginLeft: 20
            }}/>
          <Image 
            source={{uri: item.image}}
            style={[{
              width: width / 1.2,
              height: height/( width < height ? 4.5 : 1.4),
              marginLeft: -45,
              marginTop: -14
            }, { transform: [ {rotate: '-15deg'} ] }]}/>
        </View>
        <View style={{
          flex: 2,
          paddingTop: width < height ? 0 : height / 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: width/(width < height ? 35 : 26),
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{
              fontSize: width < height ? 20 : 30,
              fontWeight: 'bold'
            }}>{item.productName}</Text>
            <Text style={{
              fontSize: width < height ? 12 : 20
            }}>{item.price}</Text>
          </View>
          <TouchableOpacity style={{
            width: width/(width < height ? 7.2 : 8.5),
            height: height/(width < height ? 14 : 4.72),
            borderRadius: width < height ? 18 : 22
          }}>
            <LinearGradient
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: width < height ? 18 : 25
              }} 
              colors={['#7f8c8d', '#000000']}
              useAngle={true}
              angle={145}>
              <Image 
                source={{uri: 'http://surl.li/burbu'}}
                style={{
                  width: width < height ? '44%' : '50%',
                  height: width < height ? '46%' : '52%'
                }}/>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export { PopularItem }