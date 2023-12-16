import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { useTheme } from '@react-navigation/native';

//app name
let brandName = "Parking app";

const Home = ({ navigation }) => {

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
        <View style={styles.contentWrapper}>
          <Text style={styles.heading}>{brandName}</Text>

          <Text style={styles.desc}>Find and pay for parking</Text>

          <Text style={styles.details}>
            Search for parking location that supports {brandName} and check
            their space availability.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[styles.button,{backgroundColor:Theme.colors.primary}]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={[styles.button,{backgroundColor:Theme.colors.primary}]}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

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
    width: "100%",
    resizeMode: "cover", // or 'contain' or 'stretch'
  },

  contentContainer: {
    flex: 1.5,
    padding: 25,
  },
  contentWrapper: {
    flex: 1,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 28,
    fontWeight: "500",
    lineHeight: 35,
    marginVertical: 10,
  },
  details: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 25,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button:{
    // backgroundColor: Theme.colors.primary,
    flex:1,
    marginHorizontal:5,
    borderRadius:10,
    padding:10
  },
  buttonText:{
    fontSize:20,
    textAlign:'center',
    fontWeight:"900",
    color:"#ffffff"
  }
});
