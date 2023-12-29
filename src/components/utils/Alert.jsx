import { Alert } from "react-native";

function CustomAlert(msg,success,title,navigateFun){
    return(
        Alert.alert(
            title,
            msg,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              success&&
              { text: 'Login Now', onPress: navigateFun },
            ],
            { cancelable: false }
          )
    )
   
  
    
};

export default CustomAlert