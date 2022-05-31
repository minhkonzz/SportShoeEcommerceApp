import React from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native'
import { OrderTrackingHeader } from '../components/OrderTracking/OrderTrackingHeader'
import { BasicInfos } from '../components/OrderTracking/BasicInfos'
import { OrderProducts } from '../components/OrderTracking/OrderProducts'
import { OrderStates } from '../components/OrderTracking/OrderStates'

const OrderTracking = () => {
  const width = useWindowDimensions().width
  return (
    <FlatList 
      contentContainerStyle={{ backgroundColor: '#FCFCFC' }}
      showsVerticalScrollIndicator={false}
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{ paddingHorizontal: width / 14 }}>
          <OrderTrackingHeader />
          <BasicInfos />
          <OrderStates />
          <OrderProducts />
        </View>
      }/>
  )
}

export { OrderTracking }