import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch, useSelector } from 'react-redux'
import {selectDestination, setDestination, setOrigin} from "../store/slices/navSlice"

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
//   const seletor = useSelector(selectDestination)
  return (
    <SafeAreaView style={tw`h-full p-5`}>
        <View style={tw``}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain"
                }}
                source={{
                    uri: "https://p.kindpng.com/picc/s/21-211664_bolt-taxify-logo-png-transparent-png.png"
                }}
            />
        </View>
        <GooglePlacesAutocomplete 
            placeholder='where from'
            styles={{
                container:{
                    flex:0,
                    marginLeft:10,
                    marginRight:10
                },
                textInput:{
                    fontSize: 18
                }
            }}
            onPress={(data, details = null) => {
                console.log(details.geometry.location)
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description
                }));
                dispatch(setDestination(null))
            }}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en"
            }}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            fetchDetails={true}
            returnKeyType={"search"}
        />
        <NavOptions navigation={navigation}/>  
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})