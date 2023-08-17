import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import GameStart from './src/screens/GameStart';
import GamePlay from './src/screens/GamePlay';
import GameOver from './src/screens/GameOver';

const App = () => {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const [pickedNumber, setPickedNumber] = useState(undefined);
  const [gamerOver, setGameOver] = useState(false);
  const [numberRounds, setNumberRounds] = useState(0);


  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onPickedNumberHandler = (picked) => {
    setPickedNumber(picked);
    setGameOver(false);

  }

  const gameOverHandler = () => {
    setGameOver(true);
  }

  const restartGameHandler = () => {
    setPickedNumber(null);
    setNumberRounds(0);
  }

  screen = <GameStart onPickedNumber={onPickedNumberHandler} />

  if (pickedNumber) {
    screen = (
      <GamePlay
        gameOverHandler={gameOverHandler}
        pickedNumber={pickedNumber}
        setNumberRounds={setNumberRounds}
        numberRounds={numberRounds}
      />
    );
  }

  if (gamerOver && pickedNumber) {
    screen = (
      <GameOver
        numberRounds={numberRounds}
        numberGuessed={pickedNumber}
        restartGame={restartGameHandler}
      />
    )
  }

  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: .5
  }
});