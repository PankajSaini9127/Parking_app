import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";


//theme 
import Theme from "./src/theme/Theme";

function App() {



  return (
      <NavigationContainer theme={Theme}>
       <Navigator/>
      </NavigationContainer>
  );
}

export default App;
