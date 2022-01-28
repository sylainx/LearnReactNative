import React,{ useState } from "react";
import { CheckBox } from "react-native-elements";

import { windowHeigth, windowWidth, } from '../../../utils/Dimension';

const CheckBoxButton = ({ buttonTitle, ...rest }) => {
  return (
    <CheckBox
      
    />
  );
};

export default CheckBoxButton;

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
