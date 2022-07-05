import React, { useEffect, useRef } from 'react'
import { View, Image, Animated, StyleSheet } from 'react-native'

export function Header(props) {

  const fadeOutText = useRef(new Animated.Value(0)).current;
  const avartarAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel( [
      Animated.timing(fadeOutText, {
        toValue: 1,
        delay: 2,
        useNativeDriver: true,
        duration: 1000
      }),
      Animated.spring(avartarAnim, {
        toValue: 1,
        bounciness: 20,
        useNativeDriver: true,
        speed: 8,
      })
    ]).start()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logoShopContainer}>
        <Image 
          source={{uri: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/278020062_538049024718497_5018203892695914340_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qAKXNXYfutIAX-GGxu5&_nc_ht=scontent.fhan3-2.fna&oh=03_AVKu75sCmlHmDEx3Q-S89-VN9ZkjsG4_ZpJU16aSnu-XCg&oe=62E6C29C'}}
          style={styles.logoShop}/>
      </View>
      <View style={styles.titleAvatar}>
        <Animated.Text style={[styles.title, { opacity: fadeOutText }]}>{props.title}</Animated.Text>
        <Animated.Image 
          source={{uri: props.imageRight}}
          style={[styles.imageRight, { transform: [{ scale: avartarAnim }] }]}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    marginBottom: 10
  },
  logoShopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoShop: {
    width: 90,
    height: 13
  },
  titleAvatar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  imageRight: {
    width: 45, 
    height: 45,
    borderRadius: 50
  }
})