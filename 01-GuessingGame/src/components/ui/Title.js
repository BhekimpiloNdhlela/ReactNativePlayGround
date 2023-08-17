import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

export default Title;


const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: "center",
    color: "white",
    // borderWidth: Platform.OS === 'ios' ? 0 : 2,
    borderWidth: Platform.select({ 'ios' : 0, 'android' : 2}),
    borderColor: "#ddb52f",
    padding: 12,
    maxWidth: "80%"
  }
});

