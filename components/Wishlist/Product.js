import React, { useEffect, useRef } from 'react'
import { View, Text, Image, Animated, Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

export function Product(props) {

  const slidefromRight = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.stagger(5000, [
      Animated.timing(
        slidefromRight,{
          toValue: 0,
          delay: props.index,
          duration: 1000
        }
      )
    ]).start()
  }, [])

  return (
    <Animated.View style={[styles.container, { marginLeft: slidefromRight }]}>
      <View style={styles.productImageContainer}>
        <Image 
          source={{uri: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/279472069_582436386395177_7456601121581054285_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ks0sWKdReDAAX-YeJBj&tn=SjqDQmKiiUESt38z&_nc_ht=scontent.fhan15-1.fna&oh=03_AVKSCHA1UkTcZupIufTgsQRVmgSe-j6E4UyfAiGnobfQ5g&oe=62BDF141'}}
          style={styles.productImage}/>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.name}>{props.product.productName}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textMedium}>Màu</Text>
          <View style={styles.colors}>
          {
            props.product.colors.map((color, index) => 
              <View style={[styles.color, { backgroundColor: color, marginLeft: index == 0 ? 8 : 0 }]}/>
            )
          }
          </View>
        </View>
        <Text style={styles.textMedium}>{`Size ${props.product.sizes[0]}-${props.product.sizes[props.product.sizes.length-1]}`}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rate}>
            <Image 
              source={{uri: 'https://tinyurl.com/5yws4ah6'}}
              style={styles.rateStar}/>
            <Text style={[styles.textMedium, { marginStart: 5 }]}>{props.product.rate}</Text>
          </View>
          <View style={styles.usersAvatar}>
          {
            props.product.usersAvatar.map((avatar, index) => 
              <Image 
                source={{uri: avatar}}
                style={[
                  styles.userAvatar,
                  {
                    marginLeft: index >= 2 ? 0 : width < height ? (index == 0 ? 25 : 13) : (index == 0 ? 29 : 15)
                  }
                ]}/>
              )
          }
            <Text style={[styles.textMedium, { marginStart: 50 }]}>+8</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  textMedium: {
    fontSize: 11, 
    fontFamily: 'Montserrat-Medium' 
  },
  container: {
    height: 120,
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    marginVertical: 12,
  },
  productImageContainer: {
    flex: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productImage: {
    width: 100,
    height: 50
  },
  productInfo: {
    flex: 8,
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13
  },
  colors: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    marginLeft: 4
  },
  color: {
    width: 13,
    height: 13,
    borderRadius: 30,
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 1,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rateStar: {
    width: 15,
    height: 15
  },
  usersAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    position: 'relative'
  },
  userAvatar: {
    width: 21,
    height: 21,
    borderRadius: 30,
    borderWidth: 2, 
    borderColor: 'white',
    position: 'absolute',
  }
})

