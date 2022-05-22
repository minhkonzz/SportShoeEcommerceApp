import React from 'react';
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: 'blue'
      }}>
        Hello World
      </Text>
    </View>
  )
}

export default App;
