import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Seobwoo';
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

