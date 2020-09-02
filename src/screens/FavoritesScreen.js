import React from 'react'
import MealList from '../components/MealList'
import { MEALS } from '../api/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = props => {
	const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' | meal.id === 'm2' | meal.id === 'm3')
	return (
		<MealList
			listData={favoriteMeals}
			navigation={props.navigation}
		/>
	)
}

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Your Favorites',
		headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item title='Menu' iconName='ios-menu' onPress={() => {
				navData.navigation.toggleDrawer()
			}} />
		</HeaderButtons>
	}
}



export default FavoritesScreen