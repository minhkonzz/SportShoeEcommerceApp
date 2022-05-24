import React from 'react'
import { View, Text, Image, TouchableOpacity ,useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PopularItem } from './PopularItem'

const adidas = [
  {
    productName: 'UltraBoost 2.0',
    price: 550000,
    image: 'http://surl.li/bumdd'
  },
  {
    productName: 'UltraBoost 3.0',
    price: 650000,
    image: 'http://surl.li/bumdd'
  },
  {
    productName: 'UltraBoost 4.0',
    price: 850000,
    image: 'http://surl.li/bumdd'
  }
]

const brands = [
  'http://surl.li/buqjv',
  'http://surl.li/buqjy'
]

const BrandTabs = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flexDirection: 'row',
      marginTop: height/( width < height ? 40 : 18),
      paddingLeft: width/( width < height ? 15 : 20)
    }}>
    {
      brands.map((source, index) => 
        <TouchableOpacity
          key={index}
          style={{
            width: width < height ? 90 : width / 7,
            height: width < height ? 50 : height / 6.5,
            marginLeft: index > 0 ? (width < height ? 15 : width / 32) : 0,
            borderRadius: 10
          }}>
          <LinearGradient
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }} 
            colors={['#7f8c8d', '#000000']}
            useAngle={true}
            angle={150}>
            <Image 
              source={{uri: source}}
              style={{
                width: '42%',
                height: '70%'
              }}/>
          </LinearGradient>
        </TouchableOpacity>)
    }
    </View>
  )
}

const PopularList = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      alignItems: 'center'
    }}>
      { adidas.map((item, index) => <PopularItem key={index} item={item}/>) }
    </View>
  )
}

const Popular = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{
        paddingLeft: width/( width < height ?  15 : 20),
        fontSize: width < height ? 20 : 28,
        fontWeight: 'bold'
      }}>Nổi bật</Text>
      <BrandTabs />
      <PopularList />
    </View>
  )
}

export { Popular }