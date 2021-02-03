 import { createStackNavigator } from 'react-navigation-stack';
 import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Colors from '../constants/Colors'


// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

 const MealsNavigator = createStackNavigator({
        Categories:{
            screen:CategoriesScreen,
            navigationOptions:{
                headerTitle : 'Meal Categories',
                // move to defaultNavigationOptions down
            //     headerStyle:{
            //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
            //     },
            //     headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
             }
        },

    CategoryMeals:{
        screen:CategoryMealScreen,
        // move to defaultNavigationOptions down
        // navigationOptions:{
        //     headerStyle:{
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
        //     },
        //     headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
        // }
    },
    MealDetail : MealDetailScreen,
    
},{
    //this option will apply to ever screen in this navigator
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' 
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);
