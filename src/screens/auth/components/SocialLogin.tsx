/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
    ButtonComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../../components';
import { appColors } from '../../../constants/appColors';

import { Facebook, Google } from '../../../assets/svgs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authenticationAPI from '../../../apis/authApi';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Settings,
    LoginManager,
    Profile,
    LoginButton,
} from 'react-native-fbsdk-next';
import { LoadingModal } from '../../../modals';
import { fontFamilies } from '../../../constants/fontFamilies';

GoogleSignin.configure({
    webClientId:
        '824548252942-kjmgd4hat40efr465h4uairt2qahptkb.apps.googleusercontent.com',
    iosClientId: '',

});

Settings.setAppID('952095629855182');

const SocialLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const api = `/google-signin`;
    const dispatch = useDispatch();

    const handleLoginWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });

        try {
            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();

            const user = userInfo.user;

            const res: any = await authenticationAPI.HandleAuthentication(
                api,
                user,
                'post',
            );

            dispatch(addAuth(res.data));

            await AsyncStorage.setItem('auth', JSON.stringify(res.data));
        } catch (error) {
            console.log(error);
        }
    };

    const handleLoginWithFacebook = async () => {
        setIsLoading(true);
        try {
            const result = await LoginManager.logInWithPermissions([
                'public_profile',
            ]);

            if (!result.isCancelled) {
                const profile = await Profile.getCurrentProfile();

                if (profile) {
                    const userInfo = {
                        name: profile.name,
                        givenName: profile.firstName,
                        familyName: profile.lastName,
                        email: profile.email ?? '',
                        photo: profile.imageURL,
                    };

                    const res: any = await authenticationAPI.HandleAuthentication(
                        api,
                        userInfo,
                        'post',
                    );

                    dispatch(addAuth(res.data));

                    await AsyncStorage.setItem('auth', JSON.stringify(res.data));
                }
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
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
                onPress={handleLoginWithFacebook}
                textFont={fontFamilies.regular}
                iconFlex="left"
                icon={<Facebook />}
            />
            <LoadingModal visible={isLoading} />
        </SectionComponent>
    );
};

export default SocialLogin;
// import React, { useState } from 'react';
// import {
//     ButtonComponent,
//     SectionComponent,
//     SpaceComponent,
//     TextComponent,
// } from '../../../components';
// import { appColors } from '../../../constants/appColors';
// import { fontFamilies } from '../../../constants/fontFamily';
// import { Facebook, Google } from '../../../assets/svgs';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import authenticationAPI from '../../../apis/authApi';
// import { useDispatch } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { addAuth } from '../../../redux/reducers/authReducer';
// import { LoginButton, LoginManager, Profile, Settings } from 'react-native-fbsdk-next';
// import { LoadingModal } from '../../../modals';

// GoogleSignin.configure({
//     webClientId:
//         '824548252942-kjmgd4hat40efr465h4uairt2qahptkb.apps.googleusercontent.com',
// });

// Settings.setAppID('952095629855182');

// const SocialLogin = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const dispatch = useDispatch();
//     const api = `/google-signin`;

//     const handleLoginWithGoogle = async () => {
//         await GoogleSignin.hasPlayServices({
//             showPlayServicesUpdateDialog: true,
//         });



//         try {
//             await GoogleSignin.hasPlayServices();

//             const userInfo = await GoogleSignin.signIn();

//             const user = userInfo.user;

//             const res: any = await authenticationAPI.HandleAuthentication(
//                 api,
//                 user,
//                 'post',
//             );

//             console.log(res.data);
//             dispatch(addAuth(res.data));

//             await AsyncStorage.setItem('auth', JSON.stringify(res.data));
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleLoginWithFacebook = async () => {

//         try {
//             const result = await LoginManager.logInWithPermissions(['public_profile']);

//             if (result.isCancelled) {
//                 console.log('Login cancelled');
//             } else {
//                 const profile = await Profile.getCurrentProfile();
//                 if (profile) {
//                     setIsLoading(true);
//                     const data = {
//                         name: profile.name,
//                         givenName: profile.firstName,
//                         familyName: profile.lastName,
//                         email: profile.userID,
//                         photoUrl: profile.imageURL,
//                     };
//                     const res: any = await authenticationAPI.HandleAuthentication(
//                         api,
//                         data,
//                         'post',
//                     );

//                     console.log(res.data);
//                     dispatch(addAuth(res.data));

//                     await AsyncStorage.setItem('auth', JSON.stringify(res.data));

//                     setIsLoading(false);
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <SectionComponent>
//             <TextComponent
//                 styles={{ textAlign: 'center' }}
//                 text="OR"
//                 color={appColors.gray4}
//                 size={16}
//                 font={fontFamilies.medium}
//             />
//             <SpaceComponent height={16} />
//             <ButtonComponent
//                 type="primary"
//                 onPress={handleLoginWithGoogle}
//                 color={appColors.white}
//                 textColor={appColors.text}
//                 text="Login with Google"
//                 textFont={fontFamilies.regular}
//                 iconFlex="left"
//                 icon={<Google />}
//             />

//             <LoginButton />

//             <ButtonComponent
//                 type="primary"
//                 onPress={handleLoginWithFacebook}
//                 color={appColors.white}
//                 textColor={appColors.text}
//                 text="Login with Facebook"
//                 textFont={fontFamilies.regular}
//                 iconFlex="left"
//                 icon={<Facebook />}
//             />
//             <LoadingModal visible={isLoading} />
//         </SectionComponent>
//     );
// };

// export default SocialLogin;
