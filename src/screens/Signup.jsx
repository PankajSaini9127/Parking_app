import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useTheme } from "@react-navigation/native";
import textFieldStyle from "../../assets/styleSheets/textField";

const SignUp = ({ navigation }) => {
  const [formError, setFormError] = useState("");

  const [data, setData] = useState({
    user: "",
    password: "",
    cPassword: "",
    email: "",
  });

  //validation
  function validate(data) {
    let error;

    if (data.email === "") {
      error = "Please Enter UserId!";
    } else if (data.password === "") {
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

  const handleSignUp = () => {
    if (validate(data)) {
      navigation.navigate("Login");
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
            ]}
          >
            <TextInput
              secureTextEntry
              style={[
                textFieldStyle.inputText,
                { color: Theme.colors.primary },
              ]}
              s
              value={data.password}
              placeholder="Password"
              placeholderTextColor={Theme.colors.primary}
              onChangeText={(text) => {
                setData({ ...data, password: text });
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
              secureTextEntry
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
    lineHeight: 30,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    paddingVertical: 5,
    color: "red",
    fontWeight: "700",
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
