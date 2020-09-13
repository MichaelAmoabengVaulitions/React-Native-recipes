import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'


import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'

const FavoritesScreen = props => {
	const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
	if (favoriteMeals.length === 0 || !favoriteMeals) {
		return (
			<View style={styles.content}>
				<DefaultText style={styles.contentText}>No favorite meals found, please add some</DefaultText>
			</View>
		)
	}

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

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	contentText: {
		color: Colors.danger
	}
})


export default FavoritesScreen