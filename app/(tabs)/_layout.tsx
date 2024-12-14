import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#A9A9A9",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Bosh sahifa",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#3c8aff" : "#A9A9A9"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="directory"
        options={{
          title: "Katalog",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? "#3c8aff" : "#A9A9A9"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: "Savat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="basket"
              size={24}
              color={focused ? "#3c8aff" : "#A9A9A9"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Kabinet",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="man"
              size={24}
              color={focused ? "#3c8aff" : "#A9A9A9"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
