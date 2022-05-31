import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import { Review } from './Review'

const Reviews = () => {
  const [visible, setVisible] = React.useState(false);
  const { height, width } = useWindowDimensions() 
    return (
      <View style={{ 
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
        paddingVertical: width < height ? 4 : 10
      }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(!visible)}>
          <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: width < height ? 15 : 18,
              color: '#5F5E5E'
            }}>Tất cả đánh giá</Text>
            <Image style={{
              width: 20,
              height: 20
            }} source={{uri: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/280289988_2132978086862328_8980368610441124221_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=92-2Z07jVH4AX8FxhSH&_nc_ht=scontent.fhan14-1.fna&oh=03_AVIAGgdITtcr2rBwkf5fc5d44qgcv4p64KQWjqjAJH6Kjg&oe=62B59187'}}/>
          </View>
        </TouchableOpacity>
        {
          visible ?
          <View style={styles.dropdown}>
            <Review/>
            <Review/>
          </View> : null 
        }
      </View>
    )
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  dropdown: {
    alignItems: 'center'
  }
});

export { Reviews }