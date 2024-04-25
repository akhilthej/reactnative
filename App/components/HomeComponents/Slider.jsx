import React from 'react';
import { View, FlatList, Image } from 'react-native';


const data = [
  { id: '1', image: require('./blackhole.jpg') },
  { id: '2', image: require('./blackhole.jpg') },
  { id: '3', image: require('./blackhole.jpg') },
  // Add more images as needed
];

const ImageSlider = () => {
  return (
    <View className='mt-4'>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id} // Add keyExtractor
        renderItem={({ item }) => (
          <Image className='rounded-lg h-[200px] w-[330px] mr-3 object-cover' source={item.image} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};



export default ImageSlider;
