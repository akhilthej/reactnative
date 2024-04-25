import React from 'react';
import { View, FlatList, Image } from 'react-native';

const ImageSlider = ({ data }) => {
  return (
    <View  className='mt-4'>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
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
