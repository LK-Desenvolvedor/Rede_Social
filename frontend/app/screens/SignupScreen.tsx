import React, { useState } from 'react';
import { Image, StyleSheet, View, Pressable, TextInput, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ParallaxScrollView from '../components/ParallaxScrollView';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignupScreen'>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/auth/signup', {
        email,
        password,
        name,
      });

      const { token } = response.data;
      await AsyncStorage.setItem('token', token);

      Alert.alert('Cadastro bem-sucedido', 'Seu cadastro foi realizado com sucesso');
      navigation.navigate('HomeScreen'); // Redirecionar para 'HomeScreen' após o cadastro

    } catch (error) {
      console.error('Erro no cadastro:', error);
      Alert.alert('Erro no cadastro', 'Ocorreu um erro durante o cadastro. Por favor, tente novamente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/images/logo.png')} style={styles.logo} />}
    >
      <View style={styles.signupContainer}>
        <ThemedText type="subtitle">Crie sua conta</ThemedText>
        <View style={styles.signupInputs}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable style={styles.signupButton} onPress={handleSignup} disabled={loading}>
            <ThemedText style={styles.signupButtonText}>{loading ? 'Aguarde...' : 'Cadastrar'}</ThemedText>
          </Pressable>
        </View>
        <View style={styles.loginOptions}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <ThemedText style={styles.loginOptionText}>Já tem uma conta? Faça login</ThemedText>
          </Pressable>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 180,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  signupContainer: {
    position: 'relative',
    top: 20,
    right: 10,
    width: '40%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  signupInputs: {
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  signupButton: {
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
  },
  signupButtonText: {
    color: 'white',
  },
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  loginOptionText: {
    color: '#3b5998',
  },
});

export default SignupScreen;
