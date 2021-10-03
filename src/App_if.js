import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Seobwoo';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(() => {
          if (name === 'SeobwooKim') return 'My name is SeobwooKim';
          else if (name === 'Seobwoo') return 'My name is Seobwoo';
          else return 'My name is React Native';
        })()}
        </Text>
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
