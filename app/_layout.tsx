import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]" options={{ headerTitle: "" }} />
        <Stack.Screen name="search/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/login"
          options={{ headerTitle: "Tizimga kirish" }}
        />
      </Stack>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26
  }
})