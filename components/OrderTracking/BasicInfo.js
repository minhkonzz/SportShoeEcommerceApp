import React, { useEffect, useRef } from 'react'
import { View, Text, Image, Animated, StyleSheet } from 'react-native'

export function BasicInfo(props) {

  const slidefromRight = useRef(new Animated.Value(500)).current;
  const slidefromLeft = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(
        slidefromRight,{
          toValue: 0,
          delay: 1,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
      Animated.timing(
        slidefromLeft,{
          toValue: 0,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
    ]).start()
  }, [])

  return (
    <View>
      <View style={styles.container}>
        <Animated.View style={[styles.titleContainer, { transform: [{ translateX: slidefromLeft}] }]}>
          <View style={[styles.decor, { transform: [{rotate: '-45deg'}] }]}/>
          <View style={styles.title}>
            <Image 
              source={{uri: props.info.icon}}
              style={{
                width: 18,
                height: 18
              }}/>
            <Text style={[styles.textMedium, { marginStart: 5 }]}>{props.info.title}</Text>
          </View>
        </Animated.View>
        <Animated.Text style={[styles.textMedium, { transform: [{ translateX: slidefromRight }] }]}>20-09-2022</Animated.Text>
      </View>
      {
        props.index !== props.infoAmount - 1 && 
        <Animated.View style={[styles.decorEdge, { transform: [{ translateX: slidefromLeft}] }]}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 16
  },
  textMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  decor: {
    width: 12,
    height: 12,
    backgroundColor: '#5f5e5e'
  },
  decorEdge: {
    width: 2,
    height: 25,
    backgroundColor: '#5f5e5e',
    marginStart: 5
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 12
  }
})