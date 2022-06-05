import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import EditNote from '../TextEditor/EditNote';
import CreateNote from '../CreateNote/CreateNote';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <View>
            <NavigationContainer >
                <Stack.Navigator >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Editnote" component={EditNote} />
                    <Stack.Screen name="CreateNote" component={CreateNote} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})