import React from 'react'
import { View, Image, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';

const AuthTab = createMaterialTopTabNavigator()

export default function Auth() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Image
        source={{uri: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/278020062_538049024718497_5018203892695914340_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qAKXNXYfutIAX-GGxu5&_nc_ht=scontent.fhan3-2.fna&oh=03_AVKu75sCmlHmDEx3Q-S89-VN9ZkjsG4_ZpJU16aSnu-XCg&oe=62E6C29C'}}
        style={styles.logoShop}/>
      <AuthTab.Navigator
        sceneContainerStyle={{ backgroundColor: '#fcfcfc' }}
        style={{ marginTop: 60 }}
        initialRouteName="Login"
        screenOptions={{
          tabBarActiveTintColor: '#E4E4E4',
          tabBarInactiveTintColor: '#5F5E5E',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: styles.tabBarIndicator
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
    </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fcfcfc',
    paddingTop: 70,
    paddingHorizontal: 40
  },
  logoShop: {
    width: 140, 
    height: 20,
    alignSelf: 'center'
  },
  tabBarLabel: {
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    textTransform: 'none' 
  },
  tabBar: {
    backgroundColor: '#fcfcfc', 
    width: '70%',
    height: 45, 
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: '3%'
  },
  tabBarIndicator: {
    backgroundColor: '#5f5e5e', 
    height: 45, 
    borderRadius: 25, 
    elevation: 5
  }
})