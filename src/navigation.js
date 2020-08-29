import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from './screens/Categories'
import CategoryMealsScreen from './screens/CategoryMeals'
import FavoritesScreen from './screens/FavoritesScreen'
import FiltersScreen from './screens/FiltersScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import Colors from './constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,

	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
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

const MealsFavTabNavigator = createBottomTabNavigator({
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarLabel: 'Yummy meals😋',
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-restaurant'
						size={25}
						color={tabInfo.tintColor}
					/>
				)
			}
		}
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarLabel: 'Favorites🤩',
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
},
	{
		tabBarOptions: {
			activeTintColor: Colors.danger
		}
	})


const MainNavigator = createAppContainer(MealsFavTabNavigator)

export default MainNavigator