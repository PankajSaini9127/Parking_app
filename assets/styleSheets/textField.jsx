import { StyleSheet } from "react-native";


const textFieldStyle = StyleSheet.create({
    inputView: {
        width: "100%",
        borderRadius: 10,
        borderWidth:1,
        height: 50,
        // marginBottom: 20,
        justifyContent: "center",
        paddingHorizontal:20
      },
      inputText: {
        height: 50,
        fontSize: 20,
        flex:1,
      },
});


export default textFieldStyle;