import React from 'react';
import {StyleSheet,View } from "react-native";
import {useSelector} from 'react-redux'
// import {CATEGORIES , MEALS} from '../data/dummy-data'
//import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText'


const CategoryMealScreen = props => {
   //const selectedCategory = CATEGORIES.find(cat => cat.id ===  catId)
    const catId = props.navigation.getParam('categoryId')
    const catTitle = props.navigation.getParam('categoryTitle')

    const availableMeals = useSelector(state => state.meals.filteredMeals) 
    // state.meals is the name defined in App.js rootReducer
    //.filteredMeals defined in meals.js

// filter Meals object categoryIds array filed by CATEGORIES object id
//const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)
const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

if(displayedMeals.length === 0){
    return <View style={styles.content}>
        <DefaultText>No meals found, maybe check our filters?</DefaultText>
    </View>
}

    return(
           <MealList 
           listData = {displayedMeals}
           navigation = {props.navigation}
           />
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
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoryMealScreen;