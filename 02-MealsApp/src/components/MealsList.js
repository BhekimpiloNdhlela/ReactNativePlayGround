import {
    StyleSheet,
    ScrollView
} from "react-native";

const MealsList = ({ item }) => {

    function renderMealItem(itemData) {
        const item = itemData.item;

        const onPressHandler = () => {
            navigation.navigate("MealDetails", {
                mealID: itemData.item.id
            });
        }
        return (
            <MealItem
                onPress={onPressHandler}
                title={item.title}
                imageUrl={item.imageUrl}
                affordability={item.affordability}
                complexity={item.complexity}
                duration={item.duration}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={item}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});