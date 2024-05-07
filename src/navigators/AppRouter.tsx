/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, authSelector } from '../redux/reducers/authReducer';

const AppRouter = () => {
    const { getItem } = useAsyncStorage('auth');

    const auth = useSelector(authSelector);
    const dispatch = useDispatch();
    console.log(auth);

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const res = await getItem();
        console.log(res);
        res &&
            dispatch(
                addAuth(JSON.parse(res)),
            );
    };

    return <>{auth.accesstoken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouter;
