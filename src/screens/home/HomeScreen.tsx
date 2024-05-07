/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../redux/reducers/authReducer';

const HomeScreen = () => {

    const dispatch = useDispatch();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>HomeScreen</Text>
            <Button title='Logout' onPress={() => dispatch(removeAuth({}))} />
        </View>
    );
};

export default HomeScreen;
