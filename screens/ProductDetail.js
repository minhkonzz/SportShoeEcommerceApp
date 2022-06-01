import React from 'react'
import { View, FlatList } from 'react-native'
import { ProductViews } from '../components/ProductDetail/ProductViews'
import { ProductDesc } from '../components/ProductDetail/ProductDesc'
import { ProductInteract } from '../components/ProductDetail/ProductInteract'

const ProductDetail = () => (
  <FlatList 
    showsVerticalScrollIndicator={false}
    data={[]}
    renderItem={null}
    ListHeaderComponent={
      <View>
        <ProductViews />
        <ProductDesc />
        <ProductInteract />
      </View>
    }/>
)

export { ProductDetail }