import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'


const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.imageBackground}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: Colors.gray,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 18,
    elevation: 3,
    marginBottom: 20
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  }
})


export default MealItem