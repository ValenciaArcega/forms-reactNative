import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";

export default App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

/*
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont(); 

<Icon name="rocket" size={24} color="#fff" />
*/


/*
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#c0392b', '#f1c40f', '#8e44ad']}
  start={{x: 0, y: 0.5}}
  end={{x: 1, y: 1}}
  style={styles.some}>
</LinearGradient>
*/