import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from "./src/screens/Login";
import SignUp from "./src/screens/Signup";
import List from "./src/screens/List";
import Home from "./src/screens/Home";
import Loader from "./src/components/Loader";
import { View } from "react-native";
import { useSelector } from "react-redux";
import AddParking from "./src/screens/admin/AddParking";
import AddParkingRequest from "./src/screens/seeker/ParkingRequest";
import ListParkingRequest from "./src/screens/seeker/ListParkingRequest";

// Stack Navigator
const Stack = createStackNavigator();

const Navigator = () => {

  const loading = useSelector(s=>s.loading);

  return (
    <View style={{ flex: 1 }}>
       
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
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

          <Stack.Screen
            name="addParking"
            options={{ title: "Add Parking Area" }}
            component={AddParking}
          />

          <Stack.Screen
            name="bookParking"
            options={{ title: "Add Parking Request" }}
            component={AddParkingRequest}
          />

          <Stack.Screen
            name="parkingRequest"
            options={{ title: "Parking Request" }}
            component={ListParkingRequest}
          />

        </Stack.Navigator>
{/* //loading component  */}
        <Loader modalVisible={loading.loading}/>
    </View>
  );
};

export default Navigator;
