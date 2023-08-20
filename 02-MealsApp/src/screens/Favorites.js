import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { useContext } from "react";
import FavoritesContext from "../store/context/favorites-context";

const Favorites = () => {

    const favoriteMealsContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id));
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have not favorite meals yet.
                </Text>
            </View>
        )
    }

    return (
        <MealsList item={favoriteMeals} />
    );
}

export default Favorites;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});