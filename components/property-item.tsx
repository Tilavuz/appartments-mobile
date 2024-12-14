import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

interface ProductCardProps {
  id: string;
  title: string;
  photo: string;
  targetAudience: string;
  currentPrice: number;
}

export const ProductItem: React.FC<ProductCardProps> = ({
  id,
  title,
  photo,
  targetAudience,
  currentPrice,
}) => {
  return (
    <Link href={`property/${id}`} style={styles.card}>
      <Image source={{ uri: photo }} style={styles.photo} resizeMode="cover" />
      <View style={styles.wrapper}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.targetAudienceAntainer}>
          <Text>
            6 xonali
          </Text>
          <Text style={styles.targetAudience}>
            {targetAudience} uchun
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>
            {currentPrice.toLocaleString()} so'm
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
    margin: 6
  },
  photo: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  targetAudienceAntainer: {
    backgroundColor: "#FFE600",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  targetAudience: {
    fontSize: 12,
    fontWeight: "500",
    color: "#333",
  },
  priceContainer: {
    marginBottom: 6,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  wrapper: {
    padding: 4
  }
});
