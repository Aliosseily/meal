import React from 'react';
import { version } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from "react-native";

const CategoryGridTile = props => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItems}>
            <TouchableCmp onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    {/* numberOfLines={2}  any text that would be longer than that actually just gets cut */}
                    <Text numberOfLines={2} style={styles.title} >{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )

}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 15, height: 150,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // alignItems:'flex-end', allign right
        // justifyContent:'flex-end',allign button
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 15, // we use elevation because sahdow only effect IOS not android, elevation force shadow to work on android
        padding: 5
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryGridTile;