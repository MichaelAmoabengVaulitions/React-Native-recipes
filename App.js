
import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MainNavigator from './src/navigation'
import { enableScreens } from 'react-native-screens'
import MealsReducer from './src/store/reducers/meals'


enableScreens()

const rootReducer = combineReducers({
  meals: MealsReducer
})

const store = createStore(rootReducer)

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}


