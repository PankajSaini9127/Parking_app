// MyModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//theme hook
import { useTheme } from '@react-navigation/native';

const CardParkingDetails = ({ isVisible, onClose ,data}) => {

   const Theme = useTheme();
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.heading,{color:Theme.colors.primary}]}>Parking Area Details</Text>
          {
            data&& <View style={styles.detailsContainer}>
            <View style={styles.details}>
                  <Text style={[styles.tableItem,styles.head,{color:Theme.colors.primary}]}>Available Slot :</Text>
                  <Text style={[styles.tableItem,styles.body  ,{color:Theme.colors.primary}]}>{data.avilableSlot}</Text>
              </View>
              <View style={styles.details}>
                  <Text style={[styles.tableItem,styles.head,{color:Theme.colors.primary}]}>Available For :</Text>
                  <Text style={[styles.tableItem,styles.body  ,{color:Theme.colors.primary}]}>{data.for}</Text>
              </View>
              <View style={styles.details}>
                  <Text style={[styles.tableItem,styles.head,{color:Theme.colors.primary}]}>Address :</Text>
                  <Text style={[styles.tableItem,styles.body  ,{color:Theme.colors.primary}]}>{data.Address}</Text>
              </View>
              <View style={styles.details}>
                  <Text style={[styles.tableItem,styles.head,{color:Theme.colors.primary}]}>City :</Text>
                  <Text style={[styles.tableItem,styles.body  ,{color:Theme.colors.primary}]}>{data.city}</Text>
              </View>    
            </View>
          }
          
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={{color:Theme.colors.primary}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width:'100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    elevation: 5,
  },
  heading:{
    fontSize:20,
    fontWeight:"700",
    textAlign:"center"
  },
  detailsContainer:{
     padding:10
  },
  details:{
    flexDirection:"row",
    marginVertical:10
  },
  tableItem:{
    flex:1,
    fontSize:18,
   
  },
  head:{
    fontWeight:"700",
    textAlign:"right"
  },
  body:{
    fontWeight:"900",
    textAlign:"center"
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});

export default CardParkingDetails;
