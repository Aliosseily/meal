import React, { useState } from 'react';
import { StyleSheet,  View , Text} from 'react-native';
/*expo-font is a package which gives you font utilities , 
so utilities taht allow you to load fonts , 
and you import everything from that package and bundle it together in this font object */
import *  as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {

  const [fontLoaded , setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading 
    startAsync = {fetchFonts} 
    onFinish={() =>{setFontLoaded(true)}}
    onError = {(err) => console.log(err)}
    />
  }

  return (
<MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'

  },
});
