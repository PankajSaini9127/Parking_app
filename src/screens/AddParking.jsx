import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import textFieldStyle from "../../assets/styleSheets/textField";
import MapModalBox from "../components/MapModalBox";



function AddParking({ navigation }) {
  const Theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    area: "",
    vehicleNo: "",
  });

  const [error, setError] = useState(null);

  //state form map modal box
  const [openMap, setOpenMap] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(null);

  function validate(data) {
    if (
      data.name === "" ||
      data.address === "" ||
      data.city === "" ||
      data.area === "" ||
      vehicleNo === ""
    ) {
      setError("All Fields Are Required !");
      return false;
    } else {
      return true;
    }
  }

  function handleSubmit() {
    if (validate(formData)) {
      console.log(formData);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: Theme.colors.primary }]}>
        Add New Parking
      </Text>
      {error && <Text style={styles.error}>{error}</Text>}

      <View style={{ width: "100%", gap: 20 }}>
        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
          ]}
        >
          <TextInput
            style={[textFieldStyle.inputText, { color: Theme.colors.primary }]}
            placeholder="Name"
            value={formData.name}
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, name: text });
              setError(null);
            }}
          />
        </View>

        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
          ]}
        >
          <TextInput
            style={[textFieldStyle.inputText, { color: Theme.colors.primary }]}
            placeholder="Address"
            value={formData.address}
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, address: text });
              setError(null);
            }}
          />
        </View>

        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
          ]}
        >
          <TextInput
            style={[textFieldStyle.inputText, { color: Theme.colors.primary }]}
            placeholder="City"
            value={formData.city}
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, city: text });
              setError(null);
            }}
          />
        </View>

        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
          ]}
        >
          <TextInput
            style={[textFieldStyle.inputText, { color: Theme.colors.primary }]}
            placeholder="Area"
            value={formData.area}
            keyboardType="numeric"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, area: text });
              setError(null);
            }}
          />
        </View>

        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
          ]}
        >
          <TextInput
            style={[textFieldStyle.inputText, { color: Theme.colors.primary }]}
            placeholder="Vehicle Number"
            value={formData.area}
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, vehicleNo: text });
              setError(null);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => setOpenMap(true)}
        >
        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
            styles.locationBtn
          ]}
        >
          <Text style={[styles.locationText,{color:Theme.colors.primary}]}>{selectedLocation?"View / Change Location":"Select Location"}</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.button, { backgroundColor: Theme.colors.primary }]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <MapModalBox
        isVisible={openMap}
        onClose={() => setOpenMap(false)}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </View>
  );
}

export default AddParking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  heading: {
    fontWeight: "900",
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    // backgroundColor: "#B6C4B6",
    width: "100%",
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
  },
  locationBtn:{
   paddingHorizontal:17,
   paddingVertical:0
  },
  locationText:{
    fontSize:20
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
    color: "#ffffff",
  },
  error: {
    fontSize: 16,
    lineHeight: 30,
    color: "red",
    width: "100%",
    textAlign: "left",
  },
});
