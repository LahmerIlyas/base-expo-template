/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainApp } from './src/navigation';

// Define all your fonts below
const customFonts = {
  // SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.ttf'),
};
export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    Font.loadAsync(customFonts)
      .then(() => setLoaded(true))
      .catch((e) => console.log(JSON.stringify(e)));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!loaded && <Text>Loading Assets</Text>}
      {loaded && <MainApp />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
