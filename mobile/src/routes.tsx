import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import OrphangesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetail';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown:false
            }} >
                <Screen name="OrphanagesMap" component={OrphangesMap}/>
                <Screen name="OrphanageDetails" component={OrphanageDetails}/>
            </Navigator>
        </NavigationContainer>
    )
}