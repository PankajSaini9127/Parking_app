import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from "./src/screens/Login";
import SignUp from "./src/screens/Signup";
import List from "./src/screens/List";
import AddParking from "./src/screens/AddParking";
import Home from "./src/screens/Home";

// Stack Navigator
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false, // Set this to false to hide the default header
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="list"
        options={{
            headerShown: false, // Set this to false to hide the default header
          }}
        component={List}
      />
      <Stack.Screen name="addParking" options={{title:"Add Parking Area"}} component={AddParking} />
    </Stack.Navigator>
  );
};

export default Navigator;
