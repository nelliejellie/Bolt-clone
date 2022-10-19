import { View, Text, SafeAreaView, TouchableOpacity  } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'


const MapScreen = () => {
  const stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity
          style={tw`bg-gray-100 absolute top-16 z-50 left-8 p-3 rounded-full`}
          onPress={()=> navigation.navigate("HomeScreen")}
        >
          <Icon
            name='menu'
          />
        </TouchableOpacity>
      <View style={tw`h-1/3`}>
       <Map /> 
      </View>

      <View style={tw`h-2/3`}>
        <stack.Navigator>
          <stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen