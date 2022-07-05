import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function NewCollectionItem({item, index}) {
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <View style={styles.productBrand}>
          <Text style={[styles.textMedium, { fontSize: 14 }]}>{item.brand}</Text>
          <Ionicons name='heart-outline' size={24} color='#5f5e5e'/>
        </View>
        <View style={styles.productName}>
          <Text style={[styles.textBold, { fontSize: 20 }]}>{item.productName}</Text>
          <Ionicons name='arrow-forward-outline' size={32} color='#5f5e5e'/>
        </View>
      </View>
      <View style={styles.productImage}>
        <LinearGradient
          style={styles.linearColor} 
          colors={['#7f8c8d', '#000000']}
          useAngle={true}
          angle={145}/>
        <Image 
          source={{uri: item.image}}
          style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 350,
    borderRadius: 25,
    backgroundColor: 'white',
    marginLeft: 24
  },
  productInfo: {
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 18
  },
  productBrand: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productName: {
    flex: 4
  },
  productImage: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  textMedium: {
    fontFamily: 'Montserrat-Medium'
  },
  textBold: {
    fontFamily: 'Montserrat-Bold'
  },
  linearColor: {
    width: '73%',
    height: '75%',
    borderTopLeftRadius: 250,
    borderBottomRightRadius: 25,
    position: 'absolute'
  },
  image: {
    width: 250,
    height: 130,
    marginBottom: '32%',
    marginRight: '-4%',
    transform: [ {rotate: '-25deg'} ]
  }
})