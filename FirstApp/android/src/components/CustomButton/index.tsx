import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  onClick: () => void;
}

const Component = (props: Props) => {
  const {text, onClick} = props;

  return (
    <TouchableOpacity style={styles.Button} onPress={onClick}>
      <Text style={styles.ButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Component;
