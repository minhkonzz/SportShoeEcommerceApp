import React from 'react'
import { View, Text, Image, TouchableOpacity ,useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PopularItem } from './PopularItem'

const adidas = [
  {
    productName: 'UltraBoost 2.0',
    price: 550000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
  },
  {
    productName: 'UltraBoost 3.0',
    price: 650000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279070296_3152863631622276_4080209557841722822_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1JBL-rp-Rz4AX_IKByZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8NQMRBNxE-id1-KhhbEq2J-cUQp_Y2sdmk3enV5Edqw&oe=62B1CCDF'
  },
  {
    productName: 'UltraBoost 4.0',
    price: 850000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
  }
]

const brands = [
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/280733158_730643484730406_1368376008988118951_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=rfMYeCRAp_oAX_OBvj3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLjEXSvF2Id1jF6DHPX37CgkUJ-QLZLzIScU2dfe2VH-Q&oe=62B422D1',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/283686868_371668008133675_8763080615885003132_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=JbsCpZlngFIAX-02zTL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJc4RYuydPAT39qntdvlGiGitgxRI37nm8q3xqOd17imw&oe=62B3FAED'
]

const BrandTabs = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flexDirection: 'row',
      marginTop: height/( width < height ? 40 : 18),
      paddingLeft: width/( width < height ? 15 : 20)
    }}>
    {
      brands.map((source, index) => 
        <TouchableOpacity
          key={index}
          style={{
            width: width < height ? 90 : width / 7,
            height: width < height ? 50 : height / 6.5,
            marginLeft: index > 0 ? (width < height ? 15 : width / 32) : 0,
            borderRadius: 10
          }}>
          <LinearGradient
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }} 
            colors={['#7f8c8d', '#000000']}
            useAngle={true}
            angle={150}>
            <Image 
              source={{uri: source}}
              style={{
                width: '42%',
                height: '70%'
              }}/>
          </LinearGradient>
        </TouchableOpacity>)
    }
    </View>
  )
}

const PopularList = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      alignItems: 'center'
    }}>
      { adidas.map((item, index) => <PopularItem key={index} item={item}/>) }
    </View>
  )
}

const Popular = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{
        paddingLeft: width/( width < height ?  15 : 20),
        fontSize: width < height ? 20 : 28,
        fontWeight: 'bold'
      }}>Nổi bật</Text>
      <BrandTabs />
      <PopularList />
    </View>
  )
}

export { Popular }