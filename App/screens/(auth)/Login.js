import React from 'react';
import { View, Image , Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image 
        source={require('../../../assets/loginscreen.jpg')}
        className='w-full h-[400px] object-contain'  
      />

      <View className='p-8 bg-white mt-[-20px] rounded-3xl '>
        <Text className='text-[24px] text-center font-bold'>Cyber Space Digital</Text>
        <Text className='text-[14px] text-center text-slate-500  mt-2'>Grow your business online today.</Text>

        <TouchableOpacity onPress={onPress} className='p-3 bg-teal-700 rounded-md mt-20'>
          <Text className='text-[20px] text-center font-bold text-white  px-22' >Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
