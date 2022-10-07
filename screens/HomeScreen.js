import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
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
        <NavOptions/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})