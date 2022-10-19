import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../store/slices/navSlice'


const data = [
  {
    id:"Uber-X-123",
    title:"UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id:"Uber-X-456",
    title:"Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id:"Uber-X-789",
    title:"Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={()=>navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center font-bold text-lg pt-5`}>Select a Ride - {travelTimeInformation.distance.text}</Text>
      </View>
      <FlatList
      style={tw``}
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between px-5 ${item.id === selected?.id && `bg-gray-200`}`}
            onPress={()=> setSelected(item)}
          >
            <Image
              style={{
                width:100,
                height:100,
                resizeMode: "contain"
              }}
              source={{uri:item.image}}
            />
            <View>
              <Text style={tw`font-bold text-lg`}>{item.title}</Text>
              <Text>{travelTimeInformation.duration.text} Travel time...</Text>
            </View>
            <Text style={tw`text-lg`}>&#8358; {parseInt(0.5 * item.multiplier * travelTimeInformation.duration.value)}</Text>
          </TouchableOpacity>
        )}
      />
      <View disabled={!selected} style={tw`bg-green-300 m-3 rounded-lg p-5 ${!selected && `bg-gray-200`}`}>
        <Text style={tw`text-center text-lg`}>
          Choose {selected?.title}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})