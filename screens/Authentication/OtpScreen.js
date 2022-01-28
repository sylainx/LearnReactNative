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

const OtpScreeen = ({navigation}) => {

  // Personnal information
  const [otp, setOtp] = useState();
  

  return (
    <View style={ styles.container }>
      <Image
        style={ styles.logo}
        source={require('../../assets/images/brand/logo.png')}
      />

      <View style={ styles.titleWrapper}>
        <FontAwesome name="sign-in" size={28} color="#3c3c3c" />
        <Text style={ styles.text}> Enter the OTP </Text>
      </View>

      <InputForm
        labelValue={otp}
        placeHolderText={"Otp"}
        onChangeText={ (userOtp) => setOtp(userOtp) }
        iconType={"phone"}
        keyboardType="number-pad"
        maxLength={6}
        numberOfLines={1}
        textContentType={'telephoneNumber'} // only
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

export default OtpScreeen;

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

 