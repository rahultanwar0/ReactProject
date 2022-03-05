import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}
export default Tabs;
