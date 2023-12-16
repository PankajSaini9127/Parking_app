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

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({ user: "", password: "" });

  const [formError,setFormError] = useState()

  const Theme = useTheme();

  //validation
  function validate(data){
    if(data.user === "" && data.password === ""){
      setFormError("Please Enter Creds!");
    }else
    if(data.user === ""){
      setFormError("Please Enter UserId!");
    }else if(data.password === ""){
      setFormError("Please Enter Password!");
    }

    if(formError === ""){
      return true;
    }else{
    return false;
  }
  }

  const handleLogin = () => {
   //validation
   if(validate(data)){
    console.log("object")
    if (data.user === "Test" && data.password === "Test") {
      console.log("data matched");
      setFormError("")
      navigation.navigate("list");
    } else {
      console.log("invalid")
     setFormError("Invalid Creds!");
    }
   }else{
    console.log("validation error")
   }
   
  };

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
        {
          formError &&   <Text style={styles.errorText}>{formError}</Text>
        }
    
        <View style={[styles.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            style={[styles.inputText,{color:Theme.colors.primary}]}
            placeholder="User"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) =>{ setData({ ...data, user: text });setFormError("")}}
          />
          
        </View>

      

        <View style={[styles.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            secureTextEntry
            style={[styles.inputText,{color:Theme.colors.primary}]}
            placeholder="Password"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) =>{ setData({ ...data, password: text });setFormError("")}}
          />
        </View>

        <TouchableOpacity style={[styles.button,{backgroundColor:Theme.colors.primary}]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          <Text style={styles.textRegister}>Don't Have An Account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={[styles.resgisterBtn,{color:Theme.colors.primary}]}>Register Now</Text>
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
    // marginTop: 30,
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
    borderWidth:1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
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
    // color: "#B6C4B6",
  },
});

export default LoginScreen;
