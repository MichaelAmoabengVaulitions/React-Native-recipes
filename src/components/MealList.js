import React from 'react'
import { useSelector } from 'react-redux'

import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from '../components/MealItem'



const MealList = props => {
  // Check if the current meal is a favorite
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)


  const renderListItem = (itemData) => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
    console.log("renderListItem -> isFavorite", isFavorite)
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              mealIsFavorite: isFavorite
            }
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
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderListItem}
        style={styles.flatList}
      />
    </View>
  )
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

export default MealList