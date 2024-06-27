// screens/PostFeedScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed de Posts</Text>
      {/* Implemente a lógica para mostrar os posts */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PostFeedScreen;
