import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useTheme } from '@react-navigation/native';

const SignUp = ({ navigation }) => {
  const [formError,setFormError] = useState()
  
  const [data, setData] = useState({
    user: "",
    password: "",
    cPassword: "",
    email: "",
  });

  const handleSignUp = () => {
    console.log(
      "Logging in with:",
      data,
      data.user === "Pankaj",
      data.password === "ravi"
    );
    if (data.user === "Pankaj" && data.password === "ravi") {
      console.log("data matched");
      navigation.navigate("Home");
    } else {
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
        {
          formError &&   <Text style={styles.errorText}>{formError}</Text>
        }
        <View style={[styles.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            style={[styles.inputText,{color:Theme.colors.primary}]}s
            placeholder="Email"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => setData({ ...data, email: text })}
          />
        </View>

        <View style={[styles.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            secureTextEntry
            style={[styles.inputText,{color:Theme.colors.primary}]}s
            value={data.password}
            placeholder="Password"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => setData({ ...data, password: text })}
          />
        </View>

        <View style={[styles.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            secureTextEntry
            value={data.cPassword}
            style={[styles.inputText,{color:Theme.colors.primary}]}
            placeholder="Confirm Password"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) => setData({ ...data, cPassword: text })}
          />
        </View>

        <TouchableOpacity style={[styles.button,{backgroundColor:Theme.colors.primary}]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          <Text style={styles.accExitsText}>Already Have An Account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.accExitsBTN,{color:Theme.colors.primary}]}>Login Now</Text>
          </TouchableOpacity>
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
    overflow:'hidden'
  },
  contentContainer: {
    flex: 1.5,
    padding: 25,
  },

  image: {
    // width: "100%",
    // height: "400px",
    resizeMode: "cover", // or 'contain' or 'stretch'
  },
 
  heading: {
    fontWeight: "900",
    fontSize: 25,
    marginBottom: 20,
    lineHeight: 50,
    textAlign: "center",
    // marginTop: 20,
  },
  errorText:{
    fontSize:16,
    paddingVertical:5,
    color:"red",
    fontWeight:"700"
  },
  inputView: {
    width: "100%",
    borderRadius: 10,
    // backgroundColor: "#B6C4B6",
    borderWidth:1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    // color: "#B6C4B6",
  },
  inputText: {
    height: 50,
    fontSize: 20,
   
  },
  button: {
    // backgroundColor: "#B6C4B6",
    width: "100%",
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
    color: "#ffffff",
  },
  btnContainer: {
    // flexDirection: "row",
    marginTop: 15,
  },
  accExitsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 25,
  },
  accExitsBTN: {
    textAlign: "center",
    // color: "#B6C4B6",
    fontWeight: "900",
    fontSize: 18,
    paddingLeft: 5,
  },
});

export default SignUp;
