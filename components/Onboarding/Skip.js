import {
  View,
  Text,
  Button, 
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Skip = ({...props}) => {
  return (
    <TouchableOpacity
        style={styles.buttonView}
        {...props}
    >
    
        <Text style={ styles.buttonText}>Skip</Text>

    </TouchableOpacity>
  );
};

export default Skip;

const styles = StyleSheet.create({
  buttonView:{
    marginHorizontal: 8,
  },
  buttonText:{
      fontSize: 16
  },

})