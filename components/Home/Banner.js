import React, { useRef } from 'react'
import { Image, FlatList, StyleSheet, Animated, Dimensions } from 'react-native'

const banners = [
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/269683113_493180848894707_6196920160964027763_n.png?stp=dst-png_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=gaathkQeJcsAX--MF9m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJCLEB6hcsbC4F5WRLOmZhKVmXpJw251EVbNv7GIFKiAA&oe=62B2BBFA',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/281113451_1672687613104026_6642058812064168344_n.png?stp=dst-png_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=w8iiXtdXfi0AX-AlELT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKS0xrTwf2iuTsYDAjN7c7rqKg4ItPOgktcCasJQe67tA&oe=62B2D17C',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/279565194_1152238515555581_5866126495733247233_n.png?stp=dst-png_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=svQD3AlbHD0AX8apPSX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKOzfuonsL0F_PTBD_57txhs8XCj-xuCWmW04Ou6-IWBQ&oe=62B16B84',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/280687383_316230474004456_4157868091739302951_n.png?stp=dst-png_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=PxoDZ_4BeAYAX-dcFHH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKLQMccjuadQmmH0kK92TAq43vRR9OcFHFYjB_o6vFHNw&oe=62B3FCF3'
]

const width = Dimensions.get('window').width

export function Banner() {

  const fadefromLeft = useRef(new Animated.Value(-400)).current;

  React.useEffect(() => {
    Animated.timing(
      fadefromLeft, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }
    ).start()
  }, [])

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          transform: [{ translateX: fadefromLeft }]
        }
      ]}>
      <FlatList 
        contentContainerStyle={{ borderRadius: 20 }}
        horizontal
        data={banners}
        key={(item, index) => index.toString()}
        snapToInterval={width - 38}
        decelerationRate={50}
        renderItem={({item, index}) => <Image style={styles.image} source={{uri: item}}/>}/>
    </Animated.View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  image: {
    width: width - 48, 
    height: '100%',
    borderRadius: 10,
    marginEnd: 10
  }
})