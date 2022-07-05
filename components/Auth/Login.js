import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AuthUserInput } from './AuthUserInput'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function LoginOption(props) {
  return (
    <View style={styles.loginOptionWrapper}>
      <Ionicons name={props.optionIc} size={22} color='#5f5e5e'/>
      <Text>{props.optionName}</Text>
    </View>
  )
}

export function Login(props) {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <View>
      <AuthUserInput 
        res={{ imageSource: 'person', placeHolderInput: 'Username hoặc email' }}
        isPassword={false}
        onChangeText={setEmail}/>
      <AuthUserInput 
        res={{ imageSource: 'key', placeHolderInput: 'Mật khẩu' }}
        isPassword={true}
        onChangeText={setPassword}/>
      <TouchableOpacity
        style={styles.loginBtn} 
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('Main')}>
        <Text style={styles.loginBtnText}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={styles.options}>
        <Text style={{ color: '#5F5E5E' }}>Hoặc đăng nhập bằng</Text>
        <View style={styles.methods}>
          <LoginOption optionName='Facebook' optionIc='logo-google'/>
          <LoginOption optionName='Google' optionIc='logo-facebook'/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginOptionWrapper: {
    width: '48%',
    backgroundColor: '#e4e4e4',
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30
  },
  loginBtn: {
    marginTop: '5%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#5F5E5E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  loginBtnText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium'
  },
  options: {
    height: 80,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  methods: {  
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 15
  }
})