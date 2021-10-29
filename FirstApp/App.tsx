import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from './android/src/components/CustomButton';

const App = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>My age is:</Text>
      <View style={styles.ControlsContainer}>
        <Text style={styles.Age}>0</Text>
        <View style={styles.ButtonContainer}>
          <CustomButton text="-" />
          <CustomButton text="+" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 2,
  },
  ControlsContainer: {
    alignItems: 'center',
    margin: 20,
    width: '100%',
  },
  Age: {
    color: '#4e086f',
    fontSize: 20,
    fontWeight: '800',
  },
  ButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: 20,
    justifyContent: 'space-around',
  },
  Button: {
    backgroundColor: '#d73070',
    padding: 10,
    width: 50,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
