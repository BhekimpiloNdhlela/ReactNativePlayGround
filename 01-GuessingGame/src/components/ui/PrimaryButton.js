import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.buttonPressed] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#644202" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elavation: 2
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  buttonPressed: {
    opacity: 0.75
  }
});