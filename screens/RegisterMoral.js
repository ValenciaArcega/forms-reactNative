import s from '../styles/SignUpStyles';
import entities from '../data/Entities';
import { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView, TextInput, Image, KeyboardAvoidingView, Alert } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../database/credentials';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const RegisterMoral = () => {
  ////////////////////////////////////////////////////////////////
  // variables
  const [currentEntity, setCurrentEntity] = useState('Elegir municipio');
  const [visible, setVisible] = useState(false);
  const [userMoral, setUserMoral] = useState({
    rfc: '',
    razonSocial: '',
    calle: '',
    colonia: '',
    numExt: '',
    codigoPostal: '',
    municipio: '',
    telefono: ''
  });
  const navigation = useNavigation();
  ////////////////////////////////////////////////////////////////
  // functions
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const goHome = () => navigation.replace('Home');
  const handleChangeText = (n, value) => setUserMoral({ ...userMoral, [n]: value });
  const registerUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "userMoral"), userMoral);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  ////////////////////////////////////////////////////////////////
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={s.screenHome}>
        <View style={s.homeForm}>

          <TouchableOpacity onPress={goHome} style={s.ButtonBackHome}>
            <Icon name="chevron-left" size={32} color='#6C63FF' />
            <Text style={s.ButtonBackHomeText}>Regresar</Text>
          </TouchableOpacity>

          <Image style={s.homeFormImage} source={require('../assets/signUp.png')} />

          <View style={s.formContainer}>
            <Text style={s.homeFormTitles}>Datos</Text>
            <Text style={s.formContainerText}>RFC</Text>
            <TextInput onChangeText={v => handleChangeText("rfc", v)} style={s.formContainerInput} placeholder="Clave de 12 digitos"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Razon Social</Text>
            <TextInput onChangeText={v => handleChangeText("razonSocial", v)} style={s.formContainerInput} placeholder="S.A. de C.V..."></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.homeFormTitles}>Dirección fiscal</Text>
            <Text style={s.formContainerText}>Calle</Text>
            <TextInput onChangeText={v => handleChangeText("calle", v)} style={s.formContainerInput} placeholder="Avenida o calle principal"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Colonia</Text>
            <TextInput onChangeText={v => handleChangeText("colonia", v)} style={s.formContainerInput} placeholder="Ingresa tu colonia"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Número interno/externo</Text>
            <TextInput onChangeText={v => handleChangeText("numExt", v)} style={s.formContainerInput} placeholder="Ej. Lote 2 Edificio B-8"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Código postal</Text>
            <TextInput onChangeText={v => handleChangeText("codigoPostal", v)} style={s.formContainerInput} placeholder="Código de zona"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Municipio</Text>

            <View style={s.containerEntityPhysic}>
              <Menu
                style={s.entitiesPhysic}
                visible={visible}
                anchor={<Text style={{ color: "#6C63FF", fontSize: 16 }} onPress={showMenu}>{currentEntity}</Text>}
                onRequestClose={hideMenu}
              >
                <ScrollView>
                  {/* <MenuDivider color="#e8e8e8"/> */}
                  {entities.map((el, i) => {
                    return (
                      <MenuItem key={i} onPress={() => {
                        userMoral.municipio = el;
                        hideMenu();
                        setCurrentEntity(el);
                      }}>{el}</MenuItem>
                    );
                  })}
                </ScrollView>
              </Menu>
            </View>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Teléfono</Text>
            <TextInput onChangeText={v => handleChangeText("telefono", v)} style={s.formContainerInput} placeholder="Ingresa el número celular"></TextInput>
          </View>

          <TouchableOpacity onPress={() => {
            registerUser();
            Alert.alert('Datos registrados ✅');
          }} style={s.btnRegisterPhysic}>
            <Text style={s.btnRegisterPhysicText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterMoral;
