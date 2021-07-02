import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image style={styles.image} source={{url: product.imgURL}} />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.title}> {product.title} </Text>
        <Text style={styles.price}> {product.price} </Text>
        <Text style={styles.inStock}>
          {product.inStock === true ? '' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};
export default ProductCard;
