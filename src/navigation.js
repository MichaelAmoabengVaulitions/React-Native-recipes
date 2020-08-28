import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from './screens/Categories'
import CategoryMealsScreen from './screens/CategoryMeals'
import FavoritesScreen from './screens/FavoritesScreen'
import FiltersScreen from './screens/FiltersScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import Colors from './constants/Colors'

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,

	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
	Favorites: FavoritesScreen,
	MealDetail: MealDetailScreen,
	Filters: FiltersScreen
},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : 'white'
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondaryColor

		},

	}
)

const MainNavigator = createAppContainer(MealsNavigator)

export default MainNavigator