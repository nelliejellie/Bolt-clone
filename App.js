import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {store} from "./store/store"
import {SafeAreaProvider} from "react-native-safe-area-context"
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="MapScreen" component={MapScreen} 
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          </View>  
        </SafeAreaProvider>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
