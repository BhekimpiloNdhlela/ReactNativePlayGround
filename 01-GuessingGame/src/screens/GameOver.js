import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = (props) => {

  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title> YOU GOT IT!!! </Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require("../../assets/images/success.png")} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.hightlight}>{props.numberRounds}</Text> rounds to guess the nnumber <Text style={styles.hightlight}>{props.numberGuessed}</Text>
        </Text>
        <PrimaryButton onPress={props.restartGame}>
          Start new game <MaterialCommunityIcons name={"restart"} size={16} color="white" />
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}

export default GameOver;

// const deviceWidth = Dimensions.get('window').width;

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
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // height: deviceWidth < 380 ? 150 : 300,
    // width: deviceWidth < 380 ? 150 : 300,
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