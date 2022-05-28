import React from 'react'
import { View, useWindowDimensions } from 'react-native'
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

const BasicInfos = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{  
      marginTop: height / 40,
      marginBottom: height / (width < height ? 50 : 18),
    }}>
      { basicInfos.map((info, index) => <BasicInfo key={index} index={index} info={info} infoAmount={basicInfos.length} />) }
    </View>
  )
}

export { BasicInfos }