import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UserScreen from './UserScreen';
import SettingScreen from './SettingScreen';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerShown:false
    }} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="HomePage" component={TabNav} />
    </Stack.Navigator>
    
  );
};

const Tab=createBottomTabNavigator();
const TabNav=()=> {
  return(
    <Tab.Navigator screenOptions={{
      
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor:'black',
      tabBarLabelStyle:{
        fontSize:15,
        paddingBottom:5,
        fontWeight:600,
        
        
      },
      tabBarStyle:{
        height:60,
        padding:0
      }
    }}>
      <Tab.Screen name='Homepage' component={HomePage} options={{
        headerShown:false,
        
        
          tabBarIcon:({focused})=> (
            <FontAwesome
            name='home'
           size={30}
           color={focused ? 'blue' : 'black'}
            />
          ),

          tabBarLabelStyle:{
            fontSize:15,
            paddingBottom:5,
            fontWeight:600,
          }
  




        
        
      }}/> 

      <Tab.Screen name='User' component={UserScreen}
      options={{
        tabBarIcon:({focused})=> (
          <FontAwesome
            name='user'
           size={30}
           color={focused ? 'blue' : 'black'}
            />
        ),
        headerShown:false,

      }}/>

<Tab.Screen name='settings' component={SettingScreen}
      options={{
        tabBarIcon:({focused})=> (
          <Ionicons
          name='settings'
          size={30}
          color={focused ? 'blue' : 'black'}
          
          />
        ),
        headerShown:false,

      }}/>
    </Tab.Navigator>
  )
}

function App() {
  return(
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  )
}

export default App;
