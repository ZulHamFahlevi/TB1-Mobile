import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import HomeScreen from './screen/HomeScreen';
import SettingScreen from './screen/SettingScreen';
import Chat1 from './screen/TabScreen/ChatScreen/Chat1';
import Chat2 from './screen/TabScreen/ChatScreen/Chat2';
import Chat3 from './screen/TabScreen/ChatScreen/Chat3';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name='Chat1' component={Chat1}/>
        <Stack.Screen name='Chat2' component={Chat2}/>
        <Stack.Screen name='Chat3' component={Chat3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;