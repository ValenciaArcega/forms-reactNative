import Home from "./screens/Home";
import RegisterMoral from "./screens/RegisterMoral";
import RegisterPhysical from "./screens/RegisterPhysical";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: "fade_from_bottom", orientation: 'landscape' }}></Stack.Screen>

        <Stack.Screen name="RegisterMoral" component={RegisterMoral} options={{ headerShown: false, animation: "slide_from_bottom", orientation: 'landscape' }}></Stack.Screen>

        <Stack.Screen name="RegisterPhysical" component={RegisterPhysical} options={{ headerShown: false, animation: "slide_from_bottom", orientation: 'landscape' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
