import s from '../styles/HomeStyles';
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const Home = function () {
  const navigation = useNavigation();

  const goRegisterPhysical = () => navigation.replace('RegisterPhysical');
  const goRegisterMoral = () => navigation.replace('RegisterMoral');

  return (
    <ScrollView>
      <View style={s.containerHome}>
        <Text style={s.containerHomeText}>Control de usuarios</Text>

        <TouchableOpacity onPress={goRegisterPhysical} style={s.btnsRegister}>
          <LinearGradient
            colors={['#6C63FF', '#8982ff', '#9892ff']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={s.btnsRegisterGradient}>
            <Text style={s.btnsRegisterText}>Registrar como persona fisica</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={goRegisterMoral} style={s.btnsRegister}>
          <LinearGradient
            colors={['#6C63FF', '#8982ff', '#9892ff']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={s.btnsRegisterGradient}>
            <Text style={s.btnsRegisterText}>Registrar como persona moral</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
