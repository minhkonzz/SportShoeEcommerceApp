import React from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native'
import { Tab } from '../components/Products/Tab'
import { Product } from '../components/Products/Product'
import { Header } from '../components/Orders/Header'
const brands = [
  {
    logo: 'https://tinyurl.com/bdez2vj7',
    brandName: 'Adidas'
  },
  {
    logo: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280733158_730643484730406_1368376008988118951_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=rfMYeCRAp_oAX_yAi_u&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnNckyevexZK8xzxeUl2596kTDgYxltAZzJ_4c8WK8yQ&oe=62B422D1',
    brandName: 'Nike'
  },
  {
    logo: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/283686868_371668008133675_8763080615885003132_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=JbsCpZlngFIAX_ujx7h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIW1Vxo0Hq6yv1t3rFjl6nVuNckB_F3q6E5LKVfFMqnbQ&oe=62B3FAED',
    brandName: 'Puma'
  },
  {
    logo: 'https://tinyurl.com/3pndux2p',
    brandName: 'Reebok'
  }
]

const products = [
  {
    productName: 'Ultraboost 2.0',
    price: 550000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX_RLR-d&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLhG8J-rIP8llKZNfrQB4MgIdw-iqDO6FvIXfiyzXplrw&oe=62B1A945'
  },
  {
    productName: 'Ultraboost 2.0',
    price: 550000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX-B5-dj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJN3UMzrQ8oz0RWAYzBGmv8Lgr5Gg_EUKx5tWtaXMJT5Q&oe=62B292DF'
  },
  {
    productName: 'Ultraboost 2.0',
    price: 550000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279472069_582436386395177_7456601121581054285_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CCdhCG5yT0oAX-J-eSY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLKIjFConGLreJGoujLryqx2DHpRL8AQHGCHmXawYBG-w&oe=62B213C1'
  },
  {
    productName: 'Ultraboost 2.0',
    price: 550000,
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279070296_3152863631622276_4080209557841722822_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1JBL-rp-Rz4AX872kzM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJML61HIAx8MQTQD27IGHz1E5p5sGAllNOQx4W3_J7qoA&oe=62B1CCDF'
  }
]

const HEADER_IMAGE = 'https://tinyurl.com/2s4bb5sh'
const TITLE = 'Sản phẩm'

const Products = () => {
  const { height, width } = useWindowDimensions()
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: '#FCFCFC',
        paddingHorizontal: width / 14
      }}
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View>
          <Header 
            title={TITLE} 
            imageRight={HEADER_IMAGE}/>
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between'
          }}>
            { brands.map((brand, index) => <Tab brand={brand} key={index.toString()} index={index}/>) }
          </View>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            { products.map((product, index) => <Product product={product} key={index.toString()} index={index}/>) }
          </View>
        </View>
      }/>
  )
}

export { Products }

