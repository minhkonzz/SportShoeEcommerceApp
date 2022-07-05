import React, { useEffect, useRef } from 'react'
import { View, Text, TextInput, Animated, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function InfoInput(props) {

  const bounce = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(300, [
      Animated.spring(
        bounce,{
          toValue: 1,
          delay: 2,
          bounciness: 15,
          useNativeDriver: true,
          speed: 6,
        }
      ),
    ]).start()
  }, [])

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: bounce }] }]}>
      <View style={styles.inputTitle}>
        <Ionicons name={props.info.image} size={20} color={'#5f5e5e'}/>
        <Text style={styles.inputTitleText}>{props.info.title}</Text>
      </View>
      <TextInput style={styles.userInput}/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: 25 },
  inputTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputTitleIc: {
    width: 20,
    height: 20
  },
  inputTitleText: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium'
  },
  userInput: {
    height: 58,
    borderRadius: 8,
    marginTop: 14,
    backgroundColor: '#EEEEEE',
    paddingLeft: 14,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#5f5e5e'
  }
})