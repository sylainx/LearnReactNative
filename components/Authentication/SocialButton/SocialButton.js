import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 
import { windowHeigth, windowWidth, } from '../../../utils/Dimension';


const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
  
  let bgColor = backgroundColor;

  return (
    <TouchableOpacity
      style={ [styles.buttonContainer, { backgroundColor: bgColor}]}
      { ... rest }
    > 
      <View style={ styles.iconWrapper }>
        <FontAwesome
          style={ styles.icon}
          name={btnType}
          size={22}
          color={color}
        />
      </View>

      <View style={ styles.btnTxtWrapper}>
        <Text style={ [styles.buttonText, { color: color}] }> { buttonTitle} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop: 10,
    width : '100%',
    height: windowHeigth / 15,
    backgroundColor: '#2364e5',
    padding : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius: 50,
  },
  buttonText:{
    fontSize : 18,
    fontWeight: 'bold',
    color : '#fff',
    // fontFamily: 'Roboto',
  },

  iconWrapper:{
    width: 30,
    justifyContent: 'center',
    alignItems:'center',
  },
  icon:{
    fontWeight: 'bold',
  },
  btnTxtWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
