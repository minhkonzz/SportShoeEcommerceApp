import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Sizes } from './Size'
import { Colors } from './Color'
import { Reviews } from './Reviews'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function ProductDesc() {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={styles.section}>
        <Ionicons name='star' size={22} color='yellow'/>
        <Text style={[styles.title, { fontSize: 19, marginStart: 10 }]}>4.5</Text>
      </View>
      <View style={[styles.section, { justifyContent: 'space-between' }]}>
        <Text style={[{ fontFamily: 'Montserrat-Bold', fontSize: 21 }]}>Grand Court 2.0</Text>
        <Text style={[styles.title, { fontSize: 20 }]}>450.000đ</Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: 12 }]}>Tình trạng</Text>
        <Text style={[styles.title, styles.stateDetail, { fontSize: 10 }]}>còn hàng</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Size</Text>
        <Sizes />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Màu</Text>
        <Colors />
      </View>
      <Reviews />
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  title: {
    fontFamily: 'Montserrat-Medium', 
    fontSize: 15
  },
  stateDetail: {
    marginStart: 8,
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 20
  }
})