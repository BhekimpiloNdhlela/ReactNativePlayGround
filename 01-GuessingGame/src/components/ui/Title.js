import { Text, StyleSheet } from "react-native";

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
    color: "#ddb52f",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  }
});

