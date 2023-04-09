import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterMoral from "./RegisterMoral";
import RegisterPhysical from './RegisterPhysical';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();

const Home = function () {
  return (
    <Stack.Navigator initialRouteName="Dashboard">

      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, animation: "slide_from_bottom" }}></Stack.Screen>

      <Stack.Screen name="RegisterMoral" component={RegisterMoral} options={{ headerShown: false, animation: "slide_from_bottom" }}></Stack.Screen>

      <Stack.Screen name="RegisterPhysical" component={RegisterPhysical} options={{ headerShown: false, animation: "slide_from_bottom" }}></Stack.Screen>

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: "none" }}></Stack.Screen>

    </Stack.Navigator>
  );
};

export default Home;