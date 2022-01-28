import { 
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

const Done = ({...props}) => {
  return (
    <TouchableOpacity
        style={styles.buttonView}
        {...props}
    >
        <Text style={ styles.buttonText}>Done</Text>
    </TouchableOpacity>

  );
};

export default Done;

const styles = StyleSheet.create({
    buttonView:{
        marginHorizontal: 8,
    },
    buttonText:{
        fontSize: 16
    },
});
