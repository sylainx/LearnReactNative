import React, { useState, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {

  // Address information
  const [isLogged, setisLogged] = useState(null);

  return (
    <View style={ styles.container }>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f9fafd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
});

 