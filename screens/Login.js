import React, { useState} from 'react';
import { Text,  StyleSheet, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

export default function Login(props) {

   //creando la variable estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const iniciarSesion = async () => {
    try{
       await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Iniciando sesion', 'Acediendo...');
        props.navigation.navigate('TaskScreen');

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
}

  return (
    <View style={styles.padre}>

      <View>
        <Image source={require('../assets/user.png')} style={styles.profile}/>
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput placeholder="correo@gmail.com" style={{paddingHorizontal:15}}
            onChangeText={(text) => setEmail(text)} secureTextEntry={false}/>
        </View>

        <View style={styles.cajaTexto}>
          <TextInput placeholder="Password" style={{paddingHorizontal:15}}
           onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
          
        </View>

        <View>
           <TouchableOpacity style={{backgroundColor: 'blue', padding: 10, borderRadius: 10, alignItems: 'center'}}
            onPress={iniciarSesion}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Iniciar Sesion</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cajaTexto: {
    paddingVertical: 10,
    backgroundColor: '#cccccc70',
    borderRadius: 20,
    marginVertical: 10,
  },
});