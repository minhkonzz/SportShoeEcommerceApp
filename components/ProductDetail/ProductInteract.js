import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

function ProductOption(props) {
  return (
    <TouchableOpacity style={styles.optionBtn}>
      <Ionicons name={props.icon} size={26} color='#5f5e5e'/>
    </TouchableOpacity>
  )
}

export function ProductInteract() {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <ProductOption icon='heart-outline'/>
        <ProductOption icon='bookmark-outline'/>
      </View>
      <TouchableOpacity style={styles.addCartBtn}>
        <LinearGradient
          style={styles.gradientColor} 
          colors={['gray', '#000000']}
          useAngle={true}
          angle={177}>
          <Text style={styles.addCartBtnText}>Thêm giỏ hàng</Text>
          <Ionicons style={{ marginStart: 12 }} name='cart' size={25} color='white'/>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 24
  },
  options: {
    width: '32%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  addCartBtn: {
    width: 200,
    height: 60
  },
  addCartBtnText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#fcfcfc'
  },
  gradientColor: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  optionBtn: {
    width: 52, 
    height: 52,
    borderRadius: 30,
    borderWidth: 1, 
    borderColor: '#d1d1d1',
    justifyContent: 'center',
    alignItems: 'center'
  }
})