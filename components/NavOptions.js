import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import { useSelector } from 'react-redux'
import { selectOrigin } from '../store/slices/navSlice'


const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://th.bing.com/th/id/OIP.2Mp7Bw5c9FwlIwnovARTJwHaEL?pid=ImgDet&rs=1",
        screen: "MapScreen"
    },
    {
        id:"134",
        title:"order food",
        image:"https://th.bing.com/th/id/R.22c6758fb236be8a41ee33cde240bece?rik=OPTCfxX9L448GQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffood-png--1400.png&ehk=GUNjgIW6a07L0xR7kwyVsyBOvUDzkvWStuKe4kQHE6E%3d&risl=&pid=ImgRaw&r=0",
        screen: "EatsScreen"
    }
]

const NavOptions = ({navigation}) => {
  const origin = useSelector(selectOrigin)
  return (
    <View style={tw`h-70`}>
        <FlatList
            data={data}
            horizontal
            keyExtractor={item => item.id}
            renderItem = {({item}) =>(
                <TouchableOpacity style={tw`bg-white p-2 pl-6 pb-8 pt-4 m-2 h-60`}
                    onPress={() => navigation.navigate(item.screen)}
                    disabled={origin.location.lat == 0 ? true : false}
                >
                    <View>
                        <Image
                            source={{uri: item.image}}
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: "contain"
                            }}
                        />
                        <Text style={tw`font-bold text-lg`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({})