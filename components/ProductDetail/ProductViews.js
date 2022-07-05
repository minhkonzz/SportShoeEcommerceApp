import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const productImages = [
  'http://surl.li/bumdd',
  'http://surl.li/bumdd',
  'http://surl.li/bumdd'
]

export function ProductViews() {
  return (
    <View style={styles.container}>
      <View style={styles.decor}/>
      <View style={styles.header}>
        <Ionicons name='chevron-back' size={28}/>
        <View style={styles.brand}>
          <Image source={{uri: 'https://tinyurl.com/4c9pm9kr'}} style={styles.brandLogo}/>
          <Text style={styles.brandName}>Adidas</Text>
        </View>
        <View style={styles.toCart}>
          <Ionicons name='cart' size={24}/>
          <Text style={styles.cartAmount}>2</Text>
        </View>
      </View>
      {/* <Swiper activeDotColor='#5f5e5e'>
        {
          productImages.map((source, index) => 
            <View
              key={index}
              style={{
                flex: 1,
                alignItems: 'center'
              }}>
              <Image
                style={[{
                  marginTop: height / (width < height ? 10 : 8),
                  width: width / (width < height ? 1.3 : 2.4),
                  height: height / (width < height ? 5 : 3),
                  borderRadius: 20,
                  position: 'absolute'
                }, { transform: [{ rotate: width < height ? '-30deg' : '-15deg'}] }]} 
                source={{uri: source}}/>
            </View>
          )
        }
      </Swiper> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    position: 'relative'
  }, 
  decor: {
    width: '72%',
    height: '70%',
    backgroundColor: '#5f5e5e',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 500, 
    position: 'absolute'
  }, 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingLeft: 24
  },
  brand: {
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 25
  },
  brandLogo: {
    width: 45,
    height: 45
  },
  brandName: {
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    color: '#fcfcfc'
  },
  toCart: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  cartAmount: {
    paddingVertical: 1,
    paddingHorizontal: 6,
    backgroundColor: 'red',
    borderRadius: 10,
    marginLeft: 10,
    color: 'white'
  }
})