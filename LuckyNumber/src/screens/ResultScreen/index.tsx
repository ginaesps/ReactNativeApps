import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title';

const Component = () => {
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const luckyNumber = () => {
    if (!username || age == null) {
      ToastAndroid.show('Please be sure to fill in the blanks', 1000);
      return;
    }
    let a = Number(age);

    if (a < 1 || a > 120) {
      ToastAndroid.show('Please enter a valid age', 1000);
      return;
    }
    if (a < 10) {
      a *= 7;
    }
    while (a > 9) {
      a = a
        .toString()
        .split('')
        .reduce((x, y) => Number(x) + Number(y));
    }
  };

  return (
    <View style={styles.containerVid}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../src/img/homeTarot.jpg')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TextInput
        placeholder="Enter your name"
        onChangeText={name => setUsername(name)}
      />
      <TextInput
        placeholder="Enter your age"
        keyboardType="numeric"
        onChangeText={num => setAge(num)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Results')}
        style={styles.button}>
        <Text style={styles.buttonText}>Obtain number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerVid: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
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
