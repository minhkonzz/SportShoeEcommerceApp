import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function PopularItem({item}) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.productImage}
        source={{uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/439cd187859a4c52bbd6ae0b00f6bf75_9366/Giay_Forum_Low_trang_GZ0813_01_standard.jpg'}}>
        <Ionicons 
          style={{ margin: 12 }}
          name='heart-outline' 
          size={28} color='#5f5e5e'/>
      </ImageBackground>
      <View style={styles.namePrice}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.name}>{item.productName}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addCartBtn}>
          <LinearGradient
            style={styles.gradientColor} 
            colors={['#7f8c8d', '#000000']}
            useAngle={true}
            angle={145}>
            <Ionicons name='cart' size={28} color='white'/>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 265,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 30,
    overflow: 'hidden'
  },
  productImage: {
    flex: 4,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  namePrice: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginBottom: 5
  },
  price: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13
  },
  addCartBtn: {
    width: 55,
    height: 55,
    borderRadius: 40
  },
  gradientColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18
  }
})