/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title='Login' onPress={async () => await AsyncStorage.setItem('accessToken', 'fafafa')} />
        </View>
    )
}

export default LoginScreen;