import React from 'react';
import { Image } from 'react-native';
import { RowComponent, SpaceComponent, TextComponent } from '.';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

const AvatarGroup = () => {
    const photoUrl =
        'https://gamek.mediacdn.vn/133514250583805952/2022/5/18/photo-1-16528608926331302726659.jpg';
    return (
        <RowComponent justify="flex-start" styles={{ marginVertical: 12 }}>
            {Array.from({ length: 3 }).map((item, index) => (
                <Image
                    key={`img${index}`}
                    source={{ uri: photoUrl }}
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: appColors.white,
                        marginLeft: index > 0 ? -8 : 0,
                    }}
                />
            ))}
            <SpaceComponent width={12} />
            <TextComponent
                text="+20 Going"
                size={12}
                color={appColors.primary}
                font={fontFamilies.semiBold}
            />
        </RowComponent>
    );
};

export default AvatarGroup;