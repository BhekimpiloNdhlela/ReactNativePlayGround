import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';

function Meals({ route, navigation }) {
  const catId = route.params.categoryID;

  useLayoutEffect(() => {
    const screenTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: screenTitle
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <MealsList item={displayedMeals} />
  );
}

export default Meals;