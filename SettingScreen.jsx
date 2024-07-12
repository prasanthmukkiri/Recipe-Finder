// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoPlayVideos, setAutoPlayVideos] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);
  const toggleAutoPlayVideos = () => setAutoPlayVideos(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Push Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#6200EE" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#6200EE" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Auto-play Videos</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={autoPlayVideos ? "#6200EE" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleAutoPlayVideos}
          value={autoPlayVideos}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor:'#C0C0C0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SettingsScreen;
