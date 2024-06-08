import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { ContainerComponent } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
    AuthState,
    authSelector,
    removeAuth,
} from '../../redux/reducers/authReducer';
import { LoadingModal } from '../../modals';

const ProfileScreen = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const auth: AuthState = useSelector(authSelector);

    return (
        <ContainerComponent back>
            <Text>ProfileScreen</Text>

            {/* <ButtonComponent type="primary" text="Logout" onPress={handleLogout} /> */}
            <LoadingModal visible={isLoading} />
        </ContainerComponent>
    );
};

export default ProfileScreen;