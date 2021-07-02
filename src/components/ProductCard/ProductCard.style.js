import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    margin: 5,
    borderRadius: 5,
    padding: 4,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    margin: 10,
  },
  imageArea: {
    flex: 1,
  },
  inner_container: {
    flex: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    color: 'gray',
    fontSize: 15,
    margin: 3,
  },
  inStock: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
