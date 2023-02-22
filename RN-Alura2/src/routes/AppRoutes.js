import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//COMPONENTS
import ProdutorRoutes from './ProdutorRoutes';
import MelhoresProdutoresRoutes from './MelhoresProdutoresRoutes';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={ProdutorRoutes} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRoutes}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
