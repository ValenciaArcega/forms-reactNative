import s from '../styles/SignUpStyles';
import entities from '../data/Entities';
import { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView, TextInput, Image, KeyboardAvoidingView, Alert } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const RegisterMoral = () => {

  const [currentEntity, setCurrentEntity] = useState('Elegir municipio');
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const navigation = useNavigation();
  const goHome = () => navigation.replace('Home');

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
            <TextInput style={s.formContainerInput} placeholder="Clave de 12 digitos"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Razon Social</Text>
            <TextInput style={s.formContainerInput} placeholder="S.A. de C.V..."></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.homeFormTitles}>Dirección fiscal</Text>
            <Text style={s.formContainerText}>Calle</Text>
            <TextInput style={s.formContainerInput} placeholder="Avenida o calle principal"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Colonia</Text>
            <TextInput style={s.formContainerInput} placeholder="Ingresa tu colonia"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Número interno/externo</Text>
            <TextInput style={s.formContainerInput} placeholder="Ej. Lote 2 Edificio B-8"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Código postal</Text>
            <TextInput style={s.formContainerInput} placeholder="Código de zona"></TextInput>
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
                  {entities.map((el) => {
                    return (
                      <MenuItem onPress={() => { hideMenu(); setCurrentEntity(el); }}>{el}</MenuItem>
                    );
                  })}
                </ScrollView>
              </Menu>
            </View>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Teléfono</Text>
            <TextInput style={s.formContainerInput} placeholder="Ingresa el número celular"></TextInput>
          </View>

          <TouchableOpacity onPress={() => Alert.alert(currentEntity)} style={s.btnRegisterPhysic}>
            <Text style={s.btnRegisterPhysicText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterMoral;
