import React from 'react';
import Signup from "./src/Components/Signup";
import Otp from "./src/Components/OTP";
import User from "./src/Components/User"
import Profiledetails from "./src/Components/Profiledetails"
import Findthenearest from "./src/Components/Findthenearest"

import {enableScreens} from 'react-native-screens';

enableScreens();

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: 'Sign Up'}}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{title: 'Create New Account'}}
          />
          <Stack.Screen
            name="Findthenearest"
            component={Findthenearest}
            options={{title: 'Find The nearest'}}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{title: 'Discover Partner'}}
          />
          <Stack.Screen
            name="Profiledetails"
            component={Profiledetails}
            options={{title: 'Profile Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



