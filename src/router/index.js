import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, MentorKu, MenteeKu, Profil, Login } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MentorKu"
        component={MentorKu}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MenteeKu"
        component={MenteeKu}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
