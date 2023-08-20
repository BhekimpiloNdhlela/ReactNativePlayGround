import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Meals from './src/screens/Meals';
import MealDetail from './src/screens/MealDetails';
import Categories from './src/screens/Categories';
import Favorites from './src/screens/Favorites';

import FavoritesContextProvider from './src/store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  <Drawer.Navigator
    screenOptions={{
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      headerStyle: { backgroundColor: "#351401" },
      drawerActiveBackgroundColor: "#e4baa1",
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: "#351401",
      headerTintColor: "white",
    }}
  >
    <Drawer.Screen
      name={"Categories"}
      component={Categories}
      options={{
        drawerIcon: ({ color, size }) =>
          <Ionicons name="list" size={size} color={color} />
      }}
    />
    <Drawer.Screen
      name={"Favorites"}
      component={Favorites}
      options={{
        drawerIcon: ({ color, size }) =>
          <Ionicons name="star-outline" size={size} color={color} />
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <StatusBar style='light' />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f2f25" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name={"Drawer"}
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name={"Meals"}
            component={Meals}
          />
          <Stack.Screen
            name={"MealDetails"}
            component={MealDetail}
            options={{
              title: 'About the meal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}