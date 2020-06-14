import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Splash, Register, Login } from '../pages'

const Stack = createStackNavigator()

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade
            }}
        >
            <Stack.Screen
                name='Splash'
                component={Splash} />

            <Stack.Screen
                name='GetStarted'
                component={GetStarted} />

            <Stack.Screen
                name='Register'
                component={Register} />

            <Stack.Screen
                name='Login'
                component={Login} />

        </Stack.Navigator>
    )
}

export default Router;