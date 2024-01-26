import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Signup from '../screens/Signup';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();
const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route

const styles = StyleSheet.create({})