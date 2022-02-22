import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import WatchListScreen from "../screens/WatchListScreen";
import UserScreen from "../screens/UserScreen";

export const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="home" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Assets"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Fontisto name="graphql" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
