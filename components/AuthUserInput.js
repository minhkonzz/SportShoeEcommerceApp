import React from 'react';
import { View, TextInput, Image, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const AuthUserInput = props => {
  const { imageSource, placeholderInput } = props.res
  return (
    <View style={{
      width: width / 1.38,
      height: height / 15,
      justifyContent: 'center',
      marginTop: 15
    }}>
      <TextInput 
        secureTextEntry={props.isPassword}
        style={{
          width: width/1.38,
          height: height/15,
          borderRadius: 40,
          paddingLeft: 50,
          position: 'absolute',
          backgroundColor: '#E4E4E4' 
      }}
        placeholder={placeholderInput}/>
      <Image 
        style={{
          width: 20,
          height: 20,
          marginLeft: '6%'
        }}
        source={{uri: imageSource}}/>
    </View>
  )
}
export { AuthUserInput }