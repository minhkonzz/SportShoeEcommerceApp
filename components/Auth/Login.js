import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { AuthUserInput } from './AuthUserInput'

const { height, width } = Dimensions.get('window')

const LoginOption = props => (
  <View style={styles.loginOptionWrapper}>
    <Image 
      style={{ 
        width: 28, 
        height: 28 
      }} 
      source={{uri: props.optionImage}}/>
    <Text>{props.optionName}</Text>
  </View>
)

const Login = props => {
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  return (
    <View style={{ alignItems: 'center'}}>
      <AuthUserInput 
        res={{
          imageSource: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/277992560_788181655488981_3126043448509815524_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nl_f9xHpCsgAX-vVNBj&_nc_ht=scontent.fhan14-2.fna&oh=03_AVLFBwnfBf8NYhfsdOh9LLGMLgYwyaYTh8PFWCWokT16zQ&oe=62B1CDD9', 
          placeHolderInput: 'Username hoặc email'
        }}
        isPassword={false}
        onChangeText={setEmail}/>
      <AuthUserInput 
        res={{
          imageSource: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/275967174_555967815860768_391213822180946006_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1JTARKY4VaYAX9ibPDc&tn=SjqDQmKiiUESt38z&_nc_ht=scontent.fhan14-1.fna&oh=03_AVK5vjMTTgSsbcXb3J2x-Xhq_24ADkccm256nni9bjCnjA&oe=62B2B302', 
          placeHolderInput: 'Mật khẩu'
        }}
        isPassword={true}
        onChangeText={setPassword}/>
      <TouchableOpacity
        style={{
          marginTop: '5%',
          width: width / 1.5,
          height: height / 14,
          borderRadius: 10,
          backgroundColor: '#5F5E5E',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5
        }} 
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('Main')}>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontFamily: 'Montserrat-Medium'
        }}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={{
        width: width / 1.5,
        height: height / 11,
        marginTop: height / 50,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{color: '#5F5E5E'}}>Hoặc đăng nhập bằng</Text>
        <View style={{
          width: '100%', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginTop: 15
        }}>
          <LoginOption 
            optionName='Facebook'
            optionImage='https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/271207277_1132573497568976_3506931056740966135_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lcdC3DMV2skAX_AcvYa&_nc_ht=scontent.fhan14-1.fna&oh=03_AVKoF2FR2FRSQW1PfJoX0dj6RtOxQUtmi7p72-XM95r7jA&oe=62B30937'/>
          <LoginOption 
            optionName='Google'
            optionImage='https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/277115727_517904133057362_3857535230431844028_n.png?stp=cp0_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Af_T1LeqKB8AX-uHs8p&tn=SjqDQmKiiUESt38z&_nc_ht=scontent.fhan14-2.fna&oh=03_AVKKmkAnWjBmVZPdqPgMjgED8JiYKzBzYIHldK3l6OOXkw&oe=62B0FCB1'/>
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
  }
})

export { Login }