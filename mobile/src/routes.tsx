import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import OrphangesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetail';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './componentes/Header';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown:false,
                cardStyle:{backgroundColor: "#f2f3f5"}
            }} >
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphangesMap}
                />
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails}
                    options={{
                        headerShown:true,
                        header: () => <Header showCancel={false} title="Orfanato" />
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown:true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown:true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}