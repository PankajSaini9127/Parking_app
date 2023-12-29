import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


// Modal parking details
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { useTheme } from "@react-navigation/native";
import { getUserRequestParking } from "../../services/parkingAPI";
import setLoading from "../../store/action/loadingAction";


const ListParkingRequest = ({ navigation }) => {

  // dummy data for list
  const [data, setData] = useState([]);


  //selected Item
  const [selectItem, setSelectedItem] = useState(null);

  //modal open togal
  const [open, setOpen] = useState(false);

  const auth = useSelector(s=>s.auth);

  const dispatch = useDispatch();

  const token = `Bearer ${auth.token}`;

  const Theme = useTheme();


  const renderItem = ({ item,index }) => (
    <TouchableOpacity
      style={{}}
      onPress={() => {
        setSelectedItem(item);
        setOpen(true);
      }}
    >
      <View style={[styles.listItem, styles.row]}>
        <Text style={[styles.cell, styles.srNo]}>{index+1}</Text>
        <Text style={[styles.cell, styles.state]}>{item.user_name}</Text>
        <Text style={[styles.cell, styles.city]}>{item.user_email}</Text>
        <Text style={[styles.cell, styles.address]}>{item.vehicle_no}</Text>
        <Text style={[styles.cell, styles.Slot]}>Pending</Text>
      </View>
    </TouchableOpacity>
  );

 async function fetchData(){
    try {
        dispatch(setLoading(true))
        const result = await getUserRequestParking(token);
        dispatch(setLoading(false))
        // console.log(result)
        if(result.status === 200){
            setData(result.data);
        }
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (

    <View style={styles.container}>
      {/* <Header
        navigation={navigation}
        value={searchVal}
        setValue={setSearchVal}
      /> */}

      <View style={styles.listContainer}>
        <View style={styles.head}>
        <Text style={styles.headerText}>All Parking Request</Text>
        </View>
        <View style={{height:"78%"}}>
        <View style={[styles.row,{ borderColor:Theme.colors.primary,}]}>
          <Text style={[styles.cell, styles.srNo]}>Sr No</Text>
          <Text style={[styles.cell, styles.state]}>User Name</Text>
          <Text style={[styles.cell, styles.city]}>Email</Text>
          <Text style={[styles.cell, styles.address]}>Vehicle No</Text>
          <Text style={[styles.cell, styles.Slot]}>Status</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        </View>
        {/* modal box  */}
      
      </View>

    
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
  head:{
   flexDirection:"row",
   paddingHorizontal:10
  },
  listContainer: {
    // flex: 1,
    marginVertical: 20,
    height:"250px",
    overflow:"scroll",
  },
  headerText: {
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
    flex:1
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  cell: {
    // flex: 1,
    padding: 10,
    textAlign: "center",
  },
  srNo: {
    width:"10%"
  },
  state:{
    width:"25%"
  },
  city: {
    width:"20%"
  },
  address: {
    maxWidth: "25%",
  },
  slot: {
    maxWidth: "15%",
  },
  btnWrapper: {
    margin: "auto",
    marginBottom: 30,
    width: "auto",
  },
  addParkingBTN: {
    fontSize: 20,
    color: "white",
    fontWeight: "800",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default ListParkingRequest;
