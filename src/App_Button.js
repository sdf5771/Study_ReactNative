import React from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Text style= {{ fontSize: 30, marginBottom: 10}}>Button Component</Text>
        <Button title="Button" color='red' onPress={() => alert('Click !!!')}/>
    </View>
  );
}

