import React from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import { NewCollectionItem } from './NewCollectionItem'

const data = [
  {
    brand: 'Adidas',
    productName: 'UltraBoost 2.0', 
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
  },
  {
    brand: 'Puma',
    productName: 'Sneaker V0', 
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
  },
  {
    brand: 'Nike',
    productName: 'Summer Nik', 
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279472069_582436386395177_7456601121581054285_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CCdhCG5yT0oAX_Jbzpz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK9BeEEo4B14kPJC7ghA-ar9r9uq-a4pz-4AqV11trJjQ&oe=62B213C1'
  }
]

const NewCollection = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ marginTop: width/( width < height ?  28 :  10) }}>
      <Text style={{
        marginLeft: width/( width < height ? 15 : 20), 
        fontSize: width < height ? 20 : 28,
        fontWeight: 'bold'
      }}>Bộ sưu tập mới</Text>
      <FlatList
        contentContainerStyle={{
          height: width < height ? height / 1.88 : height * 1.18,  
          alignItems: 'center'
        }}
        key={({item, index}) => index}
        showsHorizontalScrollIndicator={false} 
        horizontal={true}
        data={data}
        renderItem={({item, index}) => <NewCollectionItem item={item} index={index}/>}/>
    </View>
  )
}

export { NewCollection }