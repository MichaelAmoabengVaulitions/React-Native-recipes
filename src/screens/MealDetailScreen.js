import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { ScrollView, View, StyleSheet, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'
import { toggleFavorite } from '../store/actions/meal'


const ListItem = props => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	)
}
const MealDetailScreen = (props) => {

	const availableMeals = useSelector(state => state.meals.meals)
	const mealId = props.navigation.getParam('mealId')
	const selectedMeal = availableMeals.find(meal => meal.id === mealId)

	// Check if the current meal is a favorite

	const currentMealIsFavorite = useSelector(state =>
		state.meals.favoriteMeals.some(meal => meal.id === mealId)
	)
	const dispatch = useDispatch()

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId))
	}, [dispatch, mealId])


	useEffect(() => {
		props.navigation.setParams({
			toggleFav: toggleFavoriteHandler
		})
	}, [toggleFavoriteHandler])

	useEffect(() => {
		props.navigation.setParams({
			isFav: currentMealIsFavorite
		})
	}, [currentMealIsFavorite])


	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
			</View>
			<DefaultText style={styles.title}>Ingredients</DefaultText>
			{selectedMeal.ingredients.map((ingredient, index) => {
				return <ListItem key={index}>{ingredient}</ListItem>
			})}
			<DefaultText style={styles.title}>Steps</DefaultText>
			{selectedMeal.steps.map((step, index) => {
				return <ListItem key={index}>{step}</ListItem>
			})}
		</ScrollView>
	)
}


MealDetailScreen.navigationOptions = (navigationData) => {

	const mealTitle = navigationData.navigation.getParam('mealTitle')
	const toggleFavorite = navigationData.navigation.getParam('toggleFav')
	const isFavorite = navigationData.navigation.getParam('isFav')

	return {
		headerTitle: mealTitle,
		headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item
				title='Favorite'
				iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
				onPress={toggleFavorite}

			/>
		</HeaderButtons>
	}
}
const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-around'
	},
	title: {
		fontWeight: '700',
		textAlign: 'center',
		marginVertical: 20,
		fontSize: 20
	},
	image: {
		width: '100%',
		height: 200
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: Colors.gray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 6
	}
})

export default MealDetailScreen