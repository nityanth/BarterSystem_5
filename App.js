
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer>
        
      </AppContainer>
    </View>
  );
}
const Navigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  AppDrawerNavigator:{screen: AppDrawerNavigator}
})

const AppContainer= createAppContainer(Navigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
