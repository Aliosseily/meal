import React from 'react';
import { StyleSheet , FlatList   } from "react-native";
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import  HeaderButton  from "../components/HeaderButton";


const CategoriesScreen = props => {

    const renderGridItems = (itemData) => {
        return <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color} 
        onSelect={() =>{
            props.navigation.navigate({routeName:'CategoryMeals',
            params:{
                categoryId : itemData.item.id,
                categoryTitle:itemData.item.title,
            }
        })
        }}/>
        }



    return(
          <FlatList
          keyExtractor={(item,index) => item.id}
          data={CATEGORIES}
          renderItem={renderGridItems}
          numColumns={2}
          />
    )
}
// move to MealsNavigator.js to avoid repeating code 
// CategoriesScreen.navigationOptions = {
//     headerTitle : 'Meal Categories',
//     
//     // headerStyle:{
//     //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
//     // },
//     // headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
// }

CategoriesScreen.navigationOptions = navData => {
return{
    headerTitle : 'Meal Categories',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item 
    title='Menu'
    iconName='ios-menu'
    onPress={() => {
        navData.navigation.toggleDrawer();
    }}

    />

    </HeaderButtons>
    )
};
};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItems:{
        flex:1,
        margin:15,height:150,
    }
})

export default CategoriesScreen;