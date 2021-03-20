import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId); // check if this meal exists in favoriteMeals array.
            if (existingIndex >= 0) { // if meal exist in favoriteMeals array then remove it
                const updatedFavMeals = [...state.favoriteMeals]; // store favoriteMeals data in updatedFavMeals array

                updatedFavMeals.splice(existingIndex, 1); // remove meal from favoriteMeals array
                return { ...state, favoriteMeals: updatedFavMeals } // return new state (the initial state(meals,filteredMeals) and the new favoriteMeals(updatedFavMeals))
            } else { // if meal does not esist in favoriteMeals array then add it
                const meal = state.meals.find(meal => meal.id === action.mealId); // get the added meal
                //console.log("state.meals",state.meals);
                //console.log('action.mealdId',action.mealdId)
                // console.log('meal.id',meal.id)
                // console.log('added',meal)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) } //return new state (the initial state(meals , filteredMeals) and the new favoriteMeals(updatedFavMeals) with added meal)
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.gluteenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegeterian && !meal.isVegeterian) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updatedFilteredMeals }
        default:
            return state;
    }
}

export default mealsReducer;