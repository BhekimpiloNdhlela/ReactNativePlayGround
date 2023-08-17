import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { Colors } from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
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

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess the number!!!</Title>
      <Card>
        <InstructionText>Enter a number.</InstructionText>
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
            <PrimaryButton onPress={resetHandler}>
              <MaterialIcons name="cancel" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>
              <MaterialIcons name="check-circle" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameStart;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row"
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