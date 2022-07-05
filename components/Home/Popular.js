import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PopularItem } from './PopularItem'

const brands = [
  {
    id: 'AD',
    name: 'Adidas',
    whiteLogo: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/280634650_553216096212960_8785340913936715902_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ZTZFRSTi34cAX8M-bib&_nc_ht=scontent.fhan4-1.fna&oh=03_AVIXr_sYv-IHMA0FqK4TDHXeute-FR-0qWgUO8VCNJRGuw&oe=62DA1A93',
    blackLogo: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/282573092_423637552657770_2604085161208752896_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1a9PJAlUvG0AX9UIHUW&_nc_ht=scontent-hkt1-2.xx&oh=03_AVLKvHe0yKlhGQClb3Q7dv9avFqIrHp7O96QHyAEPqNfDA&oe=62DD596A',
    list: [
      {
        productName: 'Adidas 1',
        price: 550000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
      },
      {
        productName: 'Adidas 2',
        price: 650000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279070296_3152863631622276_4080209557841722822_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1JBL-rp-Rz4AX_IKByZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8NQMRBNxE-id1-KhhbEq2J-cUQp_Y2sdmk3enV5Edqw&oe=62B1CCDF'
      },
      {
        productName: 'Adidas 3',
        price: 850000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
      }
    ]
  },
  {
    id: 'NK',
    name: 'Nike',
    whiteLogo: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/283340313_545054336988531_6933418650932408952_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9Rht6_DPyoIAX_7QffL&_nc_ht=scontent-hkt1-1.xx&oh=03_AVIy2Ff7jHJZdLDJHDqrIQ17ngo-84NX5rZsGdsZMmnWQQ&oe=62DA2D5C',
    blackLogo: 'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/283851984_1183779499112988_6398595049456864338_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wKTh_ZBleXYAX_XiSWj&_nc_ht=scontent.fhan3-4.fna&oh=03_AVJzjOiJiAagvvHEmKZn2aymf-ojX8u7H_05oPtatWQeqA&oe=62DD1A9F',
    list: [
      {
        productName: 'Nike 1',
        price: 550000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
      },
      {
        productName: 'Nike 2',
        price: 650000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279070296_3152863631622276_4080209557841722822_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1JBL-rp-Rz4AX_IKByZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8NQMRBNxE-id1-KhhbEq2J-cUQp_Y2sdmk3enV5Edqw&oe=62B1CCDF'
      },
      {
        productName: 'Nike 3',
        price: 850000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
      }
    ]
  },
  {
    id: 'PM',
    name: 'Puma',
    whiteLogo: 'https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/280763917_2964760210336371_831353373187040640_n.png?stp=cp0_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=joY7pPK_yZIAX_FRTS9&_nc_ht=scontent.fhan4-3.fna&oh=03_AVJ8qSEvj7yToU6AHVpxDIrEyCF5XnjcdzxEi5X5DInS0Q&oe=62DCC799',
    blackLogo: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/279585785_330828592535658_1382385321872932466_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ujuHuZMJDq8AX_6WldM&_nc_ht=scontent.fhan4-1.fna&oh=03_AVKGnWvEvUI5lyOKcxkKuCA3QfaIJBic17T8CvoRMzOs8w&oe=62D972DD',
    list: [
      {
        productName: 'Puma 1',
        price: 550000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
      },
      {
        productName: 'Puma 2',
        price: 650000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279070296_3152863631622276_4080209557841722822_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1JBL-rp-Rz4AX_IKByZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8NQMRBNxE-id1-KhhbEq2J-cUQp_Y2sdmk3enV5Edqw&oe=62B1CCDF'
      },
      {
        productName: 'Puma 3',
        price: 850000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
      }
    ]
  },
  {
    id: 'DS',
    name: 'Desona',
    whiteLogo: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/284187926_1197390091009847_1646731980000511618_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MvR7CltKjxoAX8P71Ad&_nc_ht=scontent-hkt1-2.xx&oh=03_AVIgHZ1TgOPO37-el1D4sR98g0w4AxZU5VH0HlA4Ha17Vw&oe=62DC5C16',
    blackLogo: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/279585785_825254801769052_4663690326750525944_n.png?stp=cp0_dst-png&_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IbdAQRM9NT8AX9rfNut&_nc_ht=scontent-hkt1-2.xx&oh=03_AVKf2NFfBd5I6mps7HP-CwOXIeQVKcn0jZ78VidMKSEmeA&oe=62DCB7FD',
    list: [
      {
        productName: 'Desona 1',
        price: 550000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/280553786_536314018053209_1557912545019101983_n.png?stp=dst-png_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kHIhT1I66gcAX8U2zyX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy8z72tmAImD8pmITMsBV4GDPkhakMZqtLfB7XYenoEg&oe=62B1A945'
      },
      {
        productName: 'Desona 2',
        price: 650000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/279070296_3152863631622276_4080209557841722822_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1JBL-rp-Rz4AX_IKByZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8NQMRBNxE-id1-KhhbEq2J-cUQp_Y2sdmk3enV5Edqw&oe=62B1CCDF'
      },
      {
        productName: 'Desona 3',
        price: 850000,
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/281298551_550377153271714_8055113135333945283_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3MiEMw8CV_QAX85oXji&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIfkS9007SnLzNXBccOj9UtL0z0iFGLsGf1hpKr-6ZMtg&oe=62B292DF'
      }
    ]
  }
]

function PopularList() {

  const [ brandIndex, setBrandIndex ] = useState(0)

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={styles.tabsContainer}>
      {
        brands.map((brand, index) => 
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={[styles.tab, { marginLeft: index > 0 ? 14 : 0 }]}
            onPress={() => setBrandIndex(index)}>
            <LinearGradient
              style={styles.gradientColor} 
              colors={index === brandIndex ? ['#7f8c8d', '#000000'] : ['#ffffff', '#ffffff']}
              useAngle={true}
              angle={155}>
              <Image 
                source={{uri: index === brandIndex ? brand.whiteLogo : brand.blackLogo}} 
                style={styles.logo}/>
            </LinearGradient>
          </TouchableOpacity>
        )
      }
      </View>
      { brands[brandIndex].list.map((item, index) => <PopularItem key={index} item={item}/>) }
    </View>
  )
}

export function Popular() {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>Nổi bật</Text>
      <PopularList />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 24, 
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 18
  },
  tab: {
    width: 80,
    height: 48,
    borderRadius: 14
  },
  gradientColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  logo: {
    width: '45%',
    height: '74%'
  }
})