import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import CompteScreen from './compte'; // Importer votre composant CompteScreen depuis compte.js
import AmisScreen from './Amis'; // Importer votre composant CompteScreen depuis compte.js
import PlannerScreen from './Planner'; // Importer votre composant CompteScreen depuis compte.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Compte" component={CompteScreen} />
        <Stack.Screen name="Amis" component={AmisScreen} />
        <Stack.Screen name="Planner" component={PlannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      {/* Header section with logo and button */}
      <View style={styles.header}>

        <Image
          source={require('./assets/logo.png')}
          style={styles.logoStyle}
        />

        <View style={styles.AmisContainer}>
          <Button title="Compte" onPress={() => navigation.navigate('Compte')} color="black"/>
        </View>
      </View>

      <View style={styles.Pibi}>
        <Image
          source={require('./assets/Pibii.png')}
          style={styles.imageStyle}
        />

        <View style={styles.bubble}>
          <Text style={styles.text}>
            Hello ! {'\n'}
            J'espère que tu vas bien ! {'\n'}
            Voici ce qui t'attends pour aujourd'hui : {'\n'}
            présentation {'\n'}
            réviser séries
          </Text>
          <View style={styles.arrow} />
        </View>
      </View>

      {/* Menu section */}
      <View style={styles.menu}>
        <Button title="Planner" onPress={() => {navigation.navigate('Planner') }} color="black"/>
        <Button title="Home" onPress={() => { navigation.navigate('App')}} color="black"/>
        <Button title="Amis" onPress={() => { navigation.navigate('Amis')}} color="black"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: "#74A17B",
    height: 120,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    left: '50%',
    top: '50%',
  },
  AmisContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    right: '5%',
    top: '25%',
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#74A17B",
    height: 100,
  },
  imageStyle: {
    top: '30%',
    left: '7%',
    resizeMode: 'cover',
    width: 350,
    height: 470,
  },
  logoStyle: {
    top: '-5%',
    left: '110%',
    height: 100,
    width: 100,
  },
  bubble: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    top: "15%",
    right: '10%',
    maxWidth: 200,
  },
  Pibi: {
    position: 'absolute',

    backgroundColor: "#BCCEBF",
    borderRadius: 10,
    height: '78%',
    top: '12%',
    left: 0,
    width: '107%',
  },
  arrow: {
    position: 'relative',
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    top: 18,
    left: 30,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
