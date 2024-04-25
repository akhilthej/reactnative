import React from 'react';
import { View } from 'react-native';
import Header from '../components/HomeComponents/Header';
import Slider from '../components/HomeComponents/Slider';
import CategoriesList from '../components/HomeComponents/Categories';

// Define image data
const imageData = [
  { id: '1', image: require('../components/HomeComponents/blackhole.jpg') },
  { id: '2', image: require('../components/HomeComponents/blackhole.jpg') },
  { id: '3', image: require('../components/HomeComponents/blackhole.jpg') },
  { id: '3', image: require('../components/HomeComponents/blackhole.jpg') },
  // Add more images as needed
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Header />

     {/* Pass imageData as a prop to Slider */}
     <Slider data={imageData} />
     <CategoriesList />
    </View>
  );
};

export default HomeScreen;
