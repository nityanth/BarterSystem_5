import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SettingScreen from '../screens/SettingScreen';

import CustomSideBarMenu from './CustomSideBarMenu';
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },

    Setting: {
        screen: SettingScreen
    },
} ,

    {
        contentComponent: CustomSideBarMenu
    },
     
    {
        initialRouteName: "Home"
    }
)