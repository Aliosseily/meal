import React , {useState , useEffect , useCallback} from 'react';
import { View, Text, StyleSheet ,Switch} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from '../constants/Colors'
import { useDispatch} from 'react-redux'
import {setFilters} from '../store/actions/meals'
const FilterSwitch = props => {
    return (

        <View style={styles.filterContainer}>
             <Text>{props.label}</Text>
             <Switch
            // trackColor={{true:Colors.primaryColor}}
             //thumbColor={Colors.primaryColor}
             value={props.state}
             onValueChange={props.onChange}/>
        </View>
    )
}

const FiltersScreen = props => {
    const [isGluteenFree , setIsGluteenFree] = useState(false)
    const [isLactoseFree , setIsLactoseFree] = useState(false)
    const [isVegan , setIsVegan] = useState(false)
    const [isVegetarian , setIsVegetarian] = useState(false)
    
const dispatch = useDispatch()

    const saveFilters = useCallback(()=>{
        const appliedFlters = {
            gluteenFree : isGluteenFree,
            lactoseFree : isLactoseFree,
            vegan:isVegan,
            isVegetarian:isVegetarian
        };
       dispatch(setFilters(appliedFlters));
    },[isGluteenFree,isLactoseFree,isVegan,isVegetarian,dispatch]); 
    // this means that this function will be run only if one of these states changed if else changed this function will not be run

useEffect(() =>{
    props.navigation.setParams({save: saveFilters }) // way of commumnicating brtween ur compnent and ur navigation options
},[saveFilters]);
//these are dependencies which means that when this changes 'saveFilters' ,this will rebuild
// but if any thing else in props changes , this will unnecessary rerun the effect

    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>

       <FilterSwitch
       label = "Gluteen-Free"
       state = {isGluteenFree}
       onChange = {newValue => setIsGluteenFree(newValue)}
       />
              <FilterSwitch
       label = "Lactose-Free"
       state = {isLactoseFree}
       onChange = {newValue => setIsLactoseFree(newValue)}
       />
              <FilterSwitch
       label = "Vegan"
       state = {isVegan}
       onChange = {newValue => setIsVegan(newValue)}
       />

       <FilterSwitch
       label = "Vegetarian"
       state = {isVegetarian}
       onChange = {newValue => setIsVegetarian(newValue)}
       />
       </View>
    )
}
FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        // headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerLeft: () =><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}

            />

        </HeaderButtons>
        ,
        headerRight: ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Save'
                iconName='ios-save'
                onPress={
                   navData.navigation.getParam("save")// defined above in useEffect setParams
                }

            />

        </HeaderButtons>
        
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:10
    }
    ,title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        margin:20,
        textAlign:'center'
    }
})

export default FiltersScreen;