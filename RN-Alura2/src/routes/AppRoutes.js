import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//COMPONENTS
import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
