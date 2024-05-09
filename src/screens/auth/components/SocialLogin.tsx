/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamily';
import { Facebook, Google } from '../../../assets/svgs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authenticationAPI from '../../../apis/authApi';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addAuth } from '../../../redux/reducers/authReducer';


GoogleSignin.configure(
    {
        webClientId: '824548252942-kjmgd4hat40efr465h4uairt2qahptkb.apps.googleusercontent.com',
    }
);

const SocialLogin = () => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLoginWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });

        const api = `/google-signin`;

        try {
            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();

            const user = userInfo.user;

            const res: any = await authenticationAPI.HandleAuthentication(
                api,
                user,
                'post',
            );

            console.log(res.data);
            dispatch(addAuth(res.data));

            await AsyncStorage.setItem('auth', JSON.stringify(res.data));
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <SectionComponent>
            <TextComponent
                styles={{ textAlign: 'center' }}
                text="OR"
                color={appColors.gray4}
                size={16}
                font={fontFamilies.medium}
            />
            <SpaceComponent height={16} />
            <ButtonComponent
                type="primary"
                onPress={handleLoginWithGoogle}
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Google"
                textFont={fontFamilies.regular}
                iconFlex="left"
                icon={<Google />}

            />
            <ButtonComponent
                type="primary"
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Facebook"
                textFont={fontFamilies.regular}
                iconFlex="left"
                icon={<Facebook />}

            />
        </SectionComponent>
    );
};

export default SocialLogin;
