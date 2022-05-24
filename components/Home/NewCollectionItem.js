import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import { BoxShadow } from 'react-native-shadow'
import LinearGradient from 'react-native-linear-gradient'

const NewCollectionItem = ({item, index}) => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ 
      marginLeft: width < height ? (index > 0 ? width / 8 : width / 15) : (index > 0 ? width / 14 : width / 20)
    }}>
      <BoxShadow 
        setting={{
          width: width/( width < height ? 1.65 :  2.7),
          height: width < height ? height / 2.05 : height * 1.05,
          color: '#000',
          border: 22,
          radius: 25,
          opacity: 0.04,
          x: 2,
          y: 8
        }}>
        <View style={{
          flex: 1,
          borderRadius: 25,
          backgroundColor: 'white'
        }}>
          <View style={{
            flex: 2,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingHorizontal: 18
          }}>
            <View style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 16,
                color: 'black'
              }}>{item.brand}</Text>
              <Image 
                source={{uri: 'http://surl.li/bulxp'}}
                style={{
                  width: '11.1%',
                  height: '36.5%'
                }}/>
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{
                fontSize: 27,
                fontWeight: 'bold'
              }}>{item.productName}</Text>
              <Image 
                source={{uri: 'http://surl.li/bulyy'}}
                style={{
                  width: '18%',
                  height: '20%',
                  marginTop: '6%'
                }}/>
            </View>
          </View>
          <View style={{
            flex: 3,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25
          }}>
            <LinearGradient
              style={{
                width: '73%',
                height: '75%',
                borderTopLeftRadius: 250,
                borderBottomRightRadius: 25,
                position: 'absolute'
              }} 
              colors={['#7f8c8d', '#000000']}
              useAngle={true}
              angle={145}/>
            <Image 
              source={{uri: item.image}}
              style={[{
                width: width < height ? width / 1.38 : width / 2.28,
                height: width < height ? height / 6 : height / 2.8,
                marginBottom: '40%',
                marginRight: '-14%' 
              }, { transform: [ {rotate: '-25deg'} ] }]
              }/>
          </View>
        </View>
      </BoxShadow>
    </View>
  )
}

export { NewCollectionItem }