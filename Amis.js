import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const AmisScreen = () => {
  return (



    <View style={styles.container}>


    <Text style={styles.title}>Online Users</Text>
    <View style={styles.user}>
    <Image source={require('./assets/arnaud.png')} style={styles.photo} />
    <Text style={styles.name}>Arnaud</Text>
    <Text style={styles.status}>At "Cours De Gymnastique"</Text>
    </View>
    <View style={styles.user}>
    <Image source={require('./assets/solal.png')} style={styles.photo} />
    <Text style={styles.name}>Solal</Text>
    <Text style={styles.status}>At Université de la vie " de Bruxelles</Text>
    </View>
    <View style={styles.user}>
    <Image source={require('./assets/louis.png')} style={styles.photo} />
    <Text style={styles.name}>Louis</Text>
    <Text style={styles.status}>at ' qg des macronistes' </Text>
    </View>
    <View style={styles.user}>
    <Image source={require('./assets/paul.png')} style={styles.photo} />
    <Text style={styles.name}>Paul</Text>
    <Text style={styles.status}>Offline... in holiday</Text>
    </View>
    </View>
  
    );
    };
     
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    photo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    status: {
        fontSize: 16,
        color: '#666',
    },
        status: {
        fontSize: 16,
        color: '#666',
    },
    });
     




export default AmisScreen;