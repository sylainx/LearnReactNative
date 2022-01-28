import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { windowHeigth, windowWidth, } from '../../../utils/Dimension';

const ButtonForm = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity
      { ... rest }
      style={ styles.buttonContainer}
    >
      <Text style={ styles.buttonText }> { buttonTitle} </Text>

    </TouchableOpacity>
  );
};

export default ButtonForm;

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop: 10,
    width : '100%',
    height: windowHeigth / 15,
    backgroundColor: '#2364e5',
    padding : 10,
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius: 3,
  },
  buttonText:{
    fontSize : 18,
    fontWeight: 'bold',
    color : '#fff',
    // fontFamily: 'Roboto',
  }
  
});
