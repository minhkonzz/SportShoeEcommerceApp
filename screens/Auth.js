import React from 'react'
import { View, Image, useWindowDimensions, } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';

const AuthTab = createMaterialTopTabNavigator()

const Auth = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flex: 1, 
      backgroundColor: '#fcfcfc',
      paddingTop: 70
    }}>
      <Image
        source={{uri: 'https://tinyurl.com/2p9yhu6x'}}
        style={{
          width: 140, 
          height: 20,
          alignSelf: 'center'
        }}/>
      <NavigationContainer>
        <AuthTab.Navigator
          sceneContainerStyle={{ backgroundColor: '#fcfcfc' }}
          style={{ marginTop: height / 12 }}
          initialRouteName="Login"
          screenOptions={{
            tabBarActiveTintColor: '#E4E4E4',
            tabBarInactiveTintColor: '#5F5E5E',
            tabBarLabelStyle: { 
              fontSize: 14,
              fontFamily: 'Montserrat-Medium',
              textTransform: 'none' 
            },
            tabBarStyle: { 
              backgroundColor: '#fcfcfc', 
              width: '60%',
              height: 45, 
              alignSelf: 'center',
              borderRadius: 25,
              marginBottom: '3%',
              elevation: 0
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#5f5e5e', 
              height: 45, 
              borderRadius: 25, 
              elevation: 5
            }
        }}>
          <AuthTab.Screen 
            name="Login" 
            component={ Login } 
            options={{ tabBarLabel: 'Đăng nhập' }}/>
          <AuthTab.Screen 
            name="Register" 
            component={ Register } 
            options={{ tabBarLabel: 'Đăng ký' }}/>
        </AuthTab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default Auth