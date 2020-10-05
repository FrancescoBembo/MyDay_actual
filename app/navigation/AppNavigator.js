import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import MemoryNavigator from "./MemoryNavigator";
import AddMemoryBtn from "./AddMemoryBtn";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Memories"
      component={MemoryNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="notebook" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddMemoryBtn onPress={() => navigation.navigate("Add")} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="user" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
