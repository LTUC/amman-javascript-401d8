import React from 'react';

import {View, Text, FlatList, Button} from 'react-native';

function contactList({contacts}) {
    console.log("contacts : ", contacts);
    const renderItem = ({item})=> {
        return <Button title={item.name}/>
    }
    return (
        <View>
            <Text>My Contacts: </Text>
            <FlatList 
                data={contacts}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id}
            />
        </View>
    )
}
export default contactList;