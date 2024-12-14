import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MenuCatalog } from "../../components/menu-catalog";
import { MaterialIcons } from "@expo/vector-icons"; // MaterialIcons kutubxonasini import qilish

const menuItems = [
  {
    id: "1",
    title: "Toshkent shahri",
    onPress: () => console.log("Toshkent shahri pressed"),
  },
  {
    id: "2",
    title: "Andijon viloyati",
    onPress: () => console.log("Andijon viloyati pressed"),
  },
  {
    id: "3",
    title: "Buxoro viloyati",
    onPress: () => console.log("Buxoro viloyati pressed"),
  },
  {
    id: "4",
    title: "Jizzax viloyati",
    onPress: () => console.log("Jizzax viloyati pressed"),
  },
  {
    id: "5",
    title: "Qashqadaryo viloyati",
    onPress: () => console.log("Qashqadaryo viloyati pressed"),
  },
  {
    id: "6",
    title: "Navoiy viloyati",
    onPress: () => console.log("Navoiy viloyati pressed"),
  },
  {
    id: "7",
    title: "Namangan viloyati",
    onPress: () => console.log("Namangan viloyati pressed"),
  },
  {
    id: "8",
    title: "Samarqand viloyati",
    onPress: () => console.log("Samarqand viloyati pressed"),
  },
  {
    id: "9",
    title: "Sirdaryo viloyati",
    onPress: () => console.log("Sirdaryo viloyati pressed"),
  },
  {
    id: "10",
    title: "Surxondaryo viloyati",
    onPress: () => console.log("Surxondaryo viloyati pressed"),
  },
  {
    id: "11",
    title: "Xorazm viloyati",
    onPress: () => console.log("Xorazm viloyati pressed"),
  },
  {
    id: "12",
    title: "Farg'ona viloyati",
    onPress: () => console.log("Farg'ona viloyati pressed"),
  },
];

export default function DirectoryScreen() {
  return (
    <View style={styles.container}>
      <MenuCatalog items={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
