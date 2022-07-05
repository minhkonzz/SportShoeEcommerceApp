import React from 'react'
import { FlatList } from 'react-native' 
import { Order } from '../components/Orders/Order'
import { Header } from '../components/Orders/Header'
import LinearGradient from 'react-native-linear-gradient'

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
        icon: 'basket-outline',
        desc: 'Sản phẩm',
        descVal: 3
      },
      {
        icon: 'wallet-outline',
        desc: 'Cách thanh toán',
        descVal: 'trực tiếp'
      },
      {
        icon: 'time-outline',
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
        icon: 'basket-outline',
        desc: 'Sản phẩm',
        descVal: 2
      },
      {
        icon: 'wallet-outline',
        desc: 'Cách thanh toán',
        descVal: 'qua thẻ'
      },
      {
        icon: 'time-outline',
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
        icon: 'basket-outline',
        desc: 'Sản phẩm',
        descVal: 1
      },
      {
        icon: 'wallet-outline',
        desc: 'Cách thanh toán',
        descVal: 'qua thẻ'
      },
      {
        icon: 'time-outline',
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

export default function Orders() {
  return (
    <LinearGradient
      style={{ flex: 1, paddingHorizontal: 24 }} 
      colors={['#ffffff', '#e9e9e9']}
      useAngle={true}
      angle={180}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            <Header 
              title={'Đơn hàng của tôi'}
              imageRight={'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/238596540_1224566681390021_1944068077931728533_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=BYim7vLOGnwAX9j5Ifr&_nc_ht=scontent.fhan3-5.fna&oh=03_AVL35OnnPV5YlJpbMNUrYHX1jiaofl6J54G6V4p6NwdRxQ&oe=62E7DD8F'}
              screen={SCREEN_NAME}/>
            { ods.map((order, index) => <Order index={index} order={order} orders={ods}/>) }
          </>
        }/>
    </LinearGradient>
  )
}