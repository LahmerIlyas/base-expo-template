/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainApp } from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
