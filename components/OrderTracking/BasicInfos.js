import React from 'react'
import { View } from 'react-native'
import { BasicInfo } from './BasicInfo'

const basicInfos = [
  {
    icon: 'https://tinyurl.com/43b8d6af',
    title: 'Thời gian đặt',
    info: '20-09-2022'
  },
  {
    icon: 'https://tinyurl.com/43b8d6af',
    title: 'Địa chỉ giao hàng',
    info: '20-09-2022'
  },
  {
    icon: 'https://tinyurl.com/43b8d6af',
    title: 'Dự kiến giao hàng',
    info: '20-09-2022'
  },
  {
    icon: 'https://tinyurl.com/43b8d6af',
    title: 'Tổng tiền',
    info: '20-09-2022'
  }
]

export function BasicInfos() {
  return (
    <View style={{ marginTop: 20 }}>
      { basicInfos.map((info, index) => <BasicInfo key={index} index={index} info={info} infoAmount={basicInfos.length} />) }
    </View>
  )
}