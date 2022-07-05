import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Review } from './Review' 
import Ionicons from 'react-native-vector-icons/Ionicons'

export function Reviews() {

  const [ visible, setVisible ] = useState(false);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(!visible)}>
          <Text style={styles.title}>Tất cả đánh giá</Text>
          <Ionicons name='chevron-down' size={22}/>
        </TouchableOpacity>
        {
          visible &&
          <View style={styles.dropdown}>
            <Review/>
            <Review/>
          </View>
        }
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    paddingVertical: 4
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#5F5E5E'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    justifyContent: 'space-between'
  },
  dropdown: { alignItems: 'center' }
});