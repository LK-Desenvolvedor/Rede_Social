import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen'; 
import UserProfileScreen from './screens/UserProfileScreen'; 
import PostFeedScreen from './screens/PostFeedScreen'; 
import UploadPhotoScreen from './screens/UploadPhotoScreen'; 
import SignupScreen from './screens/SignupScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="PostFeed" component={PostFeedScreen} />
        <Stack.Screen name="UploadPhoto" component={UploadPhotoScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
