import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'

const BasicInfo = props => {
  console.log(props.infoAmount)
  const { height, width } = useWindowDimensions()
  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 16
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={[{
            width: 12,
            height: 12,
            backgroundColor: '#5f5e5e'
          }, { transform: [ {rotate: '-45deg'} ] }]}/>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 12
          }}>
            <Image 
              source={{uri: props.info.icon}}
              style={{
                width: 18,
                height: 18
              }}/>
            <Text style={{
              fontSize: 12,
              fontFamily: 'Montserrat-Medium',
              marginLeft: 5
            }}>{props.info.title}</Text>
          </View>
        </View>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 12
        }}>20-09-2022</Text>
      </View>
      {
        props.index == props.infoAmount - 1 ? 
        <View /> :
        <View style={{
          width: 2,
          height: 25,
          backgroundColor: '#5f5e5e',
          marginLeft: 5
        }}/>
      }
    </View>
  )
}

export { BasicInfo }