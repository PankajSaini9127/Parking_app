import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

// Modal parking details
import CardParkingDetails from "../components/CardParkingDetails";
import Theme from "../theme/Theme";
import CustomAlert from "../components/utils/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getAllParking } from "../services/parkingAPI";
import setLoading from "../store/action/loadingAction";

// const dummyData = [
//   {
//     id: "1",
//     Address: "Sardarpura",
//     city: "Jodhpur",
//     avilableSlot: 4,
//     for: "2 Wheeler",
//   },
//   {
//     id: "2",
//     Address: "Partap Nagar",
//     city: "Jaipur",
//     avilableSlot: 5,
//     for: "4 Wheeler",
//   },
//   {
//     id: "3",
//     Address: "Sastri Nagar",
//     city: "Ajmer",
//     avilableSlot: 5,
//     for: "2 Wheeler",
//   },
//   {
//     id: "4",
//     Address: "Paota",
//     city: "Kota",
//     avilableSlot: 5,
//     for: "2 & 4 Wheeler",
//   },
//   {
//     id: "5",
//     Address: "MahaMandir",
//     city: "Sikar",
//     avilableSlot: 5,
//     for: "4 Wheeler",
//   },
//   {
//     id: "6",
//     Address: "Mandor",
//     city: "Pali",
//     avilableSlot: 5,
//     for: "2 Wheeler",
//   },
//   {
//     id: "7",
//     Address: "12v Road",
//     city: "Udaipur",
//     avilableSlot: 5,
//     for: "4 Wheeler",
//   },
//   {
//     id: "8",
//     Address: "Sojati Gate",
//     city: "Jodhpur",
//     avilableSlot: 5,
//     for: "2 & 4 Wheeler",
//   },
//   {
//     id: "9",
//     Address: "Sastri Nagar",
//     city: "Jaipur",
//     avilableSlot: 5,
//     for: "2 Wheeler",
//   },
// ];

const List = ({ navigation }) => {
  // dummy data for list
  const [data, setData] = useState([]);

  // console.log(data[0]);

  //search feed value
  const [searchVal, setSearchVal] = useState("");

  //selected Item
  const [selectItem, setSelectedItem] = useState(null);

  //modal open togal
  const [open, setOpen] = useState(false);

  const auth = useSelector((s) => s.auth);


  const dispatch = useDispatch();

  const token = `Bearer ${auth.token}`;

  //fetch data
  async function fetchData() {
    try {
      dispatch(setLoading(true));
      const result = await getAllParking(token);
      dispatch(setLoading(false));
      if (result) {
        setData(result.data);
      } else {
        CustomAlert(
          (msg = "Error..."),
          (success = false),
          (title = "Something Went Wrong.")
        );
      }
    } catch (error) {
      console.log("Error While calling fetch function Listing", error);
      CustomAlert(
        (msg = result.message),
        (success = false),
        (title = "Something Went Wrong.")
      );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function filterSearch(value) {}

  useEffect(() => {
    filterSearch(searchVal);
  }, [searchVal]);

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
        <Text style={[styles.cell, styles.state]}>{item.state}</Text>
        <Text style={[styles.cell, styles.city]}>{item.city}</Text>
        <Text style={[styles.cell, styles.address]}>{item.address}</Text>
        <Text style={[styles.cell, styles.Slot]}>{item.slot}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        value={searchVal}
        setValue={setSearchVal}
      />
      <View style={styles.listContainer}>
        <View style={styles.head}>
          <Text style={styles.headerText}>Available Parking</Text>
        </View>

        <View style={{gap:2,flex:1}}>
          <View style={{width:"80%"}}>
          <TouchableOpacity onPress={() => navigation.navigate("parkingRequest")}>
              <Text
                style={[
                  styles.addParkingBTN,
                  { backgroundColor: Theme.colors.primary },
                ]}
              >
                Show Parking Request
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width:"80%"}}>
            
          <TouchableOpacity onPress={() => navigation.navigate("addParking")}>
              <Text
                style={[
                  styles.addParkingBTN,
                  { backgroundColor: Theme.colors.primary },
                ]}
              >
                Add Parking
              </Text>
            </TouchableOpacity>
          </View>
            
          </View>

        <View style={{ height: "78%" }}>
          <View style={[styles.row, { borderColor: Theme.colors.primary }]}>
            <Text style={[styles.cell, styles.srNo]}>Sr No</Text>
            <Text style={[styles.cell, styles.state]}>State</Text>
            <Text style={[styles.cell, styles.city]}>City</Text>
            <Text style={[styles.cell, styles.address]}>Address</Text>
            <Text style={[styles.cell, styles.slot]}>Slot</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* modal box  */}
        <CardParkingDetails
          data={selectItem}
          isVisible={open}
          onClose={() => {
            setOpen(false);
            setSelectedItem(null);
          }}
          navigation={navigation}
        />
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
  head: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  listContainer: {
    // flex: 1,
    marginVertical: 20,
    height: "250px",
    overflow: "scroll",
  },
  headerText: {
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
    flex: 1,
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
    width: "10%",
  },
  state: {
    width: "25%",
  },
  city: {
    width: "25%",
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
    textAlign:"center"
  },
});

export default List;
