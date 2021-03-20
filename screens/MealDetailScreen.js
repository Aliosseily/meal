import React , {useEffect , useCallback} from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native";
//import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from '../components/DefaultText'
import {useSelector , useDispatch} from 'react-redux'
import {toggleFavorite} from '../store/actions/meals'
const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}


const MealDetailScreen = props => {
    const mealIngredients = props.navigation.getParam('mealIngredients')
    const mealId = props.navigation.getParam('mealId')

    console.log("mealId", mealId)

    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

    //const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
 
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => { //useCallback to avoid infinite loop and run toggleFavoriteHandler whenever dispatch and mealId are changed
        dispatch(toggleFavorite(mealId)) // toggleFavorite function defined in meal cactions
    },[dispatch, mealId]);

    useEffect(() => {
         props.navigation.setParams({toggleFav:toggleFavoriteHandler})
     },[toggleFavoriteHandler]); // run useEffect when toggleFavoriteHandleris changed
     useEffect(() => {
        props.navigation.setParams({isFav:currentMealIsFavorite})
    },[currentMealIsFavorite]); // run useEffect when currentMealIsFavorite changed

    //we use set Params because we need to use it outside this functional component down im meal title
    // useEffect(() => {
    //     props.navigation.setParams({mealTitle:selectedMeal.title})
    // },[selectedMeal]) // run useEffect when selectedMeal is changed


    console.log("selectedMeal", selectedMeal.ingredients)
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    //const mealId = navigationData.navigation.getParam('mealId');
    //console.log("mealId5555555",mealId)
    //const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const mealTitle = navigationData.navigation.getParam('mealTitle') // param sent from MealList component
    const toggleFavorite = navigationData.navigation.getParam('toggleFav') // param from same component aboe (setParam)
    const isFavorite = navigationData.navigation.getParam('isFav') // param sent from MealList component
    return {
        //headerTitle: selectedMeal.title,
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorite'
                iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite}
                color='red'
            />

        </HeaderButtons>

    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    }
})

export default MealDetailScreen;