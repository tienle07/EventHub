/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonComponent, ContainerComponent, InputComponent, TextComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';
import { Lock, LockCircle, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ContainerComponent isImageBackground>
            <TextComponent text="fafa" flex={0} />
            {/* <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        // isPassword
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      /> */}
        </ContainerComponent>
    );
};

export default LoginScreen;