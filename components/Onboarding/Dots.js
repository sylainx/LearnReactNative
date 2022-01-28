import { 
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity,
} from 'react-native';
import React from 'react';


const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor= selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

  return (
    <View
        style={[styles.viewStyle, {backgroundColor}]}
    />

  );
};

export default Dots;

const styles = StyleSheet.create({
    viewStyle:{
        width: 5,
        height: 5,
        marginHorizontal:3,
    }
});
