import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'

export function Review() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/238596540_1224566681390021_1944068077931728533_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8sRZUKFAQ28AX9KZRF6&_nc_ht=scontent.fhan3-5.fna&oh=03_AVIlbrjfRig0x4qcH3dbdMg1rjjPAxzgtnys1v-NoIw_0A&oe=62BC5C0F'}}/>
      <View style={{ marginStart: 15 }}>
        <View style={styles.horizontal}>
          <Text style={[styles.text, styles.horizontal, { fontFamily: 'Montserrat-Bold', fontSize: 13 }]}>Thành Bii</Text>
          <View style={[styles.horizontal, { width: 85 }]}>
            <Image style={styles.star} source={{uri: 'https://tinyurl.com/4kpjmc97'}}/>
            <Image style={styles.star} source={{uri: 'https://tinyurl.com/4kpjmc97'}}/>
            <Image style={styles.star} source={{uri: 'https://tinyurl.com/4kpjmc97'}}/>
            <Image style={styles.star} source={{uri: 'https://tinyurl.com/mr4dva9w'}}/>
            <Image style={styles.star} source={{uri: 'https://tinyurl.com/4dr9nep6'}}/>
          </View>
        </View>
        <Text style={[styles.text, { lineHeight: 22 }]}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
        <Text style={styles.text}>18.5.2022</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    color: '#5F5E5E',
    paddingBottom: 10
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  star: { width: 13, height: 13 }
})