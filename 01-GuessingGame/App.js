import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GameStart from './src/screens/GameStart';
import GamePlay from './src/screens/GamePlay';

import { useState } from 'react';

const App = () => {
  const [pickedNumber, setPickedNumber] = useState(undefined);

  const onPickedNumber = (picked) => {
    setPickedNumber(picked);
  }

  if (pickedNumber) {
    screen = <GamePlay />
  } else {
    screen = <GameStart onPickedNumber={onPickedNumber} />
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