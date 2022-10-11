import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`h-full p-5`}>
      <View>
        <Text>MapScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen