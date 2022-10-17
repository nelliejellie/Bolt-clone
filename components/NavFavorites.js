import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../store/slices/navSlice'
import { useRef } from 'react'
import axios from 'axios'
import {GOOGLE_MAPS_APIKEY} from "@env"


const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "No 36 alabi oyo street"
    },
    {
        id: "124",
        icon: "briefcase",
        location: "Work",
        destination: "illupeju lagos"
    }

]

const NavFavorites = () => {
  const [routeValue, setRouteValue] = useState("")
  const dispatch = useDispatch();
  const locationRef = useRef(null)
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination)


  const setRoute = (item) =>{
    let currentSelection = item.destination
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${currentSelection}&key=${GOOGLE_MAPS_APIKEY}`)
        .then(res => {
            if(origin.location.lat == 0){
                dispatch(setOrigin({
                    location: res.data.results[0].geometry.location,
                    description: item.location
                }))
            }
            if(destination.location.lat == 0 && origin.location.lat !== 0){
                dispatch(setDestination({
                    location: res.data.results[0].geometry.location,
                    description: item.location
                }))
            }
        })
        .catch(err => console.log(err))
    
  }
  return (
    <View style={tw`h-40`}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
            <View style={tw`bg-gray-200 h-1`}/>
        )}
        renderItem={({item}) =>(
            <TouchableOpacity
             style={tw`flex-row items-center p-5`}
             onPress={()=>setRoute(item)}
             >
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={item.icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text ref={locationRef} style={tw`font-semibold text-base`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}
      />  
    </View>
  )
}

export default NavFavorites

const styles = StyleSheet.create({})