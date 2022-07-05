import React from 'react'
import { FlatList } from 'react-native'
import { Header } from '../components/Orders/Header'
import { Product } from '../components/Wishlist/Product'
import LinearGradient from 'react-native-linear-gradient'

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

export default function Wishlist() {

  return (
    <LinearGradient
      style={{ flex: 1, paddingHorizontal: 24 }} 
      colors={['#ffffff', '#ece9e6']}
      useAngle={true}
      angle={145}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            <Header 
              title={TITLE}
              imageRight={HEADER_IMAGE}
              screen={SCREEN_NAME}/>
            { 
              wishlist.map((product, index) => <Product key={index} index={index} product={product}/>) 
            }
          </>
        }/>
    </LinearGradient>
  )
}