import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorites: () => { },
    removeFavorites: () => { }
});

const FavoritesContextProvider = ({ children }) => {

    const [favoriteMeals, setFavoriteMeals] = useState();

    const addFavoriteMeal = (id) => {
        setFavoriteMeals((current) => [...current, id]);
    }

    const removeFavoriteMeal = (id) => {
        setFavoriteMeals((current) => current.filter((mealID) => mealID !== id));
    }

    const value = {
        ids: favoriteMeals,
        addFavorites: addFavoriteMeal,
        removeFavorites: removeFavoriteMeal
    }

    return (
        <FavoritesContext.Provider value={value}> 
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;