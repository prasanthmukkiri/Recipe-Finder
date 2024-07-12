import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UserScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://your-image-url.com/profile.jpg',
  };

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    backgroundColor:'#C0C0C0'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UserScreen;
