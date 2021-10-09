import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Home Screen Lahmer </Text>
    </View>
  );
};

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Home} />
      <Stack.Screen name="Profile" component={Home} />
      <Stack.Screen name="Settings" component={Home} />
    </Stack.Navigator>
  );
}
export const MainApp: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
