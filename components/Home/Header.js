import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'

const Header = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      paddingHorizontal: width/(width < height ? 15 : 20),
      height:height/ (width < height ? 6.5 : 2.8),
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    }}>
      <View style={{
        width: width < height ? '48%' : '34%',
        height: width < height ? '52%' : '57%',
        flexDirection: 'row'
      }}> 
        <Image 
          source={{uri: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/272853291_3155351404729261_5286117369667984707_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wzcic0nd2X0AX_vcQTV&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_J1M7rRcs8RvtFVbpHrW4mZ1NIUCd9ZwOUQVvz3ApVKQ&oe=6290B29F'}}
          style={{
            width: '35%',
            height: '100%',
            borderRadius: 15
          }}/>
        <View style={{
          marginLeft: '8%',
          paddingTop: '4%'
        }}>
          <Text style={{
            fontSize: width < height ? 13 : 19
          }}>Xin chào</Text>
          <Text style={{
            fontSize: width < height ? 14 : 21,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
            marginTop: '5%'
          }}>Minh Phạm</Text>
        </View>
      </View>
      <Image 
        source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/278072861_5028306833885280_3297818520680467533_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=VEIhRanRPUMAX9bdZSw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIKwveCW72wmR7fHg4KS0V_GSkKnF5ELp784YEkucDzqw&oe=62B106D8'}}
        style={{
          width: width < height ? 26 : 40,
          height: width < height ? 26 : 40
        }}/>
    </View>
  )
}

export { Header }