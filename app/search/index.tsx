import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <EvilIcons style={styles.searchIcon} name="search" size={32} color="black" />
        <TextInput style={styles.searchInput} autoFocus={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4
  },
  searchContainer: {
    borderWidth: 1,
    marginTop: 6,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    height: '100%',
  }
});
