import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, addAuth, authSelector } from '../redux/reducers/authReducer';
import { SplashScreen } from '../screens';
import { UserHandle } from '../utils/UserHandlers';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { TextComponent } from '../components';
import { Linking } from 'react-native';

const AppRouters = () => {
    const [isShowSplash, setIsShowSplash] = useState(true);

    const { getItem } = useAsyncStorage('auth');

    const auth: AuthState = useSelector(authSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        handleGetDatas();

        handleInitialUrl();
    }, []);

    const handleInitialUrl = async () => {
        try {
            const url = await Linking.getInitialURL();

            if (url) {
                Linking.canOpenURL(url).then(isCanOpen =>
                    isCanOpen ? Linking.openURL(url) : console.log('Can not open link'),
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (auth.id) {
            UserHandle.getFollowersById(auth.id, dispatch);
            UserHandle.getFollowingByUid(auth.id, dispatch);
        }
    }, [auth.id]);

    const handleGetDatas = async () => {
        await checkLogin();

        setIsShowSplash(false);
    };

    const checkLogin = async () => {
        const res = await getItem();
        res && dispatch(addAuth(JSON.parse(res)));
    };

    return (
        <>
            {isShowSplash ? (
                <SplashScreen />
            ) : auth.accesstoken ? (
                <MainNavigator />
            ) : (
                <AuthNavigator />
            )}
        </>
    );
};

export default AppRouters;