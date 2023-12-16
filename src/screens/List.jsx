import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import Header from "../components/Header";

// Modal parking details
import CardParkingDetails from "../components/Modal";

const dummyData = [
  {
    id: "1",
    Address: "Sardarpura",
    city: "Jodhpur",
    avilableSlot: 4,
    for: "2 Wheeler",
  },
  {
    id: "2",
    Address: "Partap Nagar",
    city: "Jaipur",
    avilableSlot: 5,
    for: "4 Wheeler",
  },
  {
    id: "3",
    Address: "Sastri Nagar",
    city: "Ajmer",
    avilableSlot: 5,
    for: "2 Wheeler",
  },
  {
    id: "4",
    Address: "Paota",
    city: "Kota",
    avilableSlot: 5,
    for: "2 & 4 Wheeler",
  },
  {
    id: "5",
    Address: "MahaMandir",
    city: "Sikar",
    avilableSlot: 5,
    for: "4 Wheeler",
  },
  {
    id: "6",
    Address: "Mandor",
    city: "Pali",
    avilableSlot: 5,
    for: "2 Wheeler",
  },
  {
    id: "7",
    Address: "12v Road",
    city: "Udaipur",
    avilableSlot: 5,
    for: "4 Wheeler",
  },
  {
    id: "8",
    Address: "Sojati Gate",
    city: "Jodhpur",
    avilableSlot: 5,
    for: "2 & 4 Wheeler",
  },
  {
    id: "9",
    Address: "Sastri Nagar",
    city: "Jaipur",
    avilableSlot: 5,
    for: "2 Wheeler",
  },
];

const List = ({navigation}) => {

  // dummy data for list
  const [data,setData] = useState(dummyData);

  //search feed value
  const [searchVal,setSearchVal] = useState("");

  //selected Item
  const [selectItem,setSelectedItem] = useState(null);

  //modal open togal
  const [open,setOpen] = useState(false);

  function filterSearch(value){
    
    if(value === ""){
      setData(dummyData)
    }else{
      let newData = data.filter((item)=>item.city.toLowerCase().includes(value.toLowerCase())|| item.Address.toLowerCase().includes(value.toLowerCase()))
      setData(newData)
    }
       
  }

  useEffect(()=>{
    filterSearch(searchVal)
  },[searchVal])


  const renderItem = ({ item }) => (
    <TouchableOpacity style={{}} onPress={()=>{setSelectedItem(item);setOpen(true)}}>
    <View style={[styles.listItem, styles.row]}>
      {/* <Text style={[styles.cell, styles.srNo]}>{item.id}</Text> */}
      <Text style={[styles.cell, styles.City]}>{item.city}</Text>
      <Text style={[styles.cell, styles.Address]}>{item.Address}</Text>
      <Text style={[styles.cell, styles.For]}>{item.for}</Text>
      <Text style={[styles.cell, styles.Slot]}>{item.avilableSlot}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation} value={searchVal} setValue={setSearchVal}/>
      <View style={styles.listContainer}>
        <Text style={styles.headerText}>Available Parking</Text>
        <View style={styles.row}>
          {/* <Text style={[[styles.cell, styles.srNo], styles.srNo]}>Sr</Text> */}
          <Text style={[styles.cell, styles.City]}>City</Text>
          <Text style={[styles.cell, styles.Address]}>Address</Text>
          <Text style={[styles.cell, styles.For]}>For</Text>
          <Text style={[styles.cell, styles.Slot]}>Slot</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <CardParkingDetails data={selectItem} isVisible={open} onClose={()=>{setOpen(false);setSelectedItem(null)}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // flexDirection:"column"
    // maxWidth:"450px"
  },
  listContainer: {
    flexGrow:1,
    marginVertical:20,
    // minHeight:"60%"
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
  srNo: {
    // width:1
  },
  City: {
    maxWidth: "30%",
  },
  Address: {
    maxWidth: "30%",
  },
  For: {
    maxWidth: "23%",
  },
  Slot: {
    maxWidth: "15%",
  },
  btnWrapper:{
    margin: "auto",
    marginBottom:30,
    width:"auto"
  },
  addParkingBTN: {
    fontSize:20,
    backgroundColor: "green",
    color: "white",
    fontWeight:"800",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:25,
    
  },
});


export default List;
