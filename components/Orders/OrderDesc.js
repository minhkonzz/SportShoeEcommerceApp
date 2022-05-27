import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'

const OrderDesc = props => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 8
    }}>
      <Image 
        source={{uri: props.desc.icon}}
        style={{
          width: width < height ? 17 : 19, 
          height: width < height ? 17 : 19
        }}/>
      <Text style={{ 
        marginLeft: width < height ? 10 : 14,
        fontSize: width < height ? 12 : 15,
        fontFamily: 'Montserrat-Medium',
        color: '#9A9A9A'
      }}>{props.desc.desc}</Text>
      <Text style={{ 
        marginLeft: width / (width < height ? 30 : 18),
        fontSize: width < height ? 12 : 15 ,
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'flex-end',
        color: '#9A9A9A'
      }}>{props.desc.descVal}</Text>
    </View>
  )
}

export { OrderDesc }