import React from 'react';
import { View , Text , Button , StyleSheet } from "react-native";
import {CATEGORIES} from '../data/dummy-data'


const CategoryMealScreen = props => {
    const catTitle = props.navigation.getParam('categoryTitle')
    //const selectedCategory = CATEGORIES.find(cat => cat.id ===  catId)
    return(
        <View style={styles.screen}>
            <Text>{catTitle}</Text>
            <Text>The Category Meal Screen</Text>
            <Button title="Go To Meal Details" onPress={() =>{
                props.navigation.navigate({routeName : 'MealDetail'})
            }}/>
        </View>
    )
}
CategoryMealScreen.navigationOptions = navigatgionData => {
    const catTitle = navigatgionData.navigation.getParam('categoryTitle')
return{
    headerTitle : catTitle,
    // move to MealsNavigator.js to avoid repeating code 
    // headerStyle:{
    //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
    // },
    // headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
}
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoryMealScreen;