import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { Platform , Text } from "react-native";
import Colors from '../constants/Colors'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    // Categories: 
    // {
    //     screen: CategoriesScreen,
    //     navigationOptions: {
    //         headerTitle: 'Meal Categories',
    //         // move to defaultNavigationOptions down
    //         //     headerStyle:{
    //         //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
    //         //     },
    //         //     headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
    //     }
    // },
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen,
        // move to defaultNavigationOptions down
        // navigationOptions:{
        //     headerStyle:{
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
        //     },
        //     headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
        // }
    },
    MealDetail: MealDetailScreen,

}, {
    //this option will apply to ever screen in this navigator
    defaultNavigationOptions: defaultStackNavOptions

    
});

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        //this option will apply to ever screen in this navigator
        defaultNavigationOptions: defaultStackNavOptions
    })

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-restaurant' style={20} color={tabInfo.tintColor} />
                )
            },
            tabBarColor: Colors.primaryColor, // only done if shifting is equal to true
            //if you want t style lable name
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals'
        }
    }, // we can added stack navigator or
    Favorites: {
        screen: FavNavigator, navigationOptions: {
          //  tabBarLabel: 'Favorites!',//useed to change lable name
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' style={20} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor,
            //if you want t style lable name
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Favorties</Text> : 'Favorties'
        }
    },  // we can add default screen
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,

        // if shifting:false, then to cahnge background color of tabs else change it tabScreenConfig above
        // barStyle:{
        //     backgroundColor:Colors.primaryColor
        // }
    })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: Colors.secondaryColor
            }
        })

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    //this option will apply to ever screen in this navigator
    // navigationOptions:{
    //     drawerLabel:"Filters !!!"
    // },
    defaultNavigationOptions: defaultStackNavOptions
})


const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
},
{
    contentOptions:{
        activeTintColor:Colors.secondaryColor,
        labelStyle:{
            fontFamily:'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator /*MealsFavTabNavigator *//*MealsNavigator*/);
