import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import { useUser } from '@clerk/clerk-expo'

const Profile = () => {
  const {user}=useUser();
  const { isLoaded, signOut } = useAuth();

  return (
    <View>
    <Image source={{ uri: user?.imageUrl }} className='w-full h-[400px] object-contain' />

  

      <View className='p-8 bg-white mt-[-20px] rounded-3xl '>
        <Text className='text-[24px] text-center font-bold'>Your Dashboard</Text>
        <Text className='text-[14px] text-center text-slate-500  mt-2'>Thanks For Choosing us.</Text>

        <TouchableOpacity onPress={() => {signOut();}} className='p-3 bg-teal-700 rounded-md mt-20'>
          <Text className='text-[20px] text-center font-bold text-white  px-22' >Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>

   

         
  )
}

export default Profile;
