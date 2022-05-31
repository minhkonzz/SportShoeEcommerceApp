import React from 'react'
import { View, Text, Image, FlatList, useWindowDimensions } from 'react-native'
import { Header } from '../components/Profile/Header'
import { InfoInput } from '../components/Profile/InfoInput'

const infos = [
  {
    image: 'http://surl.li/btynb',
    title: 'Username',
    value: 'Minh Pham'
  },
  {
    image: 'https://tinyurl.com/4d5h3b5j',
    title: 'Email',
    value: 'minhphm37@gmail.com'
  },
  {
    image: 'https://tinyurl.com/yckzb7s2',
    title: 'Phone',
    value: '0967105498'
  },
  {
    image: 'https://tinyurl.com/bddabcjz',
    title: 'Default Address',
    value: 'Số 94 Nguyễn Lương Bằng, Đống Đa, Hà Nội'
  }
]

const Profile = () => {
  console.log('render Profile screen')
  const { height, width } = useWindowDimensions()
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{
          paddingTop: height / (width < height ? 26 : 12),
          alignItems: 'center',
          backgroundColor: '#FCFCFC'
        }}>
          <Header />
          { infos.map((info, index) => <InfoInput key={index} info={info}/>) }
          <View style={{
            width: width / (width < height ? 1.2 : 1.15),
            flexDirection: 'row',
            paddingVertical: width < height ? 14 : 16,
            paddingHorizontal: width < height ? 13 : 24,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: height / (width < height ? 32 : 12),
            marginBottom: height / 24
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: width < height ? 14 : 16,
                fontFamily: 'Montserrat-Bold'
              }}>Giỏ hàng của tôi</Text>
              <View style={{
                paddingHorizontal: width < height ? 9 : 11,
                paddingVertical: width < height ? 4 : 6,
                borderRadius: 20,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: width / (width < height ? 30 : 40)
              }}>
                <Text style={{
                  color: '#fcfcfc'
                }}>2</Text>
              </View>
            </View>
            <Image 
              source={{uri: 'https://tinyurl.com/45xnef34'}}
              style={{
                width: 20,
                height: 20
              }}/>
          </View>
        </View>
      }/>
  )
}

export { Profile } 