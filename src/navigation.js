import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from './screens/Categories'
import CategoryMealsScreen from './screens/CategoryMeals'
import FavoritesScreen from './screens/FavoritesScreen'
import FiltersScreen from './screens/FiltersScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import Colors from './constants/Colors'
import { Ionicons } from '@expo/vector-icons'


const defaultStackNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : 'white'
	},
	headerTitleStyle: {
		fontWeight: '700'
	},
	headerBackTitleStyle: {
		fontWeight: '700'
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondaryColor

}

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
	MealDetail: MealDetailScreen,
},

	{
		defaultNavigationOptions: defaultStackNavigationOptions
	}
)


const FavoritesStack = createStackNavigator({
	Favorites: {
		screen: FavoritesScreen,

	},
	MealDetail: MealDetailScreen
},
	{
		defaultNavigationOptions: defaultStackNavigationOptions
	}
)
const tabNavigatorConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarLabel: 'Yummy meals',
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-restaurant'
						size={25}
						color={tabInfo.tintColor}
					/>
				)
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorites: {
		screen: FavoritesStack,
		navigationOptions: {
			tabBarLabel: 'Favorites',
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-star'
						size={25}
						color={tabInfo.tintColor}
					/>
				)
			}
		}
	},
}
const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabNavigatorConfig, {
			activeColor: 'white',
			shifting: true,
			barStyle: {
				backgroundColor: Colors.tertiaryColor
			}
		})
		: createBottomTabNavigator(
			tabNavigatorConfig,
			{
				tabBarOptions: {
					activeTintColor: Colors.danger
				}
			})

const FiltersStack = createStackNavigator({
	Filters: FiltersScreen
}, {
	navigationOptions: {
		drawerLabel: 'Filters'
	},
	defaultNavigationOptions: defaultStackNavigationOptions
})



const MainNavigator = createDrawerNavigator({
	Mealsfav: {
		screen: MealsFavTabNavigator,
		navigationOptions: {
			drawerLabel: 'Meals'
		}
	},
	Filters: FiltersStack

}, {
	contentOptions: {
		activeTintColor: Colors.secondaryColor,
		labelStyle: {
			fontSize: 18
		}
	}
})

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator