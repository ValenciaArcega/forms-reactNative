import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  screenHome: {
    paddingTop: 32,
    flex: 1,
    alignContent: "center",
    backgroundColor: "#6C63FF",
    flexWrap: 'wrap'
  },
  homeForm: {
    width: 300,
    paddingBottom: 36,
    marginBottom: 100,
    flex: 1,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: '#fff',
    alignSelf: "center",
  },
  homeFormImage: {
    height: 144,
    width: 144,
  },
  homeFormTitles: {
    marginTop: 18,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -1,
    color: "gray",
    alignSelf: "flex-start"
  },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  municipio: {
    width: "80%",
    backgroundColor: "red"
  },
  containerEntityPhysic: {
    marginTop: 4,
    borderRadius: 6,
    backgroundColor: "#f2f2f7",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  entitiesPhysic: {
    height: 232,
  },
  entitiesPhysicItem: {
    color: "blue"
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  formContainer: {
    marginTop: 16,
    width: "80%",
  },
  formContainerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  formContainerInput: {
    height: 40,
    marginTop: 4,
    paddingLeft: 12,
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0,
    borderWidth: 0,

    borderRadius: 6,
    backgroundColor: "#f2f2f7"
  },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  btnRegisterPhysic: {
    height: 48,
    width: "80%",
    marginTop: 24,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
  },
  btnRegisterPhysicText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"
  }
});

export default s;
