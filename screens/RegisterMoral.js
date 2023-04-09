import s from '../styles/SignUpStyles';
import { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView, TextInput, Image, KeyboardAvoidingView } from "react-native";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";
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
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Colonia</Text>
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Número interno/externo</Text>
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Código postal</Text>
            <TextInput style={s.formContainerInput}></TextInput>
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
                  <MenuDivider />
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Ecatepec de Morelos'); }}>Ecatepec de Morelos</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Nezahualcóyotl'); }}>Nezahualcóyotl</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Toluca'); }}>Toluca</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Naucalpan de Juárez'); }}>Naucalpan de Juárez</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Chimalhuacán'); }}>Chimalhuacán</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tlalnepantla de Baz'); }}>Tlalnepantla de Baz</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Cuautitlán Izcalli'); }}>Cuautitlán Izcalli</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tecámac'); }}>Tecámac</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Ixtapaluca'); }}>Ixtapaluca</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Atizapán de Zaragoza'); }}>Atizapán de Zaragoza</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tultitlán'); }}>Tultitlán</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Nicolás Romero'); }}>Nicolás Romero</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Chalco'); }}>Chalco</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('La Paz'); }}>La Paz</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Coacalco de Berriozábal'); }}>Coacalco de Berriozábal</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Huixquilucan'); }}>Huixquilucan</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Zumpango'); }}>Zumpango</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Texcoco'); }}>Texcoco</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Metepec'); }}>Metepec</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Zinacantepec'); }}>Zinacantepec</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Chicoloapan'); }}>Chicoloapan</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Cuautitlán'); }}>Cuautitlán</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Almoloya de Juárez'); }}>Almoloya de Juárez</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Acolman'); }}>Acolman</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Lerma'); }}>Lerma</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Huehuetoca'); }}>Huehuetoca</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Ixtlahuaca'); }}>Ixtlahuaca</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tultepec'); }}>Tultepec</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('San Felipe del Progreso'); }}>San Felipe del Progreso</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Atlacomulco'); }}>Atlacomulco</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Villa Victoria'); }}>Villa Victoria</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Temoaya'); }}>Temoaya</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tenancingo'); }}>Tenancingo</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tepotzotlán'); }}>Tepotzotlán</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('San José del Rincón'); }}>San José del Rincón</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Tenango del Valle'); }}>Tenango del Valle</MenuItem>
                  <MenuItem onPress={() => { hideMenu(); setCurrentEntity('Otzolotepec'); }}>Otzolotepec</MenuItem>
                </ScrollView>
              </Menu>
            </View>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Teléfono</Text>
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <TouchableOpacity onPress={() => { }} style={s.btnRegisterPhysic}>
            <Text style={s.btnRegisterPhysicText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterMoral;
