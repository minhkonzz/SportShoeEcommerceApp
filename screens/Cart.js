import React, { useEffect, useRef } from 'react'
import { View, Text, FlatList, Animated, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '../components/Orders/Header'
import { Product } from '../components/Cart/Product'
// import { useNavigation } from '@react-navigation/native'

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

export default function Cart() {
  
  const fadeText = useRef(new Animated.Value(0)).current;
   
  useEffect(() => {
    Animated.parallel([
      Animated.timing(
        fadeText,{
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
    ]).start()
  }, [])

  return (
    <LinearGradient
      style={{ flex: 1, paddingHorizontal: 24 }} 
      colors={['#ffffff', '#ece9e6']}
      useAngle={true}
      angle={145}>
      <View style={{ flex: 5 }}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={[]}
          renderItem={null}
          ListHeaderComponent={
            <>
              <Header
                title={'Giỏ hàng của tôi'}
                imageRight={'https://tinyurl.com/5drx39ej'} 
                screen={SCREEN_NAME}/>
              <Animated.Text style={[styles.textBold, { opacity: fadeText }]}>4 sản phẩm</Animated.Text>
              {
                cart.map((product, index) => <Product key={index} product={product}/>)
              }
            </>
          }/>
      </View>
      <View style={styles.checkout}>
        <View style={styles.total}>
          <Text style={styles.textBold}>Tổng tiền</Text>
          <Text style={styles.textBold}>1.200.000đ</Text>
        </View>
        <TouchableOpacity 
          style={styles.checkoutBtn}>
          <LinearGradient
            style={styles.gradientColor} 
            colors={['gray', '#000000']}
            useAngle={true}
            angle={177}>
            <Text style={[styles.textBold, { color: 'white' }]}>Chuyển đến checkout</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  checkout: {
    flex: 1,
    borderTopColor: '#F2F2F2',
    borderTopWidth: 0.5,
    justifyContent: 'space-between',
    paddingVertical: 18
  },
  textBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkoutBtn: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradientColor: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14
  }
})