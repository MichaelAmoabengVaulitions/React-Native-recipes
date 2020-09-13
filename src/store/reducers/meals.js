import { MEALS } from '../../api/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meal'
console.log("MEALS", MEALS)

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}



const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals]
        updatedFavMeals.splice(existingIndex, 1)
        return {
          ...state,
          favoriteMeals: updatedFavMeals
        }
      } else {
        const mealToAdd = state.meals.find(meal => meal.id === action.mealId)
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(mealToAdd)
        }
      }

    default:
      return state
  }

}

export default MealsReducer