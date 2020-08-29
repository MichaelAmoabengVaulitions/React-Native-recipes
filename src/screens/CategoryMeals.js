import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../api/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: itemData.item.id }
          })
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.flatList}
      />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  flatList: {
    width: '100%'
  }
})

export default CategoryMeals