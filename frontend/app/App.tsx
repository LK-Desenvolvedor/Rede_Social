// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Tela inicial
import LoginScreen from './screens/LoginScreen'; // Tela de login
import UserProfileScreen from './screens/UserProfileScreen'; // Tela de perfil de usuário
import PostFeedScreen from './screens/PostFeedScreen'; // Tela de feed de posts
import UploadPhotoScreen from './screens/UploadPhotoScreen'; // Tela de upload de foto
import SignupScreen from './screens/SignupScreen'; // Tela de cadastro

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="PostFeed" component={PostFeedScreen} />
        <Stack.Screen name="UploadPhoto" component={UploadPhotoScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} /> {/* Adicionando a tela de cadastro */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
