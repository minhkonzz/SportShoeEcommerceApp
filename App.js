import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './screens/Main';
import { Auth } from './screens/Auth';
import { ProductDetail } from './screens/ProductDetail';
import { OrderTracking } from './screens/OrderTracking';
import { Cart } from './screens/Cart';
import { Checkout } from './screens/Checkout';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Auth'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='Main' component={Main}/>
      <Stack.Screen name='Auth' component={Auth}/>
      <Stack.Screen name='ProductDetail' component={ProductDetail}/>
      <Stack.Screen name='OrderTracking' component={OrderTracking}/>
      <Stack.Screen name='Cart' component={Cart}/>
      <Stack.Screen name='Checkout' component={Checkout}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
