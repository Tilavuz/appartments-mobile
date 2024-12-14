import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { IAuth } from "../../interface/auth-interface";
import { storageUtils } from "../../utils/storage-utils";
import { cabinetConstants } from "../../constants/cabinet-constants";

export default function ProfileScreen() {
  const [auth, setAuth] = useState<{ auth: IAuth; token: string } | null>(null);

  useEffect(() => {
    (async () => {
      const data = await storageUtils.getItem("auth");
      setAuth(data);
    })();
  }, []);

  const menuItems = auth
    ? cabinetConstants({ type: "login" })
    : cabinetConstants({ type: "logout" });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <Link href={item.link} key={item.title} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                {item.icon}
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </Link>
          ))}
        </View>

        {auth ? (
          <Link href={"/"} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Chiqish</Text>
          </Link>
        ) : (
          <Link href={"/auth/login"} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Kirish</Text>
          </Link>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  menuContainer: {
    backgroundColor: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: '92%'
  },
  menuItemTitle: {
    marginLeft: 12,
    fontSize: 16,
    color: "#000",
  },
  menuItemValue: {
    marginRight: 8,
    color: "#666",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#3c8aff",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: 24,
  },
});
