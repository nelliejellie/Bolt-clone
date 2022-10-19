import { View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../store/slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}> 
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <Text style={tw`text-center py-5 text-xl`}>
                Good morning, Nelson
            </Text>
        </TouchableWithoutFeedback>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='where to'
                    debounce={400}
                    key={GOOGLE_MAPS_APIKEY}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    onPress={(data, details= null)=>{
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        navigation.navigate("RideOptionsCard")
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    styles={{
                        container:{
                            flex:0,
                            marginLeft:10,
                            marginRight:10,
                            backgroundColor:'white'
                        },
                        textInput:{
                            fontSize: 18,
                            backgroundColor:'#DDDDDF'
                        },
                    }}
                />
            </View>
            <NavFavorites/>
        </View>
        <View style={tw`flex-1 flex-row justify-center pt-8`}>
            <TouchableOpacity style={tw`flex flex-row justify-around items-center bg-green-300 w-48 px-4 p-3 rounded-full`}
                onPress={()=> navigation.navigate("RideOptionsCard")}
            >
                <Icon name="car" type="font-awesome" color="black" sixe={16}/>
                <Text style={tw`text-black font-bold text-center`}>Select Ride Options</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard