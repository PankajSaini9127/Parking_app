import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

import { useTheme } from "@react-navigation/native";
import textFieldStyle from "../../assets/styleSheets/textField";
import { auth } from "../services/AuthAPI";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/action/authAction";
import setLoading from "../store/action/loadingAction";
import CustomAlert from "../components/utils/Alert";
//icons
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({ email: "", password: "" });

  const [formError, setFormError] = useState();

  const Theme = useTheme();

  const dispatch = useDispatch();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)


  //validation
  function validate(data) {
    let error;
    if (data.email === "" && data.password === "") {
      error = "Please Enter Creds!";
    } else if (data.email === "") {
      error = "Please Enter UserId!";
    } else if (data.password === "") {
      error = "Please Enter Password!";
    }

    setFormError(error);

    if (!error) {
      return true;
    } else {
      return false;
    }
  }

  async function handleLogin() {
    try {
      //validation
      if (validate(data)) {
        dispatch(setLoading(true));
        const result = await auth(data);
        dispatch(setLoading(false));
        if (result.status === 203) {
          CustomAlert(
            (msg = result.message),
            (success = false),
            (title = "Something Went Wrong.")
          );
        } else if (result.status === 200) {
          dispatch(setLogin(result));
          navigation.navigate("list");
        } else {
          CustomAlert(
            (msg = result.message),
            (success = false),
            (title = "Something Went Wrong.")
          );
        }
      } else {
        console.log("validation error login form");
      }
    } catch (error) {
      console.log("Error While calling Login Function ", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/parking-bg.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Sign In</Text>
        {formError && <Text style={styles.errorText}>{formError}</Text>}

        <View style={{ width: "100%", gap: 20 }}>
          <View
            style={[
              textFieldStyle.inputView,
              { borderColor: Theme.colors.primary},
            ]}
          >
            <TextInput
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
              ]}
              placeholder="User"
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
              secureTextEntry={!isVisiblePassword}
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
      
              ]}
              placeholder="Password"
              placeholderTextColor={Theme.colors.primary}
              onChangeText={(text) => {
                setData({ ...data, password: text });
                setFormError("");
              }}
            />
               <Ionicons onPress={()=>setIsVisiblePassword(!isVisiblePassword)} name={isVisiblePassword? "eye-off-outline":"eye-outline"} size={24} style={{alignSelf:"center"}} color={Theme.colors.primary} />
          </View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: Theme.colors.primary }]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <Text style={styles.textRegister}>Don't Have An Account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={[styles.resgisterBtn, { color: Theme.colors.primary }]}
              >
                Register Now
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
    flex: 1.5,
    padding: 25,
  },
  image: {
    resizeMode: "cover", // or 'contain' or 'stretch'
  },
  heading: {
    fontWeight: "900",
    fontSize: 25,
    marginBottom: 20,
    lineHeight: 50,
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
  textRegister: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 25,
  },
  resgisterBtn: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 18,
    paddingLeft: 5,
  },
});

export default LoginScreen;
