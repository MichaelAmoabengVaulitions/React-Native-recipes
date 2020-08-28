import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Platform } from 'react-native'

import { CATEGORIES } from '../api/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return <CategoryGridTile
      title={itemData.item.title} onSelect={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id
          }
        })
      }}
      color={itemData.item.color}
    />
  }
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  )
}

Categories.navigationOptions = {
  headerTitle: 'Meal Categories',
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default Categories