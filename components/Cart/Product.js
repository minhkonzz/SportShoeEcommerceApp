import React, { useEffect, useRef } from 'react'
import { View, Image, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native'

function AdjustAmountButton(props) {
  return (
    <TouchableOpacity style={[
      styles.amountBtn,
      {
        backgroundColor: props.bgColor,
        elevation: props.bgColor == 'white' ? 5 : 0,
      }
    ]}>
      <Text style={{
        fontSize: 20,
        fontWeight: props.bgColor == 'white' ? 'bold' : '400',
        color: props.textColor
      }}>{props.symbol}</Text>
    </TouchableOpacity>
  )
}

export function Product({product}) {

  const slidefromRight = useRef(new Animated.Value(500)).current;

  useEffect(() => {
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
    <Animated.View style={[styles.container, { marginLeft: slidefromRight }]}>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eCgl4qcGnsMAX-hMXmZ&_nc_ht=scontent.fhan15-2.fna&oh=03_AVKdg0f40vldc5sarmmAvoj0qNiVkJfYiP7OK-wiwRyUFQ&oe=62BE705F'}}
          style={styles.image}/>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.name}>{product.productName}</Text>
        <Text style={[styles.textMedium, { color: '#5F5E5E' }]}>450000</Text>
        <View style={styles.color}>
          <Text style={styles.textMedium}>Màu</Text>
          <View style={[styles.colorInstance, { backgroundColor: product.color }]}/>
        </View>
        <Text style={styles.textMedium}>{`Size ${product.size}`}</Text>
      </View>
      <View style={ styles.amount }>
        <View style={{ alignItems: 'center' }}>
          <AdjustAmountButton 
            symbol='-' 
            bgColor='white'
            textColor='#5F5E5E'/>
          <Text style={styles.amountText}>2</Text>
          <AdjustAmountButton 
            symbol='+' 
            bgColor='#363636'
            textColor='white'/>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8,
    marginTop: 25,
    alignSelf: 'center'
  },
  textMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  image: {
    width: 140,
    height: 60
  },
  productInfo: {
    flex: 3, 
    justifyContent: 'space-around',
    paddingVertical: 5
  },
  name: {
    color: '#9A9A9A',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13
  },
  color: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  colorInstance: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginStart: 7,
    elevation: 3
  },
  amount: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  amountText: {
    fontSize: 14,
    marginVertical: 5,
    fontWeight: 'bold' 
  },
  amountBtn: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
})