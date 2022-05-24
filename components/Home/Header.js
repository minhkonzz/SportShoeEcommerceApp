import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'

const Header = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      paddingHorizontal: width/(width < height ? 15 : 20),
      height:height/ (width < height ? 6.5 : 2.8),
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    }}>
      <View style={{
        width: width < height ? '48%' : '34%',
        height: width < height ? '52%' : '57%',
        flexDirection: 'row'
      }}> 
        <Image 
          source={{uri: 'http://surl.li/bujbw'}}
          style={{
            width: '35%',
            height: '100%',
            borderRadius: 15
          }}/>
        <View style={{
          marginLeft: '8%',
          paddingTop: '4%'
        }}>
          <Text style={{
            fontSize: width < height ? 13 : 19
          }}>Xin chào</Text>
          <Text style={{
            fontSize: width < height ? 14 : 21,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
            marginTop: '5%'
          }}>Minh Phạm</Text>
        </View>
      </View>
      <Image 
        source={{uri: 'http://surl.li/buiwz'}}
        style={{
          width: width < height ? 26 : 40,
          height: width < height ? 26 : 40
        }}/>
    </View>
  )
}

export { Header }