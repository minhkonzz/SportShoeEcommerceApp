import React from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native' 
import { Order } from '../components/Orders/Order'
import { Header } from '../components/Orders/Header'

const WAIT_RECEIVE = 0
const RECEIVED = 1
const BUNDLING = 2
const SHIPPING = 3
const ORDER_COMPLETED = 4
const CANCELED = 5

let ods = [
  {
    id: '1091020201',
    month: 10,
    descs: [
      {
        icon: 'https://tinyurl.com/ypfdbp3h',
        desc: 'Sản phẩm',
        descVal: 3
      },
      {
        icon: 'https://tinyurl.com/4e8df64h',
        desc: 'Cách thanh toán',
        descVal: 'trực tiếp'
      },
      {
        icon: 'https://tinyurl.com/bd3p3vm2',
        desc: 'Giao vào',
        descVal: '29-10-2021'
      }
    ],
    state: {
      stateCode: BUNDLING,
      stateTitle: 'Đang đóng gói'
    }
  },
  {
    id: '1091020342',
    month: 10,
    descs: [
      {
        icon: 'https://tinyurl.com/ypfdbp3h',
        desc: 'Sản phẩm',
        descVal: 2
      },
      {
        icon: 'https://tinyurl.com/4e8df64h',
        desc: 'Cách thanh toán',
        descVal: 'qua thẻ'
      },
      {
        icon: 'https://tinyurl.com/bd3p3vm2',
        desc: 'Giao vào',
        descVal: '05-10-2021'
      }
    ],
    state: {
      stateCode: ORDER_COMPLETED,
      stateTitle: 'Đã giao hàng'
    }
  },
  {
    id: '1091020590',
    month: 9,
    descs: [
      {
        icon: 'https://tinyurl.com/ypfdbp3h',
        desc: 'Sản phẩm',
        descVal: 1
      },
      {
        icon: 'https://tinyurl.com/4e8df64h',
        desc: 'Cách thanh toán',
        descVal: 'qua thẻ'
      },
      {
        icon: 'https://tinyurl.com/bd3p3vm2',
        desc: 'Giao vào',
        descVal: '13-09-2021'
      }
    ],
    state: {
      stateCode: CANCELED,
      stateTitle: 'Đã hủy'
    }
  }
]

const SCREEN_NAME = 'Orders'

const Orders = () => {
  const width = useWindowDimensions().width
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{ paddingHorizontal: width / 14 }}>
          <Header 
            title={'Đơn hàng của tôi'}
            imageRight={'https://tinyurl.com/5drx39ej'}
            screen={SCREEN_NAME}/>
          { ods.map((order, index) => <Order index={index} order={order} orders={ods}/>) }
        </View>
      }/>
  )
}

export default Orders