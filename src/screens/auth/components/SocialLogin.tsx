/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamily';
import { Google } from 'iconsax-react-native';

const SocialLogin = () => {
    return (
        <SectionComponent>
            <TextComponent
                styles={{ textAlign: 'center' }}
                text="OR"
                color={appColors.gray4}
                size={16}
                font={fontFamilies.medium}
            />
            <ButtonComponent
                type="primary"
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Google"
                icon={
                    <Google
                        size={24}
                        color={appColors.primary}
                    />
                }
                iconFlex="left"
            />
        </SectionComponent>
    );
};

export default SocialLogin;
