import React,{ useState, useEffect} from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
 } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

import Skip from '../../components/Onboarding/Skip';
import Next from '../../components/Onboarding/Next';
import Done from '../../components/Onboarding/Done';
import Dots from '../../components/Onboarding/Dots';

const OnboardingScreen = ({navigation}) => {

    const BG_COLOR_1= '#a6d4d0';
    const BG_COLOR_2= '#fdeb93';
    const BG_COLOR_3= '#ebbcbe';
    const BG_COLOR_4= '#a5d1bf';
    
  return (
      <Onboarding
            onSkip={()=>navigation.replace('Login')}
            onDone={()=>navigation.navigate('Login')}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotsButtonComponent={Dots}
            pages={[
                {   backgroundColor: BG_COLOR_1,
                    image: <Image
                                source={require('../../assets/images/onboarding/received.png')}
                            />,
                    title: 'Received',
                    subtitle: 'We have received your package',
                },
                {   backgroundColor: BG_COLOR_2,
                    image: <Image
                                source={require('../../assets/images/onboarding/intransit.png')}
                            />,
                    title: 'Transport',
                    subtitle: 'We transport your package',
                },
                {   backgroundColor: BG_COLOR_3,
                    image: <Image
                                source={require('../../assets/images/onboarding/available.png')}
                            />,
                    title: 'Available',
                    subtitle: 'Your package has arrived',
                },
                {   backgroundColor: BG_COLOR_4,
                    image: <Image
                                source={require('../../assets/images/onboarding/delivered.png')}
                            />,
                    title: 'Delivered',
                    subtitle: 'Your package has been delivered',
                },
            ]}
      />
  );
};
 
export default OnboardingScreen;

const styles = StyleSheet.create({});
