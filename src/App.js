import React, { useState } from 'react'
import { StyleSheet, YellowBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Loading } from './component';
import { Provider, useSelector } from 'react-redux'
import store from './redux/store';

const MainApp = () => {
  const stateGlobal = useSelector(state => state)
  YellowBox.ignoreWarnings(['Setting a timer'])
  console.disableYellowBox = true;
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  )
}


const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )

}

export default App

const styles = StyleSheet.create({

})


