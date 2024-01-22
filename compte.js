import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";



const CompteScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const path = `${FileSystem.documentDirectory}/credentials.txt`;

      const fileContent = await FileSystem.readAsStringAsync(path);
  
      // Séparer les lignes du fichier
      const lines = fileContent.split('\n');
  
      // Vérifier les identifiants
      for (const line of lines) {
        const [storedEmail, storedPassword] = line.split('|');
        if (email === storedEmail && password === storedPassword) {
          console.log('Identification réussie !');
          return; // Sortir de la boucle si les identifiants correspondent
        }
      }

          // Si la boucle est terminée, les identifiants ne correspondent pas
    console.log('Identification échouée. Vérifiez vos identifiants.');
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier :', error);
  }
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BCCEBF' }}>
      <Image style={styles.image} source={require('./assets/Pibii.png')} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCCEBF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 210,
    height: 210,
    left: '13%',

  },
  inputView: {
    backgroundColor: "#74A17B",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#74A17B",
  },
  bloc : {
marginTop: "50%",
    marginBottom : 80,
    alignItems: 'center',
  }
});

export default CompteScreen;
