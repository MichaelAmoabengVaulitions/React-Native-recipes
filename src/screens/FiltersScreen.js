import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'
import { setFilters } from '../store/actions/meal'

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<DefaultText style={styles.label}>{props.label}</DefaultText>
			<Switch
				value={props.state}
				onValueChange={props.onChange}
				trackColor={{ true: Colors.secondaryColor }}
				thumbColor={'white'}
			/>
		</View>
	)
}

const FiltersScreen = (props) => {

	const [isGlutenFree, setIsGlutenFree] = useState(false)
	const [isLactoseFree, setIsLactoseFree] = useState(false)
	const [isVegan, setIsVegan] = useState(false)
	const [isVegetarian, setIsVegetarian] = useState(false)

	const dispatch = useDispatch()

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			isGlutenFree: isGlutenFree,
			isLactoseFree: isLactoseFree,
			isVegan: isVegan,
			isVegetarian: isVegetarian
		}
		console.log(appliedFilters);
		dispatch(setFilters(appliedFilters))
	}, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch])

	useEffect(() => {
		props.navigation.setParams({ save: saveFilters })
	}, [saveFilters])

	return (
		<View style={styles.screen}>
			<DefaultText style={styles.title}>Available Filters/Restrictions</DefaultText>
			<FilterSwitch
				label={'Gluten-Free'}
				state={isGlutenFree}
				onChange={() => setIsGlutenFree((prevState) => !prevState)}
			/>
			<FilterSwitch
				label={'Lactose-Free'}
				state={isLactoseFree}
				onChange={() => setIsLactoseFree((prevState) => !prevState)}
			/>
			<FilterSwitch
				label={'Vegan'}
				state={isVegan}
				onChange={() => setIsVegan((prevState) => !prevState)}
			/>
			<FilterSwitch
				label={'Vegetarian'}
				state={isVegetarian}
				onChange={() => setIsVegetarian((prevState) => !prevState)}
			/>
		</View>
	)
}

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filters',
		headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item
				title='Menu'
				iconName='ios-menu'
				onPress={() => {
					navData.navigation.toggleDrawer()
				}}
			/>
		</HeaderButtons>,
		headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item
				title='Menu'
				iconName='ios-bookmark'
				onPress={navData.navigation.getParam('save')}
			/>
		</HeaderButtons>
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontWeight: '700',
		fontSize: 20,
		marginVertical: 20,
		textAlign: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 50
	},
	label: {

	}
})

export default FiltersScreen