import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Seobwoo';
  return (
    <View style={styles.container}>
        {name === 'Seobwoo' && (
            <Text style={styles.text}>
                My name is Seobwoo
            </Text>
        )}
        
        {name === 'SeobwooKim' && (
            <Text style={styles.text}>
                My name is Not Seobwoo
            </Text>
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
