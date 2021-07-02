import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

import ContactList from './components/contact-list';

export default function App() {
  
  const [myContacts, setMyContacts] = useState([]);
  const [permission, setPermission] = useState(false);

  useEffect(()=>{
    getContactsPermissions();
  }, [])

  const getContactsPermissions = async ()=> {
    const { status } = await Contacts.requestPermissionsAsync();
    setPermission(status === 'granted');
  }

  const getContacts = async () => {
    
      const { data } = await Contacts.getContactsAsync();
      console.log("@@@@@@@@@@@@@@")
      console.log({data}); 
      setMyContacts(data);
    
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Contacts Application</Text>
        <Button title="Get my contacts" onPress={getContacts}/>
        <ContactList contacts={myContacts} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
