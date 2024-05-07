/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, LoginScreen, Verification } from '../screens';
import OnbroadingScreen from '../screens/auth/OnbroadingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();

    // const [isExistingUser, setIsExistingUser] = useState(false);

    // useEffect(() => {
    //     checkUserExisting();
    // }, []);



    // const checkUserExisting = async () => {
    //     const res = await AsyncStorage.getItem('auth');

    //     res && setIsExistingUser(true);
    // };

    // console.log(isExistingUser);

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>

            {/* {
                !isExistingUser && (
                    <Stack.Screen name="OnbroadScreen" component={OnbroadingScreen} />
                )
            } */}
            <Stack.Screen name="OnbroadScreen" component={OnbroadingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Verification" component={Verification} />

        </Stack.Navigator>
    );
};

export default AuthNavigator;
