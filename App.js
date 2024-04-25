import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MobileTabNavigator from './App/components/Navbar/NavMobile';
import { Text, View } from 'react-native';
import Login from './App/screens/(auth)/Login';
import { ClerkProvider, SignedOut, SignedIn } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Z3JhdGVmdWwtZmlzaC05LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        
        
        <SignedIn>
        <NavigationContainer>
        <MobileTabNavigator />
          
        </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>

      </View>
    </ClerkProvider>
  );
}
