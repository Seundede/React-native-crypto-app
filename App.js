import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,  View } from 'react-native';
import Home from './src/Pages/Home';
export default function App() {
 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
     <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
