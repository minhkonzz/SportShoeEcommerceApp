import React, { useEffect, useRef } from 'react'
import { View, Text, Animated, Image, TouchableOpacity, StyleSheet } from 'react-native'

export function Header() {

  const bounce = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bounce, {
      toValue: 1,
      delay: 2,
      bounciness: 15,
      useNativeDriver: true,
      speed: 6,
    }).start()
  }, [])

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: bounce }] }]}>
      <Image source={{uri: 'https://tinyurl.com/2p899ms8'}} style={styles.avatar}/>
      <View style={{ marginRight: 100 }}>
        <Text style={styles.text}>Minh Pham</Text>
        <Text style={[styles.text, { fontSize: 9.5 }]}>New customer</Text>
        <View style={styles.reviewCount}>
          <Image source={{uri: 'https://tinyurl.com/5yws4ah6'}} style={styles.reviewCountStar}/>
          <Text style={[styles.text, { fontSize: 10, marginStart: 5 }]}>1 đánh giá</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutBtn}>
        <Image source={{uri: 'https://tinyurl.com/25efyyza'}} style={styles.logoutIc}/>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: '#5F5E5E',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 10
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    color: '#fcfcfc',
    lineHeight: 22
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fcfcfc',
    borderWidth: 2.5
  },
  reviewCount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewCountStar: {
    width: 15,
    height: 15
  },
  logoutBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutIc: {
    width: 18,
    height: 18
  }
})