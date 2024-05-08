/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';

const Verification = ({ navigation, route }: any) => {
    const { code, email, password } = route.params;

    return (
        <View>
            <Text>{`${code}, ${email}, ${password}`}</Text>
        </View>
    );
};

export default Verification;
