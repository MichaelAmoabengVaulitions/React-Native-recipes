import { MEALS } from '../../api/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meal'

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
    case SET_FILTERS:
      const appliedFilters = action.filters
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false
        }
        if (appliedFilters.isVegeterian && !meal.isVegeterian) {
          return false
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false
        }
        return true
      })
      return {
        ...state,
        filteredMeals: updatedFilteredMeals
      }
    default:
      return state
  }

}

export default MealsReducer