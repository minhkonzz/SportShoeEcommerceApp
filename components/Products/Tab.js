import React, { useEffect, useRef } from 'react'
import { View, Image, Text, Animated, StyleSheet } from 'react-native'

const NIKE_TAB_INDEX = 1

export function Tab(props) {

  const tabAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel( [
      Animated.spring(tabAnim, {
        toValue: 1,
        delay: 2,
        bounciness: 20,
        useNativeDriver: true,
        speed: 6,
      })
    ]).start()  
  }, [])

  return (
    <View>
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: tabAnim }] }]}>
        <Image 
          source={{uri: props.brand.logo}}
          style={[styles.logo, { marginLeft: props.index == NIKE_TAB_INDEX ? 5 : 0 }]}/>
      </Animated.View>
      <Text style={styles.name}>{props.brand.brandName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
  },
  name: {
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
    fontSize: 12,
    alignSelf: 'center'
  }
})