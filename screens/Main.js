import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from './Home';
import { Wishlist } from './Wishlist';
import { Orders } from './Orders';
import { Profile } from './Profile';
import { Products } from './Products';

const BottomTab = createBottomTabNavigator();

const CartFloatTouchable = props => {
  const navigation = useNavigation()
  return (
    <View style={{
      position: 'absolute',
      bottom: 75,
      right: 22,
    }}>
      <TouchableOpacity 
        style={{
          width: props.dim.width / (props.dim.width < props.dim.height ? 6.1 : 10),
          elevation: 8,
          height: props.dim.height / (props.dim.width < props.dim.height ? 11.5 : 5.5),
          borderRadius: 1000,
          backgroundColor: '#5F5E5E',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Cart')}>
        <Ionicons name='cart' color='white' size={props.dim.width < props.dim.height ? 28 : 33}/>
      </TouchableOpacity>
    </View>
  )
}

const Main = () => {
  console.log('Main screen')
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flex: 1
    }}>
      <BottomTab.Navigator
        sceneContainerStyle={{
          borderTopLeftRadius: 30
        }}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#5F5E5E',
          tabBarStyle: {
            height: 55,
            position: 'absolute',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: 'white'
          }
        }}>
        <BottomTab.Screen 
          name='Home' 
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => 
              <Ionicons name='home' size={size} color={color}/>
          }}/>
        <BottomTab.Screen 
          name='Products' 
          component={Products}
          options={{
            tabBarIcon: ({color, size}) => 
              <Ionicons name= 'search-outline' size={size} color={color}/>
          }}/>
        <BottomTab.Screen 
          name='Wishlist' 
          component={Wishlist}
          options={{
            tabBarIcon: ({color, size}) => 
              <Ionicons name='heart' size={size} color={color}/>
          }}/>
        <BottomTab.Screen 
          name='Orders' 
          component={Orders}
          options={{
            tabBarIcon: ({color, size}) => 
              <Ionicons name='basket' size={size} color={color}/>
          }}/>
        <BottomTab.Screen 
          name='Profile' 
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => 
              <Ionicons name='person' size={size} color={color}/>
          }}/>
      </BottomTab.Navigator>
      <CartFloatTouchable dim={{ width: width, height: height }} />
    </View>
  )
}

export { Main }