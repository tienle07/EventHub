/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    ButtonComponent,
    ContainerComponent,
    RowComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import { appColors } from '../../constants/appColors';
import { fontFamilies } from '../../constants/fontFamily';

const Verification = ({ navigation, route }: any) => {
    const { code, email, password } = route.params;

    const [codeValues, setCodeValues] = useState<String[]>([]);

    const [newCode, setNewCode] = useState('');

    const ref1 = useRef<any>();
    const ref2 = useRef<any>();
    const ref3 = useRef<any>();
    const ref4 = useRef<any>();

    useEffect(() => {
        ref1.current.focus();

    }, []);

    useEffect(() => {
        let item = '';
        codeValues.forEach(val => (item += val));
        console.log(item);
    }, [codeValues]);


    const handleChangeCode = (val: String, index: number) => {
        const data = [...codeValues];
        data[index] = val;
        setCodeValues(data);
    };

    console.log(codeValues);

    return (
        <ContainerComponent back isImageBackground isScroll>
            <SectionComponent>
                <TextComponent text="Verification" title />
                <SpaceComponent height={12} />
                <TextComponent
                    text={`We're send you the verification code on
                 ${email.replace(
                        /.{1,5}/, (m: any) => '*'.repeat(m.length)
                    )}`}
                />
                <SpaceComponent height={26} />

                <RowComponent justify="space-around">

                    <TextInput
                        keyboardType="number-pad"
                        ref={ref1}
                        style={[styles.input]}
                        maxLength={1}
                        onChangeText={val => {
                            val.length > 0 && ref2.current.focus();
                            handleChangeCode(val, 0);

                        }}
                        placeholder="-"
                    />
                    <TextInput
                        keyboardType="number-pad"
                        ref={ref2}
                        style={[styles.input]}
                        maxLength={1}
                        placeholder="-"
                        onChangeText={val => {
                            handleChangeCode(val, 1);
                            val.length > 0 && ref3.current.focus();
                        }}
                    />
                    <TextInput
                        keyboardType="number-pad"
                        ref={ref3}
                        style={[styles.input]}
                        maxLength={1}
                        placeholder="-"
                        onChangeText={val => {
                            handleChangeCode(val, 2);
                            val.length > 0 && ref4.current.focus();
                        }}
                    />
                    <TextInput
                        keyboardType="number-pad"
                        ref={ref4}
                        maxLength={1}
                        onChangeText={val => {
                            handleChangeCode(val, 3);
                        }}
                        style={[styles.input]}
                        placeholder="-"
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent styles={{ marginTop: 40 }}>
                <ButtonComponent
                    disable onPress={() => { }}
                    text="Continue"
                    type="primary"
                />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify="center">
                    <TextComponent text="Re-send code in " flex={0} />
                    <TextComponent text="00:20 " color={appColors.link} />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
};

export default Verification;


const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 55,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColors.gray2,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontFamily: fontFamilies.bold,
        textAlign: 'center',

    },
});
