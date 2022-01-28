import React, { useState, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import InputForm from '../../components/Authentication/Form/InputForm';
import ButtonForm from '../../components/Authentication/Form/ButtonForm' 
import SocialButton from '../../components/Authentication/SocialButton/SocialButton' 

const SignUpScreen = ({navigation}) => {

  // Personnal information
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [reference, setReference] = useState();
  
  // Address information
  const [country, setCountry] = useState();
  const [cityDropOff, setCityDropOff] = useState();
  const [isAcceptTerms, setIsAcceptTerms] = useState();


  return (
    <View style={ styles.container }>
      <Image
        style={ styles.logo}
        source={require('../../assets/images/brand/logo.png')}
      />

      <View style={ styles.titleWrapper}>
        <FontAwesome name="sign-in" size={28} color="#3c3c3c" />
        <Text style={ styles.text}> Create account </Text>
      </View>

      <InputForm
        labelValue={firstName}
        placeHolderText={"First Name"}
        onChangeText={ (userFirstName) => setFirstName(userFirstName) }
        iconType={"user"}
        autoCapitalize={true}
      />

      <InputForm
        labelValue={lastName}
        placeHolderText={"Last Name"}
        onChangeText={ (userLastName) => setLastName(userLastName) }
        iconType={"user"}
      />

      <InputForm
        labelValue={phone}
        placeHolderText={"Phone"}
        onChangeText={ (userPhone) => setPhone(userPhone) }
        iconType={"phone"}
        keyboardType="number-pad"
        autoComplete={'tel-country-code'}
        maxLength={15}
        numberOfLines={1}
        textContentType={'telephoneNumber'} // only
      />

      <InputForm
        labelValue={email}
        placeHolderText={"Email"}
        onChangeText={ (userEmail) => setEmail(userEmail) }
        iconType={"user"}
        keyboardType="email-address"
        autoCapitalize={'none'}
        autoCorrect={false}
      />

      <InputForm
        labelValue={password}
        placeHolderText={"Password"}
        onChangeText={ (userPassword) => setPassword(userPassword) }
        iconType={"lock"}
        secureTextEntry
      />

      <InputForm
        labelValue={confirmPassword}
        placeHolderText={"Confirm your Password"}
        onChangeText={ (userConfirmPassword) => setConfirmPassword(userConfirmPassword) }
        iconType={"lock"}
        secureTextEntry
      />

      <InputForm
        labelValue={reference}
        placeHolderText={"Reference (optional)"}
        onChangeText={ (userReference) => setReference(userReference) }
        iconType={"user"}
        autoCapitalize={'words'}
      />

        {/* --------------------------- */}

      <ButtonForm
        buttonTitle={'Register'}
        onPress={()=>navigation.navigate('Address')}        
      />

      <View
        style={ styles.forgotAndSignUpButton}        
      >

        <TouchableOpacity
          style={styles.navButtonText}
          onPress={()=>navigation.navigate('Forgot')}
        >
          <Text style={[styles.navButtonText,]}>
            Forgot Password ? | 
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.inviteSignUpWrapper}
          onPress={()=>navigation.navigate('Login')}
        >
          <Text style={[styles.navButtonText, styles.inviteSignUpText]}> Log In with your account</Text>

        </TouchableOpacity>
      </View>
      
      <SocialButton
        buttonTitle={"Continue with Google"}
        btnType={'google'}
        color={'#DB4437'}
        backgroundColor={"#f5e7ea"}
        onPress={()=>{ }}          
      />

      <SocialButton
        buttonTitle={"Continue with Facebook"}
        btnType={'facebook'}
        color={'#3b5998'}
        backgroundColor={"#e6eaf4"}
        onPress={()=>{ }}          
      />
      
    </View>
  );
};

export default SignUpScreen;

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
  }
});

 