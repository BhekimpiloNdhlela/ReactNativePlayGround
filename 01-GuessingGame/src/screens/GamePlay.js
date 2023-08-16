import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

const GamePlay = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or Lower </Text>
            </View>
            {/* <View>
                LOG ROUND
            </View> */}
        </View>
    )
}

export default GamePlay;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        color: "#ddb52f",
        fontWeight: "bold",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    }
});