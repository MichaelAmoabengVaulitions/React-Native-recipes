import React from 'react'

import { CATEGORIES, MEALS } from '../api/dummy-data'
import MealList from '../components/MealList'

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

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


export default CategoryMeals