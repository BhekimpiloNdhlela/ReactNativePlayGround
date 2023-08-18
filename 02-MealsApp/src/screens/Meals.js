import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";



const Meals = ({ route }) => {


    return (
        <View style={styles.container}>
            <Text>{route.params.categoryID}</Text>
        </View>
    )
}

export default Meals;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});