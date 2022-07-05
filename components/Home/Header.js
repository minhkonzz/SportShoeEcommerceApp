import React, { useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function Header() {

  const fadeOutText = useRef(new Animated.Value(0)).current
  const avatarAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel( [
      Animated.timing(fadeOutText, {
        toValue: 1,
        delay: 2,
        useNativeDriver: true,
        duration: 1000
      }),
      Animated.spring(avatarAnim, {
        toValue: 1,
        bounciness: 20,
        useNativeDriver: true,
        speed: 8,
      })
    ]).start()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.nameAvatar}>
        <Animated.Image 
          source={{uri: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/238596540_1224566681390021_1944068077931728533_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8sRZUKFAQ28AX9KZRF6&_nc_ht=scontent.fhan3-5.fna&oh=03_AVIlbrjfRig0x4qcH3dbdMg1rjjPAxzgtnys1v-NoIw_0A&oe=62BC5C0F'}}
          style={[styles.avatar, { transform: [{ scale: avatarAnim }]}]} />
        <View style={styles.name}>
          <Text style={[styles.text, styles.greetText]}>Xin chào</Text>
          <Text style={[styles.text, styles.userName]}>Minh Phạm</Text>
        </View>
      </View>
      <Ionicons name='notifications' size={26} color={'#5F5E5E'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  text: { lineHeight: 24 },
  nameAvatar: { flexDirection: 'row' },
  avatar: {
    width: 57, 
    height: 57,
    borderRadius: 40
  },
  name: {
    justifyContent: 'center',
    marginStart: 14
  },
  greetText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11
  },
  userName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13
  }
})