import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { windowHeigth, windowWidth } from '../../../utils/Dimension';

const InputForm = ({labelValue, placeHolderText, iconType, ...rest}) => {
  return (
    <View style={ styles.inputContainer}>

      <View style={ styles.iconStyle} >
        <AntDesign
          style={ styles.input}
          name={ iconType }
          size={25}
          color={'#666'}
        />
      </View>

      <TextInput
        style={ styles.input}
        value={ labelValue }
        numberOfLines={1}
        placeholder={ placeHolderText }
        placeholderTextColor={'#666'}
        { ...rest }
      />

    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer:{
    marginTop: 5,
    marginBottom: 10,
    width : '100%',
    height : windowHeigth / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth : 1,
    flexDirection: 'row',
    alignItems : 'center',
    backgroundColor: '#fff',
  },
  iconStyle:{
    padding: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input:{
    padding: 10,
    flex: 1,
    fontSize: 16,
    // fontFamily: '',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth/1.5,
    height: windowHeigth/15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
