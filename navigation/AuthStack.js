import React, {useState, useEffect} from 'react';
import { StyleSheet,
    Text,
    View,
 } from 'react-native';

 import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import SignUpScreen from '../screens/Authentication/SignUpScreen';
import ForgotPwdScreen from '../screens/Authentication/ForgotPwdScreen';
import AddressInfoScreen from '../screens/Authentication/AddressInfoScreen';
import HomeScreen from '../screens/Logged/HomeScreen';

const AuthStack = () => {
    
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    let routeName;
    
    const Stack = createNativeStackNavigator();
    
    useEffect( ()=>{
        AsyncStorage.getItem('alreadyLaunched').then( (value) =>{
            try {
                console.log('Value of AsyncStorage: ',value);
                if (value == null) {
                    // set a key: alreadyLaunched with: 'true' as value[ true is a string not a boolean]
                    AsyncStorage.setItem('alreadyLaunched', 'true');
                    setIsFirstLaunch(true); // change the value of the state isFirstlaunch

                }else if (value == 'true') {
                    setIsFirstLaunch(false);
                }
                
            } catch (e) {
                // display an error message
                console.log('Error in AsyncStorage', e);
            }
        })

    }, [])

    if ( isFirstLaunch == null ) {
        return null; // the tricky part: query not find
    }else if ( isFirstLaunch === true) {
        // routeName ='Onboarding';        
        routeName ='Login';
    }else{
        // routeName ='Login';
        routeName ='Onboarding';        
    }

    return(
        <Stack.Navigator
            initialRouteName={routeName}
            screenOptions={{
            headerShown: false
            }}
        >
            <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            />

            <Stack.Screen
            name="Login"
            component={LoginScreen}
            />

            <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            />
            
            <Stack.Screen
            name="Forgot"
            component={ForgotPwdScreen}
            />

            <Stack.Screen
            name="Address"
            component={AddressInfoScreen}
            />

            <Stack.Screen
            name="HomeTest"
            component={HomeScreen}
            />

        </Stack.Navigator>
    )

};

export default AuthStack;

const styles = StyleSheet.create({});
