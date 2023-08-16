import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GameStart from './src/screens/GameStart';
import GamePlay from './src/screens/GamePlay';
import GameOver from './src/screens/GameOver';

import { useState } from 'react';

const App = () => {
  const [pickedNumber, setPickedNumber] = useState(undefined);
  const [gamerOver, setGameOver] = useState(false);

  const onPickedNumber = (picked) => {
    setPickedNumber(picked);
  }

  const gameOverHandler = () => {
    setGameOver(true);
  }

  if (pickedNumber) {
    screen = (
      <GamePlay
        gameOverHandler={gameOverHandler}
        pickedNumber={pickedNumber}
      />
    );
  } else {
    screen = <GameStart onPickedNumber={onPickedNumber} />
  }

  if (gamerOver) {
    screen = <GameOver />
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