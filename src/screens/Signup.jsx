import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from "react-native";

import { useTheme } from "@react-navigation/native";
import textFieldStyle from "../../assets/styleSheets/textField";
import { register } from "../services/AuthAPI";
import CustomAlert from "../components/utils/Alert";
import { useDispatch } from "react-redux";
import setLoading from "../store/action/loadingAction";

//icons
import { Ionicons } from '@expo/vector-icons'; 

const SignUp = ({ navigation }) => {
  const [formError, setFormError] = useState("");

  const [isVisible, setIsVisible] = useState({
    password: false,
    cPassword: false,
  });

  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    password: "",
    cPassword: "",
    email: "",
  });

  //validation
  function validate(data) {
    let error;
    if (data.name === "") {
      error = "Please Enter Name!";
    } else
    if (data.email === "") {
      error = "Please Enter Email!";
    }else if (data.password === "") {
      error = "Please Enter Password!";
    } else if (data.cPassword === "") {
      error = "Please Confirm Password!";
    } else if (data.password !== data.cPassword) {
      error = "Password Not Match!";
    }
    setFormError(error);

    if (error) {
      return false;
    } else {
      return true;
    }
  }

  async function handleSignUp(){
    try{
      if (validate(data)) {
        dispatch(setLoading(true));
        const result = await register(data);
        dispatch(setLoading(false));
        if(result.status === 203){
          CustomAlert(msg=result.message, success=false, title="Register Failed.")
        }else if( result.status === 200){
          CustomAlert(msg="Login Now", success=true, title="Register Success.",navigateFun= ()=>navigation.navigate("Login"))
        }else{
          CustomAlert(msg=result.message, success=false, title="Register Failed.")
        }
        // navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
      CustomAlert(msg=result.message, success=false, title="Something Went Wrong.");
    }
   
  };

  const Theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/parking-bg.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Sign Up</Text>
        {formError && <Text style={styles.errorText}>{formError}</Text>}

        <View style={{ width: "100%", gap: 20 }}>
          <View
            style={[
              textFieldStyle.inputView,
              { borderColor: Theme.colors.primary },
            ]}
          >
            <TextInput
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
              ]}
              s
              placeholder="Name"
              placeholderTextColor={Theme.colors.primary}
              onChangeText={(text) => {
                setData({ ...data, name: text });
                setFormError("");
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
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
              ]}
              placeholder="Email"
              placeholderTextColor={Theme.colors.primary}
              onChangeText={(text) => {
                setData({ ...data, email: text });
                setFormError("");
              }}
            />
          </View>

          <View
            style={[
              textFieldStyle.inputView,
              { borderColor: Theme.colors.primary },
              styles.passwordField
            ]}
          >
            <TextInput
              secureTextEntry={!isVisible.password}
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
              ]}
              value={data.password}
              placeholder="Password"
              placeholderTextColor={Theme.colors.primary}
              onChangeText={(text) => {
                setData({ ...data, password: text });
                setFormError("");
              }}
            />
              <Ionicons onPress={()=>setIsVisible({...isVisible,password:!isVisible.password})} name={isVisible.password? "eye-off-outline":"eye-outline"} size={24} style={{alignSelf:"center"}} color={Theme.colors.primary} />
          </View>

          <View
            style={[
              textFieldStyle.inputView,
              { borderColor: Theme.colors.primary },
              styles.passwordField
            ]}
          >
            <TextInput
              secureTextEntry={!isVisible.cPassword}
              value={data.cPassword}
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
              
              ]}
              placeholder="Confirm Password"
              placeholderTextColor={Theme.colors.primary}
              onChangeText={(text) => {
                setData({ ...data, cPassword: text });
                setFormError("");
              }}
            />
            <Ionicons onPress={()=>setIsVisible({...isVisible,cPassword:!isVisible.cPassword})} name={isVisible.cPassword? "eye-off-outline":"eye-outline"} size={24} style={{alignSelf:"center"}} color={Theme.colors.primary} />
          </View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: Theme.colors.primary }]}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.accExitsText}>Already Have An Account? </Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[styles.accExitsBTN, { color: Theme.colors.primary }]}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  contentContainer: {
    flex: 2,
    padding: 25,
  },

  image: {
    resizeMode: "cover", // or 'contain' or 'stretch'
  },

  heading: {
    fontWeight: "900",
    fontSize: 25,
    marginBottom: 20,
    lineHeight: 30,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    paddingVertical: 5,
    color: "red",
    fontWeight: "700",
  },
  passwordField:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  button: {
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
    color: "#ffffff",
  },
  accExitsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 25,
  },
  accExitsBTN: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 18,
    paddingLeft: 5,
  },
});

export default SignUp;
