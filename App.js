import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from "./screens/Home";
import TaskScreen from './screens/TaskScreen';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio de Sesion" component={Login} options={{
        title: 'Inicio de Sesion',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}/>
      <Stack.Screen name="TaskScreen" component={TaskScreen} options={{
        title: 'Lista de Tareas',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}/>
    </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
