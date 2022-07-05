import React, { useEffect, useRef } from 'react'
import { Animated, FlatList, StyleSheet } from 'react-native'
import { NewCollectionItem } from './NewCollectionItem'

const data = [
  {
    brand: 'Adidas',
    productName: 'UltraBoost 2.0', 
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
  },
  {
    brand: 'Puma',
    productName: 'Sneaker V0', 
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
  },
  {
    brand: 'Nike',
    productName: 'Summer Nik', 
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279472069_582436386395177_7456601121581054285_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CCdhCG5yT0oAX_Jbzpz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK9BeEEo4B14kPJC7ghA-ar9r9uq-a4pz-4AqV11trJjQ&oe=62B213C1'
  }
]

export function NewCollection() {

  const slidefromRight = useRef(new Animated.Value(400)).current;
  const fadeOutText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(
        slidefromRight,{
          toValue: 0,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
      Animated.timing(
        fadeOutText,{
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }
      ),
    ]).start()
  }, [])

  return (
    <Animated.View style={[
      styles.container,
      { 
        transform: [{ translateX: slidefromRight }] 
      }
     ]}>
      <Animated.Text style={[
        styles.title,
        { 
          opacity: fadeOutText
        }
      ]}>Bộ sưu tập mới</Animated.Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        key={({item, index}) => index}
        showsHorizontalScrollIndicator={false} 
        horizontal={true}
        data={data}
        renderItem={({item, index}) => <NewCollectionItem item={item} index={index}/>}/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  title: {
    marginLeft: 24, 
    fontSize: 20, 
    fontFamily: 'Montserrat-Bold'
  },
  listContainer: {
    height: 420, 
    alignItems: 'center'
  }
})