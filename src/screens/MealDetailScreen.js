import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { MEALS } from '../api/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'


const ListItem = props => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	)
}
const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam('mealId')
	const selectedMeal = MEALS.find(meal => meal.id === mealId)

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
	const mealId = navigationData.navigation.getParam('mealId')
	const selectedMeal = MEALS.find(meal => meal.id === mealId)
	return {
		headerTitle: selectedMeal.title,
		headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item
				title='Favorite'
				iconName='ios-star'
				onPress={() => 'something'}

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