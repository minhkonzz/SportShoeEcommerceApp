import React from 'react'
import { FlatList } from 'react-native'
import { ProductViews } from '../components/ProductDetail/ProductViews'
import { ProductDesc } from '../components/ProductDetail/ProductDesc'
import { ProductInteract } from '../components/ProductDetail/ProductInteract'

export default function ProductDetail() {
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <>
          <ProductViews />
          <ProductDesc />
          <ProductInteract />
        </>
      }/>
  )
}