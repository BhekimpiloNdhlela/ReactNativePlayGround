import { View, Text, Image, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Title> YOU GOT IT!!! </Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{props.numberRounds}</Text> rounds to guess the nnumber <Text style={styles.hightlight}>{props.numberGuessed}</Text>
      </Text>
      <PrimaryButton onPress={props.restartGame}>
        Start new game <MaterialCommunityIcons name={"restart"} size={16} color="white" />
      </PrimaryButton>
    </View>
  )
}

export default GameOver;

const styles = StyleSheet.create({
  summaryText: {
    fontFamily: 'open-sans',
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24
  },
  hightlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderColor: Colors.primary500,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  }
});