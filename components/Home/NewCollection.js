import React from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import { NewCollectionItem } from './NewCollectionItem'

const data = [
  {
    brand: 'Adidas',
    productName: 'UltraBoost 2.0', 
    image: 'http://surl.li/bumdd'
  },
  {
    brand: 'Puma',
    productName: 'Sneaker V0', 
    image: 'http://surl.li/bumdd'
  },
  {
    brand: 'Nike',
    productName: 'Summer Nik', 
    image: 'http://surl.li/bumdd'
  }
]

const NewCollection = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ marginTop: width/( width < height ?  28 :  10) }}>
      <Text style={{
        marginLeft: width/( width < height ? 15 : 20), 
        fontSize: width < height ? 20 : 28,
        fontWeight: 'bold'
      }}>Bộ sưu tập mới</Text>
      <FlatList
        contentContainerStyle={{
          height: width < height ? height / 1.88 : height * 1.18,  
          alignItems: 'center'
        }}
        key={({item, index}) => index}
        showsHorizontalScrollIndicator={false} 
        horizontal={true}
        data={data}
        renderItem={({item, index}) => <NewCollectionItem item={item} index={index}/>}/>
    </View>
  )
}

export { NewCollection }