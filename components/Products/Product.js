import React, { useEffect, useRef } from 'react'
import { View, Text, Image, Animated, TouchableOpacity, StyleSheet } from 'react-native'

export function Product(props) {

  const prodAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel( [
      Animated.spring(prodAnim, {
        toValue: 1,
        delay: 2,
        bounciness: 15,
        useNativeDriver: true,
        speed: 6,
      })
    ]).start()
  }, [])

  return (
    <View style={[
      styles.container,
      {
        marginLeft: props.index % 2 == 0 ? 0 : 23.5,
        marginTop: props.index % 2 == 0 ? (props.index > 0 ? 20 : 50) : (props.index > 1 ? 50 : 80)
      }
    ]}>
      <Animated.View style={[styles.productStarImage, { transform: [{ scale: prodAnim }] }]}>
        <View style={{ flex: 6 }}>
          <Image 
            source={{uri: props.product.image}}
            style={[styles.productImage, { transform: [{rotate: '-32deg'}] }]}/>
        </View>
        <View style={styles.rateLike}>
          <View style={styles.rate}>
            <Image 
              source={{uri: 'https://tinyurl.com/4hvm67p8'}}
              style={styles.rateStar}/>
            <Text style={styles.rateScore}>4.5</Text>
          </View>
          <TouchableOpacity style={styles.addWishlistBtn}>
            <Image 
              source={{uri: 'https://tinyurl.com/2p8c4cuc'}}
              style={styles.addWishlistIc}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.namePrice}>
        <Text style={styles.name}>{props.product.productName}</Text>
        <Text style={styles.price}>{props.product.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 240
  },
  productStarImage: {
    flex: 3,
    backgroundColor: '#EEEEEE',
    borderRadius: 25
  },
  productImage: {
    width: 170,
    height: 80,
    marginLeft: -14,
    marginTop: 7
  },
  rateLike: {
    flex: 3, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  rate: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  rateStar: {
    width: 17,
    height: 17
  },
  rateScore: {
    fontFamily: 'Montserrat-Bold',
    marginStart: 10
  },
  addWishlistBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 11,
    paddingHorizontal: 12,
    elevation: 7
  },
  addWishlistIc: {
    width: 16,
    height: 16
  },
  namePrice: {
    flex: 1, 
    alignItems: 'center'
  },
  name: {
    marginTop: 14,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold'
  },
  price: {
    marginTop: 6,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  }
})