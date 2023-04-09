import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  containerHome: {
    width: "90%",
    marginTop: 124,
    paddingBottom: 64,
    alignSelf: "center",
    alignItems: "center",
  },
  containerHomeText: {
    fontSize: 28,
    letterSpacing: -1,
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
  },
});

export default s;
