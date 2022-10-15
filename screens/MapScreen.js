import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'


const MapScreen = () => {
  const stack = createStackNavigator();
  return (
    <View>
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