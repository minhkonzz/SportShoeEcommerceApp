import React from 'react'
import { View, Text, Image, FlatList, useWindowDimensions } from 'react-native'

const OrderProduct = ({item}) => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      height: height / (width < height ? 7.5 : 2.3),
      backgroundColor: 'white',
      borderRadius: 10, 
      flexDirection: 'row',
      marginBottom: height / (width < height ? 60 : 20),
      marginVertical: 5,
      elevation: 3
    }}>
      <View style={{
        flex: 4, 
        backgroundColor: '#F5F5F5',
        borderBottomEndRadius: 300, 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10
      }}>
        <Image 
          style={{
            width: '60%',
            height: '60%',
            margin: '8%'
          }}
          source={{uri: 'http://surl.li/bumdd'}}/>
      </View>
      <View style={{
        flex: 2, 
        borderTopEndRadius: 10, 
        borderBottomEndRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingEnd: '3%',
        paddingVertical: '1%'
      }}>
        <Text style={{
          fontSize: width < height ? 12 : 18,
          color: '#5F5E5E'
        }}>quantity</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{
            fontSize: width < height ? 14 : 20,
            color: '#5F5E5E'
          }}>Product name</Text>
          <Text style={{
            fontSize: width < height ? 12 : 18,
            color: '#9A9A9A'
          }}>Product price</Text>
        </View>
      </View>
    </View>
  )
}

export { OrderProduct }