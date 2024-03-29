import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , ImageBackground } from "react-native";
import DefaultText from './DefaultText'

const MealItem = props => {
    return (
        <View style={styles.MealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow , ...styles.mealHeader}}>
                        <ImageBackground source={{uri:props.image}} style={ styles.bgImage}>{/* internet image */}
                        <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow , ...styles.mealDetail}}>
                        <DefaultText>{props.duration} m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        alignItems:'center',
        paddingHorizontal:10,
        paddingTop:10
    },
    mealHeader:{
       height:'85%'
    },
mealDetail:{
       paddingHorizontal:10,
       justifyContent:'space-between',
       alignItems:'center',
       height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
    }
})

export default MealItem;