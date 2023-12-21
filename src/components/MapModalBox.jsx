// MyModal.js
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, View, StyleSheet, Text, Button, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const MapModalBox = ({
  isVisible,
  onClose,
  selectedLocation,
  setSelectedLocation,
}) => {
  const Theme = useTheme();


  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({latitude,longitude});onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.heading, { color: Theme.colors.primary }]}>
            Select Location
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: selectedLocation? selectedLocation.latitude : 26.90226190048606,
              longitude: selectedLocation? selectedLocation.longitude : 75.78641842294742,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >

            {selectedLocation  && (
              <Marker coordinate={selectedLocation} title="Selected Location" />
            )}
          </MapView>
          <View style={styles.btnContainer}>
            
            {/* <Pressable
               onPress={()=>{setSelectedLocation(location);onClose();setLocation(null)}}
              style={[
                styles.backBtn,
                { backgroundColor: Theme.colors.primary }
              ]}
            >
              <Text style={styles.btnText}>Select</Text>
            </Pressable> */}
            <Pressable
                  onPress={()=>{onClose();}}
              style={[
                styles.backBtn,
                { backgroundColor: "rgba(255,0,0,0.7)" }
              ]}
             
            >
              <Text style={styles.btnText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 5,
    width: "100%",
    elevation: 5,
    borderRadius: 10,
    height: "90%",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "900",
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 500,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  backBtn: {
    margin: 5,
    alignSelf: "flex-end",
    marginRight: 10,
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fff",
  },
});

export default MapModalBox;
