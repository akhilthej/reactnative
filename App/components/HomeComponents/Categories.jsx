import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoriesList = () => {
  const categories = [
    { No: '1', icon: require('./blackhole.jpg'), title: 'Web Development', path: 'Login' },
    { No: '2', icon: require('./blackhole.jpg'), title: 'Branding', path: 'Services' },
    { No: '3', icon: require('./blackhole.jpg'), title: 'Digital Marketing', path: '/category3' },
    { No: '4', icon: require('./blackhole.jpg'), title: 'Graphic Design', path: '/category4' },
    { No: '5', icon: require('./blackhole.jpg'), title: 'Mobile Apps', path: '/category5' },
    { No: '6', icon: require('./blackhole.jpg'), title: 'Branding', path: '/category6' },
    { No: '7', icon: require('./blackhole.jpg'), title: 'Advertising', path: '/category7' },
    { No: '8', icon: require('./blackhole.jpg'), title: 'More', path: '/category8' },
  ];

  const navigation = useNavigation();

  const onPressCategory = (path) => {
    navigation.navigate(path);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onPressCategory(item.path)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.No}
        contentContainerStyle={styles.list}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  list: {
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    marginBottom: 12,
    flexBasis: '24%', // 4 columns layout
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
  },
});

export default CategoriesList;
