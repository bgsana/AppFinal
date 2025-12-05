import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import CalculoScreen from './screens/CalculoScreen';
import HomeScreen from './screens/HomeScreen';
import CarrosScreen from './screens/CarrosScreen';

const Stack = createStackNavigator()

export default function AppStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculo" component={CalculoScreen}/>
        <Stack.Screen name="Carros" component={CarrosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}