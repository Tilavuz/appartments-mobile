import { EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchLink() {
  return (
    <Link href="/search" style={styles.header}>
      <View style={styles.searchButton}>
        <EvilIcons name="search" size={24} color="black" />
      </View>
      <View style={styles.searchText}>
        <Text>Qidiruv</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    borderWidth: 1,
    margin: 4,
    borderRadius: 10,
    height: 35,
    paddingLeft: 4,
  },
  searchButton: {
    width: 30,
    top: 3,
    height: "100%",
    justifyContent: "center",
  },
  searchText: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
});
