import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'

const FilterSwitch = props => {

}

const FiltersScreen = () => {
	const [isGlutenFree, setIsGlutenFree] = useState(false)

	return (
		<View style={styles.screen}>
			<DefaultText style={styles.title}>Available Filters/Restrictions</DefaultText>
			<View style={styles.filterContainer}>
				<DefaultText style={styles.label}>Gluten-free</DefaultText>
				<Switch
					value={isGlutenFree}
					onValueChange={(newValue) => setIsGlutenFree(newValue)}
					trackColor={{ true: Colors.secondaryColor }}
					thumbColor={'whites'}
				/>
			</View>
		</View>
	)
}

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filters',
		headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item title='Menu' iconName='ios-menu' onPress={() => {
				navData.navigation.toggleDrawer()
			}} />
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
		width: '80%'
	},
	label: {

	}
})

export default FiltersScreen