/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExplorerNavigationr';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Explorer" component={ExploreNavigator} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
