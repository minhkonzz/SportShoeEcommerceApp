import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native'
import { ShipAddress } from '../components/Checkout/ShipAddress'
import { PaymentMethods } from '../components/Checkout/PaymentMethods'
import { Products } from '../components/Checkout/Products'

const Checkout = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: width < height ? 8 : 3 }}> 
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={[]}
          renderItem={null}
          ListHeaderComponent={
            <View style={{ alignItems: 'center' }}>
              <View style={{
                width: width / (width < height ? 1.15 : 1.1),
                paddingVertical: 25
              }}>
                <TouchableOpacity style={{
                  alignSelf: 'flex-start',
                  marginBottom: -18
                }}>
                  <Image 
                    source={{uri: 'https://tinyurl.com/bddax479'}}
                    style={{
                      width: 20, 
                      height: 20
                    }}/>
                </TouchableOpacity>
                <Text style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  alignSelf: 'center'
                }}>CHECKOUT</Text>
              </View>
              <ShipAddress />
              <Products />
              <PaymentMethods />
            </View>
          }/>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width < height ? 25 : 35,
        borderTopColor: '#e4e4e4',
        borderTopWidth: 1
      }}>
        <View>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Montserrat-Bold'
          }}>Total payment</Text>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            marginTop: 5
          }}>300.000$</Text>
        </View>
        <TouchableOpacity style={{
          paddingHorizontal: 55,
          paddingVertical: 15,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5F5E5E',
          borderRadius: 10,
          elevation: 3
        }}>
          <Text style={{
            fontFamily: 'Montserrat-Bold',
            color: 'white'
          }}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { Checkout }
