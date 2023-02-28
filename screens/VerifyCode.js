import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';

export default function OTP(props) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.bigCircle}></View>
      <View style={styles.smallCircle}></View>
      <Text style={styles.text}>Numarayı Giriniz</Text>
      <TextInput
        autoFocus
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity
            style={styles.button}
            onPress={() => props.onSubmit(code)}>
            <Text style={styles.buttonText}>Onayla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
    fontWeight:400,

  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.40,
    height: Dimensions.get('window').height * 0.40,
    backgroundColor: '#f57c00',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -80,
    left:-30,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.39,
    height: Dimensions.get('window').height * 0.39,
    backgroundColor: '#e02a48',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  button: {
    borderRadius:30,
    marginTop: 20,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F78E1E',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText:{
    color: 'white',
    fontSize: 14,
    fontWeight:'bold',
  },
});
