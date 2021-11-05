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

const App = () => {
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
      let strings = a.toString();
      let digits = strings.split('');
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
        a = sum;
      }
    }
    ToastAndroid.show(`hola ${username} tu numero de la suerte es  ${a}`, 4000);
  };

  return (
    <View style={styles.background}>
      <View style={styles.containerVid}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Lucky Number</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={require('./src/img/homeTarot.jpg')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <View style={styles.centrar}>
          <View style={styles.TextInput}>
            <TextInput
              placeholder="Enter your name"
              onChangeText={name => setUsername(name)}
            />
          </View>
          <View style={styles.TextInput}>
            <TextInput
              placeholder="Enter your age"
              keyboardType="numeric"
              onChangeText={num => setAge(num)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => luckyNumber()}>
          <Text style={styles.buttonText}>Obtain number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'purple',
    height: '100%',
  },
  banner: {
    height: 320,
    width: 412,
    borderRadius: 50,
    borderWidth: 1,
  },
  centrar: {
    alignItems: 'center',
    alignContent: 'stretch',
  },
  TextInput: {
    alignItems: 'center',
    marginBottom: 20,
    display: 'flex',
    width: 170,
    backgroundColor: 'violet',
    borderRadius: 20,
  },
  TextInputt: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
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
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: 'yellow',
  },
  containerTitle: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
