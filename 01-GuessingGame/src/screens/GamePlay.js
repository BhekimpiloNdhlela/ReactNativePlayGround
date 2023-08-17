import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomNumberBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  }
  return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

const GamePlay = (props) => {
  const initialGuess = generateRandomNumberBetween(1, 100, props.pickedNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameGuesses, setGameGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === props.pickedNumber) {
      props.gameOverHandler();
    }
  }, [currentGuess, props.pickedNumber, props.gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    props.setNumberRounds(props.numberRounds + 1);
    // check if the user is lieng
    if ((direction === "LOWER" && currentGuess < props.pickedNumber) || (direction === "HIGHER" && currentGuess > props.pickedNumber)) {
      Alert.alert(
        "Don't lie!",
        "You know that unamanga",
        [{ text: "Sorry", style: "cancel" }]
      )
      return;
    }

    switch (direction) {
      case 'LOWER':
        maxBoundary = currentGuess;
        break;
      case 'HIGHER':
        minBoundary = currentGuess + 1;
        break;
      default:
        console.error(`ndefined direction: '${direction}'`);
        break;
    }

    const newGuess = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
    setGameGuesses((previousGuesses) => [newGuess, ...previousGuesses])
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer guessedNumber={currentGuess} />
      <Card>
        <InstructionText style={styles.instrunctionText}>Higher or Lower???</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('LOWER')}>
              <FontAwesome name='minus' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('HIGHER')}>
              <FontAwesome name='plus' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={gameGuesses}
          renderItem={(itemData) => <GuessLogItem round={gameGuesses.length - itemData.index} guess={itemData.item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

export default GamePlay;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flex: 1
  },
  instrunctionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: "row"
  },
});