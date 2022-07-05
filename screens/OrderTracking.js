import React from 'react'
import { FlatList } from 'react-native'
import { OrderTrackingHeader } from '../components/OrderTracking/OrderTrackingHeader'
import { BasicInfos } from '../components/OrderTracking/BasicInfos'
import { OrderProducts } from '../components/OrderTracking/OrderProducts'
import { OrderStates } from '../components/OrderTracking/OrderStates'
import LinearGradient from 'react-native-linear-gradient'

export default function OrderTracking() {
  return (
    <LinearGradient
      style={{ flex: 1, paddingHorizontal: 24 }} 
      colors={['#ffffff', '#ece9e6']}
      useAngle={true}
      angle={145}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            <OrderTrackingHeader />
            <BasicInfos />
            <OrderStates />
            <OrderProducts />
          </>
        }/>
    </LinearGradient>
  )
}