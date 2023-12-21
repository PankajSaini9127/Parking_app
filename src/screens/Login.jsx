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
import textFieldStyle from "../../assets/styleSheets/textField";

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
  };

  const handleLogin = () => {
   //validation
   if(validate(data)){
    console.log("object")
    if (data.user.trim().toLowerCase() === "test" && data.password === "Test") {
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
    
    <View style={{width:"100%",gap: 20 }}>
        <View style={[textFieldStyle.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            style={[textFieldStyle.inputText,{color:Theme.colors.primary}]}
            placeholder="User"
            placeholderTextColor={Theme.colors.primary}
            onChangeText={(text) =>{ setData({ ...data, user: text });setFormError("")}}
          />
          
        </View>

      

        <View style={[textFieldStyle.inputView,{borderColor:Theme.colors.primary}]}>
          <TextInput
            secureTextEntry
            style={[textFieldStyle.inputText,{color:Theme.colors.primary}]}
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
    resizeMode: "cover", // or 'contain' or 'stretch'
  },
  heading: {
    fontWeight: "900",
    fontSize: 25,
    marginBottom: 20,
    lineHeight: 50,
    textAlign: "center",
  },
  errorText:{
    fontSize:16,
    paddingVertical:5,
    color:"red",
    fontWeight:"700"
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
