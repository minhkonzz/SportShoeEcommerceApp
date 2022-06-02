import React, { useRef } from 'react'
import { View, Text, Image, Animated, useWindowDimensions } from 'react-native'

const Header = () => {
  const fadeOutText = useRef(new Animated.Value(0)).current;
  const avartarAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
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
  console.log('Animated Active')
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      paddingHorizontal: width/(width < height ? 15 : 20),
      height:height/ (width < height ? 6.5 : 2.8),
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    }}>
      <View style={{
        width: width < height ? '48%' : '34%',
        height: width < height ? '52%' : '57%',
        flexDirection: 'row'
      }}> 
        <Animated.Image 
          source={{uri: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/238596540_1224566681390021_1944068077931728533_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8sRZUKFAQ28AX9KZRF6&_nc_ht=scontent.fhan3-5.fna&oh=03_AVIlbrjfRig0x4qcH3dbdMg1rjjPAxzgtnys1v-NoIw_0A&oe=62BC5C0F'}}
          style={{
            width: '35%',
            height: '100%',
            borderRadius: 100,
            transform: [{scale: avartarAnim }]
          }}/>
        <View style={{
          marginLeft: '8%',
          paddingTop: '4%'
        }}>
          <Animated.Text style={{
            fontSize: width < height ? 13 : 19
          }}>Xin chào</Animated.Text>
          <Animated.Text style={{
            fontSize: width < height ? 14 : 21,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
            marginTop: '5%'
          }}>Minh Phạm</Animated.Text>
        </View>
      </View>
      <Image 
        source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/278072861_5028306833885280_3297818520680467533_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=VEIhRanRPUMAX9bdZSw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIKwveCW72wmR7fHg4KS0V_GSkKnF5ELp784YEkucDzqw&oe=62B106D8'}}
        style={{
          width: width < height ? 26 : 40,
          height: width < height ? 26 : 40
        }}/>
    </View>
  )
}

export { Header }