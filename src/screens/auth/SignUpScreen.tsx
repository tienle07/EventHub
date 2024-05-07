/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Lock, Sms, User } from 'iconsax-react-native';
import React, { useEffect, useState, version } from 'react';
import {
    ButtonComponent,
    ContainerComponent,
    InputComponent,
    RowComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';
import { LoadingModal } from '../../modals';
import authenticationAPI from '../../apis/authApi';
import { Validate } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpScreen = ({ navigation }: any) => {
    const [values, setValues] = useState(initValue);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (values.email || values.password) {
            setErrorMessage('');
        }
    }, [values.email, values.password]);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values };

        data[`${key}`] = value;

        setValues(data);
    };
    const handleRegister = async () => {
        const { email, password, confirmPassword } = values;

        const emailValidation = Validate.email(email);
        const passValidation = Validate.Password(password);

        if (email && password && confirmPassword) {
            if (emailValidation && passValidation) {
                setErrorMessage('');
                setIsLoading(true);
                try {
                    const res = await authenticationAPI.HandleAuthentication(
                        '/register',
                        { fullName: values.username, email, password },
                        'post',
                    );

                    dispatch(addAuth(res.data));
                    await AsyncStorage.setItem('auth', JSON.stringify(res.data));
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                    setIsLoading(false);
                }
            } else {
                setErrorMessage('Email not correct!!!');
            }
        } else {
            setErrorMessage('Please enter full information');
        }
    };

    return (
        <>
            <ContainerComponent isImageBackground isScroll back>
                <SectionComponent>
                    <TextComponent size={24} title text="Sign up" />
                    <SpaceComponent height={21} />
                    <InputComponent
                        value={values.username}
                        placeholder="Full name"
                        onChange={val => handleChangeValue('username', val)}
                        allowClear
                        affix={<User size={22} color={appColors.gray} />}
                    />
                    <InputComponent
                        value={values.email}
                        placeholder="abc@email.com"
                        onChange={val => handleChangeValue('email', val)}
                        allowClear
                        affix={<Sms size={22} color={appColors.gray} />}
                    />
                    <InputComponent
                        value={values.password}
                        placeholder="Password"
                        onChange={val => handleChangeValue('password', val)}
                        isPassword
                        allowClear
                        affix={<Lock size={22} color={appColors.gray} />}
                    />
                    <InputComponent
                        value={values.confirmPassword}
                        placeholder="Confirm password"
                        onChange={val => handleChangeValue('confirmPassword', val)}
                        isPassword
                        allowClear
                        affix={<Lock size={22} color={appColors.gray} />}
                    />
                </SectionComponent>

                {errorMessage && (
                    <SectionComponent>
                        <TextComponent text={errorMessage} color={appColors.danger} />
                    </SectionComponent>
                )}
                <SpaceComponent height={16} />
                <SectionComponent>
                    <ButtonComponent
                        onPress={handleRegister}
                        text="SIGN UP"
                        type="primary"
                    />
                </SectionComponent>
                <SocialLogin />
                <SectionComponent>
                    <RowComponent justify="center">
                        <TextComponent text="Don’t have an account? " />
                        <ButtonComponent
                            type="link"
                            text="Sign in"
                            onPress={() => navigation.navigate('LoginScreen')}
                        />
                    </RowComponent>
                </SectionComponent>
            </ContainerComponent>
            <LoadingModal visible={isLoading} />
        </>
    );
};

export default SignUpScreen;
