import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';

const Next = ({...props}) => {
  return (
    <TouchableOpacity
        style={styles.buttonView}
        {...props}
    >
        <Text style={ styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
};

export default Next;

const styles = StyleSheet.create({
  buttonView:{
    marginHorizontal: 8,
  },
  buttonText:{
      fontSize: 16
  },
});
