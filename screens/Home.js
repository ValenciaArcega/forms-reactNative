import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const Home = function () {
  const navigation = useNavigation();

  const goRegisterPhysical = () => navigation.replace('RegisterPhysical');
  const goRegisterMoral = () => navigation.replace('RegisterMoral');

  return (
    <ScrollView>
      <View style={s.containerHome}>
        <Text style={s.containerHomeText}>¿Que tipo de registro va a realizar?</Text>

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

const s = StyleSheet.create({
  containerHome: {
    width: "90%",
    marginTop: 124,
    paddingBottom: 64,
    alignSelf: "center",
    alignItems: "center",
  },
  containerHomeText: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "800"
  },
  btnsRegister: {
    height: 52,
    width: "90%",
    marginTop: 32,
    shadowColor: '#6C63FF',
    shadowOpacity: .5,
    shadowRadius: 7,
    shadowOffset: {
      width: 8,
      height: 8
    }
  },
  btnsRegisterGradient: {
    height: '100%',
    width: '100%',
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  btnsRegisterText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});

export default Home;
