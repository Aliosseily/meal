import React from 'react';
import { View,FlatList, Text,  StyleSheet } from "react-native";
import MealItem from '../components/MealItem'
import {useSelector} from 'react-redux'
import MealDetailScreen from '../screens/MealDetailScreen';
const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealtems = (itemData) => {
        //some will return true if any item in favoriteMeals matches this condition
        const isFavortie = favoriteMeals.some(meal => meal.id ===itemData.item.id )
        console.log('isFavortie',isFavortie);
        return <MealItem 
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal = {() => {
            props.navigation.navigate({routeName : 'MealDetail',
            params:{
                mealId : itemData.item.id,
                mealIngredients:itemData.item.ingredients,
                mealTitle:itemData.item.title,
                isFav:isFavortie
            }
        })
        }}
        />
        }


return(
    <View style={styles.list}>
    <FlatList
    keyExtractor={(item,index) => item.id}
    data={props.listData}
    renderItem={renderMealtems}
    style={{width:'100%'}}
    />
  </View>
)
}

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealList;