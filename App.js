import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";

//theme
import Theme from "./src/theme/Theme";
import { Provider } from "react-redux";
import store from "./src/store/store";

console.log(">>>",store.getState())

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
