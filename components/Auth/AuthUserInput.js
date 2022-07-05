import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function AuthUserInput(props) {

  const { imageSource, placeHolderInput } = props.res

  return (
    <View style={styles.container}>
      <TextInput 
        secureTextEntry={props.isPassword}
        style={styles.input}
        placeholder={placeHolderInput}
        onChangeText={v => props.onChangeText(v)}/>
      <Ionicons style={{ marginStart: 15 }} name={imageSource} size={20} color='#5f5e5e'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    justifyContent: 'center',
    marginTop: 15
  },
  input: {
    width: '100%',
    height: 55,
    borderRadius: 40,
    paddingLeft: 50,
    position: 'absolute',
    backgroundColor: '#E4E4E4' 
  }
})