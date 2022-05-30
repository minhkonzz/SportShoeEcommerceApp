import React from 'react'
import { View, Image, Text, ImageBackground, useWindowDimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function Start({navigation}) {
  const { height, width } = useWindowDimensions()
  return (
    <ImageBackground 
      style={{ flex: 1 }}
      source={{uri: 'https://images.unsplash.com/photo-1639572600664-28a2a01ce860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}>
      <View 
        style={{ 
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: width < height ? height / 24 : height / 15, 
          backgroundColor: 'rgba(0,0,0,0.3)' 
        }}>
        <Image 
          source={{uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/277613393_1217829295711457_5488553743249123389_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=21jTFBLTGPMAX9yuMou&_nc_ht=scontent.fhan2-1.fna&oh=03_AVJtHVDl0Mn5uChZt88aOh2TMSa56sW55oX36J2n9v2H3Q&oe=62B96FEC'}}
          style={{
            width: width < height ? width / 3.9 : width / 7,
            height: width < height ? height / 52 : height / 26
          }}/>
        <Text style={{
          marginTop: width < height ? height / 2.6 : height / 15,
          marginRight: width < height ? width / 8 : width / 3,
          fontSize: width < height ? 22 : 30,
          color: 'white',
          fontFamily: 'MonumentExtended-Ultrabold'
        }}>
          {`TRẺ TRUNG ${'\n\t\t\t'} CÙNG VÓC DÁNG`}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: width < height ? width / 1.6 : width / 3,
            height: width < height ? height / 12 : height / 7
          }}
          onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15
            }} 
            colors={['#434343', '#000000']}
            useAngle={true}
            angle={180}>
            <Text style={{
              color: 'white',
              fontSize: width < height ? 16 : 17,
              fontFamily: 'Poppins-Bold'
            }}>Khám phá ngay</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}