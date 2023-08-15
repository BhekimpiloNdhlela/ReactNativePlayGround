import { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const GameStart = ({ onPickedNumber }) => {

  const [input, setInput] = useState("");
  const resetHandler = () => {
    setInput("");
  }

  const changeInputHandler = (enteredInput) => {
    setInput(enteredInput);
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(input);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert(
        'Innvalid number',
        'Number has to be a umber betweenn 0 and 100.',
        [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
      );
      return;
    }

    console.log('Valid Nuymer !!!');
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={changeInputHandler}
        value={input}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler} title="Reset" />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandler} title="Confirm" />
        </View>
      </View>
    </View>
  );
}

export default GameStart;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});