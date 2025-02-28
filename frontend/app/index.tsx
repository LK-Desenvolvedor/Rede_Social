import React from 'react';
import { Image, StyleSheet, View, Pressable, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { HelloWave } from '../app/components/HelloWave';
import ParallaxScrollView from '../app/components/ParallaxScrollView';
import { ThemedText } from '../app/components/ThemedText';
import { ThemedView } from '../app/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.loginContainer}>
        <ThemedText type="subtitle">Já tem uma conta?</ThemedText>
        <View style={styles.loginInputs}>
          <TextInput
            style={styles.input}
            placeholder="Email ou Usuário"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
          />
          
          <Pressable style={styles.loginButton}>
            <ThemedText style={styles.loginButtonText}>Entrar</ThemedText>
          </Pressable>
        </View>
        <View style={styles.loginOptions}>
          <Pressable>
            <ThemedText style={styles.loginOptionText}>Esqueci minha senha</ThemedText>
          </Pressable>
          <Pressable>
            <ThemedText style={styles.loginOptionText}>Cadastre-se</ThemedText>
          </Pressable>
        </View>
      </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo a PINTU</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.introContainer}>
        <ThemedText type="subtitle">Pessoas Inspirando as Novas Tendências Universais</ThemedText>
        <ThemedText>
          Conecte-se com amigos e o mundo ao seu redor com PINTU.
        </ThemedText>
      </ThemedView>
      <Pressable style={styles.actionButton}>
        <FontAwesome name="plus-circle" size={32} color="white" />
      </Pressable>
      <ThemedView style={styles.featureContainer}>
        <FontAwesome name="users" size={24} color="#333" style={styles.featureIcon} />
        <View style={styles.featureTextContainer}>
          <ThemedText type="subtitle">Conectar</ThemedText>
          <ThemedText>
            Veja atualizações dos seus amigos, familiares e colegas de trabalho.
          </ThemedText>
        </View>
      </ThemedView>
      <ThemedView style={styles.featureContainer}>
        <FontAwesome name="photo" size={24} color="#333" style={styles.featureIcon} />
        <View style={styles.featureTextContainer}>
          <ThemedText type="subtitle">Compartilhar</ThemedText>
          <ThemedText>
            Compartilhe seus momentos especiais com fotos, vídeos e atualizações de status.
          </ThemedText>
        </View>
      </ThemedView>
      <ThemedView style={styles.featureContainer}>
        <FontAwesome name="search" size={24} color="#333" style={styles.featureIcon} />
        <View style={styles.featureTextContainer}>
          <ThemedText type="subtitle">Descobrir</ThemedText>
          <ThemedText>
            Explore novos conteúdos, páginas e grupos que são de seu interesse.
          </ThemedText>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  introContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: 'center', 
  },
  actionButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#3b5998',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  featureIcon: {
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  reactLogo: {
    height: 180,
    width: '100%', 
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  loginContainer: {
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
  loginInputs: {
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
  loginButton: {
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
  },
  loginButtonText: {
    color: 'white',
  },
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  loginOptionText: {
    color: '#3b5998',
  },
});