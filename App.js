import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import merge from 'deepmerge';
import { enableScreens } from 'react-native-screens';

enableScreens(); // Enable optimized screen rendering

// Merge both themes (navigation + paper) for a unified look
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={CombinedDarkTheme}>
        <NavigationContainer theme={CombinedDarkTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="FoodOrderingApp"
              component={HomeScreen}
              options={{ title: 'Food Ordering App', headerShown: true }}
            />
            <Stack.Screen
              name="FoodDetails"
              component={FoodDetailScreen}
              options={{ title: 'Food Details', headerShown: true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
