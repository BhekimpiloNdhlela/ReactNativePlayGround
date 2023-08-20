import {
    Image,
    View,
    StyleSheet,
    ScrollView
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealShortDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import FavoritesContext from "../store/context/favorites-context";

const MealDetail = ({ route, navigation }) => {
    const mealID = route.params.mealID;
    const selectedMeal = MEALS.find((meal) => mealID === meal.id)

    const favoriteMealsContext = useContext(FavoritesContext);
    const isMealFavorite = favoriteMealsContext.ids.includes(mealID);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={isMealFavorite ? "favorite-border" : "favorite"}
                        color={"white"}
                        onPress={changeFavoriteHandler}
                    />
                )
            }
        });
    }, [navigation, changeFavoriteHandler]);

    const changeFavoriteHandler = () => {
        if (isMealFavorite) {
            favoriteMealsContext.removeFavorite(mealID);
        } else {
            favoriteMealsContext.addFavorite(mealID);
        } 
    }

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <MealShortDetails
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                duration={selectedMeal.duration}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle subtitle='Ingrediants' />
                    <List list={selectedMeal.ingredients} />
                    <Subtitle subtitle='Steps' />
                    <List list={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetail;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
});