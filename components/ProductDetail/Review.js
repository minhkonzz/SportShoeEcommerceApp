import React from 'react';
import { View, Image, Text,useWindowDimensions } from 'react-native'

const Review = () => {
  const { height, width } = useWindowDimensions() 
    return (
      <View style={{
        flexDirection: 'row',
        marginVertical: 16
      }}>
        <Image style={{
          width: width < height ? 40 : 60,
          height: width < height ? 40 : 60,
          borderRadius: 100
        }} source={{ uri: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/238596540_1224566681390021_1944068077931728533_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8sRZUKFAQ28AX9KZRF6&_nc_ht=scontent.fhan3-5.fna&oh=03_AVIlbrjfRig0x4qcH3dbdMg1rjjPAxzgtnys1v-NoIw_0A&oe=62BC5C0F'}}/>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              fontFamily: 'Montserrat-Bold',
              color: '#5F5E5E',
              fontSize: width < height ? 13 : 15,
              marginLeft: 15,
              paddingBottom: 10,
            }}>Thành Bii</Text>
            <View style={{
              flexDirection: 'row',
              width: 85,
              justifyContent: 'space-between'
            }}>
              <Image style={{ width: 13, height: 13 }} source={{uri: 'https://tinyurl.com/4kpjmc97'}}/>
              <Image style={{ width: 13, height: 13 }} source={{uri: 'https://tinyurl.com/4kpjmc97'}}/>
              <Image style={{ width: 13, height: 13 }} source={{uri: 'https://tinyurl.com/4kpjmc97'}}/>
              <Image style={{ width: 13, height: 13 }} source={{uri: 'https://tinyurl.com/mr4dva9w'}}/>
              <Image style={{ width: 13, height: 13 }} source={{uri: 'https://tinyurl.com/4dr9nep6'}}/>
            </View>
          </View>
          <Text style={{
            fontSize: width < height ? 11 : 12,
            fontFamily: 'Montserrat-Medium',
            color: '#5F5E5E',
            marginLeft: 15,
            paddingBottom: 10,
            width: width / (width < height ? 1.4 : 1.26),
            lineHeight: 22
          }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: 10,
            color: '#5F5E5E',
            marginLeft: 15
          }}>18.5.2022</Text>
        </View>
      </View>
    )
}

export { Review }