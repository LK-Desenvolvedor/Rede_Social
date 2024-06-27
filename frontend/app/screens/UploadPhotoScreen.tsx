// screens/UploadPhotoScreen.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const UploadPhotoScreen = () => {
  const handleUpload = () => {
    // Lógica para upload de foto aqui
    console.log('Upload photo pressed');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload de Foto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3b5998',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UploadPhotoScreen;
