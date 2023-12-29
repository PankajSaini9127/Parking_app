import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import textFieldStyle from "../../../assets/styleSheets/textField";
import MapModalBox from "../../components/MapModalBox";
import { addNewParking } from "../../services/parkingAPI";
import { useDispatch, useSelector } from "react-redux";
import setLoading from "../../store/action/loadingAction";
import CustomAlert from "../../components/utils/Alert";



function AddParking({ navigation }) {

  const auth = useSelector(s=>s.auth);

  const Theme = useTheme();

  const [formData, setFormData] = useState({
    state: "",
    district:"",
    address: "",
    city: "",
    slot: "",
    location: null
  });

  const token = `Bearer ${auth.token}`;

  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  //state form map modal box
  const [openMap, setOpenMap] = useState(false);


  function validate(data) {
    if (
      data.state === "" ||
      data.address === "" ||
      data.city === "" ||
      data.district === "" ||
      data.slot === "" ||
      data.location === ""
      ){
      setError("All Fields Are Required !");
      return false;
    } else {
      return true;
    }
  }

 async function handleSubmit() {
  try {
    if (validate(formData)) {
      dispatch(setLoading(true))
      const result = await addNewParking(token,formData)
      dispatch(setLoading(false))
        
      if(result.status === 200){
        CustomAlert(
          (msg = result.message),
          (success = false),
          (title = "Parking Added.")
        );
        setTimeout(()=>{
           navigation.goBack()
        },1000)
      }else{
        CustomAlert(
          (msg = result.message),
          (success = false),
          (title = "Something Went Wrong.")
        );
      }
      
    }
  } catch (error) {
    console.log("Error While calling Add Parking function at Add New Parking",error);
    CustomAlert(
      (msg = result.message),
      (success = false),
      (title = "Something Went Wrong.")
    );
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
            placeholder="Enter State"
            value={formData.state}
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, state: text });
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
            placeholder="Enter District"
            value={formData.district}
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, district: text });
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
            placeholder="Slot"
            value={formData.slot}
            keyboardType="numeric"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => {
              setFormData({ ...formData, slot: text });
              setError(null);
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => setOpenMap(true)}
          style=
          {{padding:0}}
        >
        <View
          style={[
            textFieldStyle.inputView,
            { borderColor: Theme.colors.primary },
            styles.locationBtn
          ]}
        >
          <Text style={[styles.locationText,{color:Theme.colors.primary}]}>{formData.location?"View / Change Location":"Select Location"}</Text>
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
        formData={formData}
        setFormData={setFormData}
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
