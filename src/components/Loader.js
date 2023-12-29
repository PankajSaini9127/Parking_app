import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";

const Loader = ({ modalVisible }) => {
  const Theme = useTheme();
  return (
    <Modal animationType="none" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Theme.colors.primary} />
          <Text style={[styles.loadingFont,{color:Theme.colors.primary}]}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  loaderContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  loadingFont: {
    fontSize: 20,
    fontWeight:"bold"
  },
});

export default Loader;
