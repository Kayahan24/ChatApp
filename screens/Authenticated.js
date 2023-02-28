import React, { useEffect }  from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';

export default function Authenticated() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
        ),
        headerRight: () => (
            <FontAwesome name="gear" size={28} color={colors.gray} style={{marginRight: 15}}/>
        ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Başarıyla Giriş Yapıldı</Text>
      <Text style={styles.phoneNumber}>{auth().currentUser.phoneNumber}</Text>
      <View style={{ marginTop: 30 }}>
        <Button title="Signout" onPress={() => auth().signOut()} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}>Üye Ol</Text>
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
  chatButton: {
    backgroundColor: colors.primary,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: .9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
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
  },
  phoneNumber: {
    fontSize: 21,
    marginTop: 20,
  },
});
