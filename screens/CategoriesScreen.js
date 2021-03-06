import React from 'react';
import { View , Text  , StyleSheet , FlatList , TouchableOpacity , } from "react-native";
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'



const CategoriesScreen = props => {

    const renderGridItems = (itemData) => {
        return <TouchableOpacity  
        onPress={() => {
            props.navigation.navigate({routeName:'CategoryMeals',
            params:{
                categoryId : itemData.item.id,
                categoryTitle:itemData.item.title,
            }
        })
        }}
        style={styles.gridItems}>
               <View>
               <Text>{itemData.item.title}</Text>
               </View>
               </TouchableOpacity>
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