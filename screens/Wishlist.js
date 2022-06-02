import React from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native'
import { Header } from '../components/Orders/Header'
import { Product } from '../components/Wishlist/Product'

const TITLE = 'Sản phẩm yêu thích'
const SCREEN_NAME = 'Whislist'
const HEADER_IMAGE = 'https://tinyurl.com/5drx39ej'

const wishlist = [
  {
    productImage: 'http://surl.li/bumdd',
    productName: 'Ultraboost 2.0',
    colors: ['gray', 'black'],
    sizes: [39, 40, 41, 42],
    rate: 4.5, 
    usersAvatar: [
      'https://tinyurl.com/5drx39ej',
      'https://tinyurl.com/5drx39ej',
      'https://tinyurl.com/5drx39ej'
    ]
  },
  {
    productImage: 'http://surl.li/bumdd',
    productName: 'Ultraboost 2.0',
    colors: ['gray', 'black'],
    sizes: [37, 43],
    rate: 4.0, 
    usersAvatar: [
      'https://tinyurl.com/5drx39ej',
      'https://tinyurl.com/5drx39ej',
      'https://tinyurl.com/5drx39ej'
    ]
  },
  {
    productImage: 'http://surl.li/bumdd',
    productName: 'Ultraboost 2.0',
    colors: ['gray', 'black'],
    sizes: [38, 40],
    rate: 3.5, 
    usersAvatar: [
      'https://tinyurl.com/5drx39ej',
      'https://tinyurl.com/5drx39ej',
      'https://tinyurl.com/5drx39ej'
    ]
  }
]

const Wishlist = () => {
  console.log('render Wishlist screen')
  const { height, width } = useWindowDimensions()
  return (
    <FlatList
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#FCFCFC'
      }} 
      showsVerticalScrollIndicator={false}
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{ paddingHorizontal: width / 14, paddingBottom: height / 40 }}>
          <Header 
            title={TITLE}
            imageRight={HEADER_IMAGE}
            screen={SCREEN_NAME}/>
          { wishlist.map((product, index) => 
              <Product key={index} index={index} product={product}/>
          ) }
        </View>
      }/>
  )
}

export { Wishlist }