import React from 'react'
import { View, FlatList } from 'react-native'
import { Header } from '../components/Home/Header'
import { Banner } from '../components/Home/Banner'
import { NewCollection } from '../components/Home/NewCollection'
import { Popular } from '../components/Home/Popular'

const Home = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FCFCFC'
    }}>
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
    </View>
  )
}
export { Home }