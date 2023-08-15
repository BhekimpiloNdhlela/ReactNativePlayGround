import {
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#210644" }}
                onPress={() => props.onDelete(props.id)}
                style={({ pressed }) => pressed && styles.iosPressedItem}
            >
                <Text style={styles.goalText}>{props.goal}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    iosPressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: "white",
        padding: 8,
    }
});