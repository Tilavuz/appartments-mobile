import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageUtils {
  async setItem({ key, value }: { key: string; value: any }) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.log(error);
    }
  }
  async getItem(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export const storageUtils = new StorageUtils();
