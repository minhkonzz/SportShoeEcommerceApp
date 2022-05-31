import React from 'react'
import { View, Text, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '../components/Orders/Header'
import { Product } from '../components/Cart/Product'

const SCREEN_NAME = 'Cart'
const cart = [
  {
    productName: 'Boostrap 4.0',
    price: 450000,
    color: 'gray',
    size: 40
  },
  {
    productName: 'NMD 3.0',
    price: 550000,
    color: 'black',
    size: 38
  },
  {
    productName: 'Sneaker VM',
    price: 350000,
    color: 'white',
    size: 39
  },
  {
    productName: 'Ultraboost 2.0',
    price: 650000,
    color: '#5F5E5E',
    size: 38
  }
]

const Cart = () => {
  console.log('render Cart screen')
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flex: 1, 
      backgroundColor: '#FCFCFC'
    }}>
      <View style={{
        flex: 5, 
        paddingHorizontal: width / 14
      }}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={[]}
          renderItem={null}
          ListHeaderComponent={
            <View>
              <Header
                title={'Giỏ hàng của tôi'}
                imageRight={'https://tinyurl.com/5drx39ej'} 
                screen={SCREEN_NAME}/>
              <Text style={{ 
                fontFamily: 'Montserrat-Bold'
              }}>4 sản phẩm</Text>
              {
                cart.map((product, index) => <Product key={index} product={product}/>)
              }
            </View>
          }/>
      </View>
      <View style={{
        flex: 1,
        flexDirection: width < height ? 'column' : 'row',
        borderTopColor: '#F2F2F2',
        borderTopWidth: 0.5,
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: width / 14
      }}>
        <View style={{
          flexDirection: width < height ? 'row' : 'column',
          justifyContent: 'space-between'
        }}>
          <Text style={[
            tpFontStyle,
            { fontSize: width < height ? 14 : 17 }
          ]}>Tổng tiền</Text>
          <Text style={[
            tpFontStyle,
            { fontSize: width < height ? 14 : 17 }
          ]}>1.200.000đ</Text>
        </View>
        <TouchableOpacity 
          style={{
            height: height / (width < height ? 11 : 6.5),
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <LinearGradient
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width < height ? 12 : 14,
              paddingHorizontal: width < height ? 0 : width / 30
            }} 
            colors={['gray', '#000000']}
            useAngle={true}
            angle={177}>
            <Text style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 15,
              color: 'white'
            }}>Chuyển đến checkout</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const tpFontStyle = {
  fontFamily: 'Montserrat-Bold',
  fontSize: 15
}

export { Cart }