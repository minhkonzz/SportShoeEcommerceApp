import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Header } from '../components/Profile/Header'
import { InfoInput } from '../components/Profile/InfoInput'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

const infos = [
  {
    image: 'person',
    title: 'Username',
    value: 'Minh Pham'
  },
  {
    image: 'mail',
    title: 'Email',
    value: 'minhphm37@gmail.com'
  },
  {
    image: 'call',
    title: 'Phone',
    value: '0967105498'
  },
  {
    image: 'location',
    title: 'Default Address',
    value: 'Số 94 Nguyễn Lương Bằng, Đống Đa, Hà Nội'
  }
]

export default function Profile() {
  return (
    <LinearGradient
      style={styles.container} 
      colors={['#ffffff', '#ece9e6']}
      useAngle={true}
      angle={145}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            <Header />
            { infos.map((info, index) => <InfoInput key={index} info={info}/>) }
            <View style={styles.cartDirector}>
              <View style={styles.cartTitle}>
                <Text style={styles.title}>Giỏ hàng của tôi</Text>
                <View style={styles.cartAmount}>
                  <Text style={{ color: '#fcfcfc' }}>2</Text>
                </View>
              </View>
              <Ionicons name='chevron-forward' size={24} color={'#5f5e5e'}/>
            </View>
          </>
        }/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingVertical: 30,
    paddingHorizontal: 24
  },
  cartDirector: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 13,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20
  },
  cartTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold'
  },
  cartAmount: {
    paddingHorizontal:  9,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  }
})