import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Splash } from '../pages'

const Stack = createStackNavigator()

// const forFade = ({ current }) => ({
//     cardStyle: {
//         opacity: current.progress,
//     }, })

const Router = () => {
return(
    <Stack.Navigator
    initialRouteName='GetStarted'
    screenOptions={{ 
        headerShown: false,
        // cardStyleInterpolator: forFade
     }}
    >
        <Stack.Screen
        name='Splash'
        component = {Splash} />
        <Stack.Screen
        name='GetStarted'
        component = {GetStarted} />
    </Stack.Navigator>
)
}

export default Router;