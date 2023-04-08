import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  const goRegisterPhysical = () => navigation.replace('RegisterPhysical');
  const goRegisterMoral = () => navigation.replace('RegisterMoral');

  return (
    <View style={s.containerHome}>
      <Text style={s.containerHomeText}>¿Que tipo de registro va a realizar?</Text>

      <TouchableOpacity onPress={goRegisterPhysical} style={s.btnsRegister}>
        <Text style={s.btnsRegisterText}>Registrar como persona fisica</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goRegisterMoral} style={s.btnsRegister}>
        <Text style={s.btnsRegisterText}>Registrar como persona moral</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  containerHome: {
    width: "90%",
    marginTop: 124,
    alignSelf: "center",
    alignItems: "center",
  },
  containerHomeText: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "800"
  },
  btnsRegister: {
    height: 40,
    width: "90%",
    marginTop: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
  },
  btnsRegisterText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});

export default Dashboard;
