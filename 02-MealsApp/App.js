import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categories from './src/screens/Categories';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from './src/screens/Meals';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Categories"} component={Categories} />
          <Stack.Screen name={"Meals"} component={Meals} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});