import React from 'react';
import { StyleSheet, View } from "react-native";
import DefaultText from '../components/DefaultText'
import MealList from '../components/MealList'
//import {MEALS} from '../data/dummy-data'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { useSelector } from 'react-redux'


//const FavMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
//const FavMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2')

const FavoritesScreen = props => {
    const FavMeals = useSelector(state => state.meals.favoriteMeals);

    if(FavMeals.length === 0 | !FavMeals){
        return(
            <View style={styles.content}> 
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return (
        <MealList
            listData={FavMeals}
            navigation={props.navigation}
        />
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorite'
                iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer();

                }}
            />

        </HeaderButtons>
        )
    };
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
});



export default FavoritesScreen;