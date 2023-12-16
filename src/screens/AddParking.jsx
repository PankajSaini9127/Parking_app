import React from 'react'
import { Text, View,TextInput ,TouchableOpacity,StyleSheet} from 'react-native'

function AddParking (){
    return (
          <View  style={styles.container}>
          <Text style={styles.heading}>Add New Parking</Text>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setData({ ...data, name: text })}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Address"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setData({ ...data, address: text })}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="City"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setData({ ...data, city: text })}
            />
          </View>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Area"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setData({ ...data, area: text })}
            />
          </View>
  
          <TouchableOpacity style={styles.BtnWrapper} >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
  
          </View>
    )
}

export default AddParking


const styles = StyleSheet.create(
 {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
        ,maxWidth:"450px"
      },
    heading: {
        fontWeight: "900",
        fontSize: 20,
        marginBottom: 40,
        // width: "40%",
        paddingHorizontal:15,
        // backgroundColor: "green",
        borderRadius: 25,
        height: 50,
        lineHeight: 50,
        color: "green",
        fontFamily:'',
        textAlign: "center",
      },
      inputView: {
        width: "80%",
        borderRadius: 25,
        backgroundColor: "rgb(218,218,218)",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
      },
      inputText: {
        height: 50,
        color: "black",
      },
      BtnWrapper: {
        width: "80%",
        backgroundColor: "green",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      },
      btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },

 });
