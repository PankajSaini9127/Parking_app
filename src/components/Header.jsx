import React from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";

import { useTheme } from "@react-navigation/native";

import { AntDesign } from '@expo/vector-icons'; 

function Header({ value, setValue,navigation }) {
  const Theme = useTheme();

  return (
    <View style={[style.container, { backgroundColor: Theme.colors.primary }]}>
      <View style={style.backBtnContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><AntDesign name="arrowleft" size={30} color="#fff" style={{fontWeight:"800"}} /></TouchableOpacity>
      </View>
      <View style={style.searchWrapper}>
        <Text style={style.heading}>Search</Text>
        <View style={style.inputView}>
          <TextInput
            style={[style.inputText,{color:Theme.colors.primary}]}
            value={value}
            onChangeText={(text) => setValue(text)}
            placeholder="Enter Location"
            placeholderTextColor={Theme.colors.primary}
          />
          <TouchableOpacity onPress={()=>setValue("")}>
          <Text style={{ fontSize: 15,color:Theme.colors.primary }}> <AntDesign name="close" size={30} color={Theme.colors.primary} style={{fontWeight:"800"}} /></Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 40,
    flexDirection: "row",
    minHeight:180,
    gap:5
  },
  backBtnContainer: {
    maxWidth: 40,
    justifyContent:"center",
    flex:1,
   
  },
  searchWrapper:{
    flex:1
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  inputView: {
    width: "100%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius: 10,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 20,
    width: "90%",
  },
});
