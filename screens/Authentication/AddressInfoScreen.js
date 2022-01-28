import React, { useState, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, TouchableOpacity,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from "react-native-elements";

import InputForm from '../../components/Authentication/Form/InputForm';
import SocialButton from '../../components/Authentication/SocialButton/SocialButton' 

const AddressInfoScreen = ({navigation}) => {

  // Address information
  const [country, setCountry] = useState();
  const [addressUser, setAddressUser] = useState();
  const [zipCode, setZipCode] = useState();
  
  const [deliveryCountry, setDeliveryCountry] = useState();
  const [cityDropOff, setCityDropOff] = useState();
  const [isAcceptTerms, setIsAcceptTerms] = useState(false);

  return (
    <View style={ styles.container }>
      <Image
        style={ styles.logo}
        source={require('../../assets/images/brand/logo.png')}
      />

      <View style={ styles.titleWrapper}>
        <FontAwesome name="sign-in" size={28} color="#3c3c3c" />
        <Text style={ styles.text}> Address Info </Text>
      </View>

      <InputForm
        labelValue={country}
        placeHolderText={"Country"}
        onChangeText={ (userCountry) => setCountry(userCountry) }
        iconType={"flag"}
        // keyboardType="email-address"
        autoCapitalize={'none'}
        autoCorrect={false}
      />

      <InputForm
        labelValue={addressUser}
        placeHolderText={"AddressUser"}
        onChangeText={ (userAddress) => setAddressUser(userAddress) }
        iconType={"enviromento"}
        // keyboardType="email-address"
        autoCapitalize={'none'}
        autoCorrect={false}
      />

      <InputForm
        labelValue={zipCode}
        placeHolderText={"Zip Code"}
        onChangeText={ (userZipCode) => setZipCode(userZipCode) }
        iconType={"enviromento"}
        // keyboardType="email-address"
        autoCapitalize={'none'}
        autoCorrect={false}
      />

      <InputForm
        labelValue={deliveryCountry}
        placeHolderText={"Delivery Country"}
        onChangeText={ (userDeliveryCountry) => setDeliveryCountry(userDeliveryCountry) }
        iconType={"enviromento"}
        // keyboardType="email-address"
        autoCapitalize={'none'}
        autoCorrect={false}
      />

      <InputForm
        labelValue={cityDropOff}
        placeHolderText={"City DropOff"}
        onChangeText={ (userCityDropOff) => setCityDropOff(userCityDropOff) }
        iconType={"enviromento"}
        // keyboardType="email-address"
        autoCapitalize={'none'}
        autoCorrect={false}
      />

      <CheckBox
        containerStyle={styles.checkBoxView}
        title='I agree to the terms and conditions of this disclaimer'
        checked={isAcceptTerms}
        onPress={()=> setIsAcceptTerms( !isAcceptTerms ) }
      />


          {/* ------------------------------ */}

      <ButtonForm
        buttonTitle={'Validate address'}
        onPress={()=> navigation.replace('HomeTest')}        
      />
      

    </View>
  );
};

export default AddressInfoScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f9fafd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo:{
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  titleWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    // fontFamily: 'Roboto_SemiBoldItalic',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#3c3c3c',
  },
  navButton:{
    marginTop: 15,
  },
  forgotAndSignUpButton:{
    marginVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButtonWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButtonText:{
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Roboto',
  },
  inviteSignUpText:{
    color: '#383749',
  },

  checkBoxView:{
    marginLeft: 0,
    width: '100%',
  },
});

 