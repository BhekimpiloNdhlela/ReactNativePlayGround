import { Text, View, StyleSheet } from "react-native";

import { Colors } from '../../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {props.guessedNumber}
      </Text>
    </View>
  );
}

export default NumberContainer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
});