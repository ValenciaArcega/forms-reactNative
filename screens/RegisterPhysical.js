import s from "../src/styles/SignUpStyles";
import { useState } from 'react';
import { Alert } from "react-native";
import { Text, View, ScrollView, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Menu, MenuDivider, MenuItem } from 'react-native-material-menu';

const RegisterPhysical = () => {

  const [currentEntity, setCurrentEntity] = useState('Elegir municipio');
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={s.screenHome}>
        <View style={s.homeForm}>

          <Image style={s.homeFormImage} source={require('../assets/signIn.png')} />

          <View style={s.formContainer}>
            <Text style={s.homeFormTitles}>Datos personales</Text>
            <Text style={s.formContainerText}>RFC</Text>
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Nombre</Text>
            <TextInput style={s.formContainerInput} placeholder="Ingresa tu nombre completo"></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Apellidos</Text>
            <TextInput style={s.formContainerInput} placeholder="Ingresa tus apellidos"></TextInput>
          </View>


          <View style={s.formContainer}>
            <Text style={s.homeFormTitles}>Datos de dirección</Text>
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
            <Text style={s.formContainerText}>Código postal</Text>
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <View style={s.formContainer}>
            <Text style={s.formContainerText}>Teléfono</Text>
            <TextInput style={s.formContainerInput}></TextInput>
          </View>

          <TouchableOpacity onPress={() => { Alert.alert('Hey'); }} style={s.btnRegisterPhysic}>
            <Text style={s.btnRegisterPhysicText}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterPhysical;
