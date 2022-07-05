import React from 'react'
import { View, FlatList } from 'react-native'
import { Header } from '../components/Home/Header'
import { Banner } from '../components/Home/Banner'
import { NewCollection } from '../components/Home/NewCollection'
import { Popular } from '../components/Home/Popular'
import LinearGradient from 'react-native-linear-gradient'

export default function Home() {
  console.log('render Home screen')
  return (
    <LinearGradient
      style={{ flex: 1 }} 
      colors={['#ffffff', '#ece9e6']}
      useAngle={true}
      angle={145}>
      <FlatList 
        showsVerticalScrollIndicator={false} 
        ListHeaderComponent={
          <View>
            <Header />
            <Banner />
            <NewCollection />
            <Popular />
          </View>
        } 
        data={[]} 
        renderItem={null}/>
    </LinearGradient>
  )
}