import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { AuthUserInput } from './AuthUserInput'

const { height, width } = Dimensions.get('window')

const Register = () => {
  const [ userName, setUserName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  return (
    <View style={{
      width: '100%', 
      // height: '100%',
      alignItems: 'center',
      alignSelf: 'flex-end',
      backgroundColor: 'white'
    }}>
      <AuthUserInput 
        res={{
          imageSource: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/277992560_788181655488981_3126043448509815524_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nl_f9xHpCsgAX-vVNBj&_nc_ht=scontent.fhan14-2.fna&oh=03_AVLFBwnfBf8NYhfsdOh9LLGMLgYwyaYTh8PFWCWokT16zQ&oe=62B1CDD9', 
          placeHolderInput: 'Username'
        }}
        onChangeText={setUserName}/>
      <AuthUserInput 
        res={{
          imageSource: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/280276336_1930164937371354_8007481529035362593_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YKLbFJtyK44AX8zALa8&_nc_ht=scontent.fhan14-2.fna&oh=03_AVJWbW02OQBE9fX59VIO-vvuR_vttbsf3iDGYAWpMmoC3w&oe=62B17A3B', 
          placeHolderInput: 'Email'
        }}
        onChangeText={setEmail}/>
      <AuthUserInput 
        res={{
          imageSource: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/275967174_555967815860768_391213822180946006_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1JTARKY4VaYAX9ibPDc&tn=SjqDQmKiiUESt38z&_nc_ht=scontent.fhan14-1.fna&oh=03_AVK5vjMTTgSsbcXb3J2x-Xhq_24ADkccm256nni9bjCnjA&oe=62B2B302', 
          placeHolderInput: 'Mật khẩu'
        }}
        onChangeText={setPassword}/>
      <TouchableOpacity 
        style={{
          marginTop: '5%',
          width: width / 1.5,
          height: height / 14,
          elevation: 5,
          borderRadius: 10,
          backgroundColor: '#5F5E5E',
          justifyContent: 'center',
          alignItems: 'center'
        }} 
        activeOpacity={0.8}>
        <Text style={{
          color: 'white',
          fontSize: 16
        }}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  )
}

export { Register }