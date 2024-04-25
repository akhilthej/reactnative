import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const {user}=useUser();
  return (
    <View>
    {/*User info section */}
    <View className='flex flex-row items-center gap-4'>
     
      <Image source={{ uri: user?.imageUrl }} className='rounded-full w-12 h-12' />

      <View>
        <Text className='text-[16px]'> Welcome </Text>
        <Text className='text-[20px] font-bold'>{user?.fullName}</Text>
      </View>
    </View>

    {/*Search */}
    <View className='p-2 px-5 mt-5 flex flex-row items-center bg-white rounded-full'>
    <Ionicons name='search' size={24} color='black' />
        <TextInput placeholder='Search' className='ml-2 text-[18px]'
            onChangeText={(value)=>console.log(value)}
        />
    </View>

    </View>
  )
}

export default Header