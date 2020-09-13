import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { CATEGORIES } from '../api/dummy-data'
import MealList from '../components/MealList'
import Colors from '../constants/Colors'
import DefaultText from '../components/DefaultText'

const CategoryMeals = (props) => {

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const categoryId = props.navigation.getParam('categoryId')

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.contentText}>No meals found, adjust the filter to see the meals</DefaultText>
      </View>
    )
  }

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
    />
  )
}

CategoryMeals.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
  return {
    headerTitle: selectedCategory.title
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
    color: Colors.danger,
    textAlign: 'center'
  }
})
export default CategoryMeals