import React from 'react'
import { StyleSheet } from 'react-native'
import { Splash, GetStarted } from './pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
       <Router/>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({

})


