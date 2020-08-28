import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from './screens/Categories'
import CategoryMealsScreen from './screens/CategoryMeals'
import FavoritesScreen from './screens/FavoritesScreen'
import FiltersScreen from './screens/FiltersScreen'
import MealDetailScreen from './screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
    Filters: FiltersScreen
})

const MainNavigator = createAppContainer(MealsNavigator)

export default MainNavigator