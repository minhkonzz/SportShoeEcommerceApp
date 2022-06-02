import React, { useRef } from 'react'
import { View, Image, Text, LogBox, Animated, TouchableOpacity, useWindowDimensions } from 'react-native'
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const AdjustAmountButton = props => {
  const { height, width } = useWindowDimensions()
  return (
    <TouchableOpacity style={{
      width: width < height ? 28 : 33,
      height: width < height ? 28 : 33,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.bgColor,
      elevation: props.bgColor == 'white' ? 5 : 0,
      borderRadius: 8
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: props.bgColor == 'white' ? 'bold' : '400',
        color: props.textColor
      }}>{props.symbol}</Text>
    </TouchableOpacity>
  )
}

const Product = ({product}) => {
  const { height, width } = useWindowDimensions()
  const slidefromRight = useRef(new Animated.Value(500)).current;
  React.useEffect(() => {
    Animated.stagger(500, [
      Animated.timing(
        slidefromRight,{
          toValue: 0,
          duration: 1000,
        }
      ),
    ]).start()
  }, [])
  return (
    <Animated.View style={{
      width: width / (width < height ? 1.2 : 1.15),
      height: height / (width < height ? 6 : 2.5),
      borderRadius: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 8,
      marginTop: 25,
      elevation: 5,
      alignSelf: 'center',
      marginLeft: slidefromRight
      }}>
      <View style={{
        flex: width < height ? 4 : 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
      }}>
        <Image 
          source={{uri: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eCgl4qcGnsMAX-hMXmZ&_nc_ht=scontent.fhan15-2.fna&oh=03_AVKdg0f40vldc5sarmmAvoj0qNiVkJfYiP7OK-wiwRyUFQ&oe=62BE705F'}}
          style={{
            width: width < height ? 140 : 220,
            height: width < height ? 60 : 100
          }}/>
      </View>
      <View style={{
        flex: 3, 
        justifyContent: 'space-around',
        paddingVertical: 5
      }}>
        <Text style={{
          color: '#9A9A9A',
          fontFamily: 'Montserrat-Bold',
          fontSize: width < height ? 13 : 20
        }}>{product.productName}</Text>
        <Text style={{
          color: '#5F5E5E',
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 12 : 19
        }}>450000</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: width < height ? 12 : 19
          }}>Màu</Text>
          <View style={{
            width: width < height ? 15 : 18,
            height: width < height ? 15 : 18,
            borderRadius: 10,
            backgroundColor: product.color, 
            marginLeft: width / 70,
            elevation: 3
          }}/>
        </View>
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: width < height ? 12 : 19
        }}>{`Size ${product.size}`}</Text>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }}>
        <View style={{  alignItems: 'center' }}>
          <AdjustAmountButton 
            symbol={'-'} 
            bgColor={'white'}
            textColor={'#5F5E5E'}/>
          <Text style={{ 
            fontSize: width < height ? 14 : 18,
            marginVertical: 5,
            fontWeight: 'bold' 
          }}>2</Text>
          <AdjustAmountButton 
            symbol={'+'} 
            bgColor={'#363636'}
            textColor={'white'}/>
        </View>
      </View>
    </Animated.View>
  )
}

export { Product }