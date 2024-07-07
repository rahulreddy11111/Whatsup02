import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chartlistitem from '../components/Chatlistitem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';

import NotImplementedScreen from '../Screens/NotImplementedScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Updates') {
            iconName = focused ? 'update' : 'update';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Calls') {
            iconName = focused ? 'call-outline' : 'call-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Communities') {
            iconName = focused ? 'people-outline' : 'people-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
            return <SimpleLineIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#f15454', // Color of the active tab icon
        tabBarInactiveTintColor: '#000', // Color of the inactive tab icon
        tabBarStyle: {
          backgroundColor: '#fff', // Background color of the tab bar
        },
      })}
    >
      <Tab.Screen name="Updates" component={NotImplementedScreen} />
      <Tab.Screen name="Calls" component={NotImplementedScreen} />
      <Tab.Screen name="Communities" component={NotImplementedScreen} />
      <Tab.Screen name="Chats" component={Chartlistitem} />
      <Tab.Screen name="Settings" component={NotImplementedScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;