import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { InputComponent, TextComponent } from '../../components';
import { appColors } from '../../constants/appColors';

const EventsScreen = ({ navigation }: any) => {

    console.log('Event Detail log')
    return (
        <View>
            <Text>EventsScreen</Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('EventDetail', { id: '666dddfaa8bbad9ab12ec263' })
                }>
                <TextComponent color={appColors.primary} text="Nguyễn Ngọc Thy" />

            </TouchableOpacity>
        </View>
    );
};

export default EventsScreen;