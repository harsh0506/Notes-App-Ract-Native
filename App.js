import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './components/Home/Home';
import { height, width } from './components/helpers/Dimmention';


export const UserContext = React.createContext()

export default function App() {
  return (
    <UserContext.Provider value={5}>
      <View style={styles.container}>
         <Home />
      </View>
    </UserContext.Provider>

  );
}

const Card = () => {
  return (
    <View style={styles.Card}>
      <Text style={styles.headings}>kbvsvlj</Text>
      <Text style={styles.Notes}>kjbjeljelwei</Text>
    </View>
  )
}

const Card2 = () => {
  return (
    <View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height,width,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});

