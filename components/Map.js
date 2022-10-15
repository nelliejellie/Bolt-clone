import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../store/slices/navSlice';


const Map = () => {
  const origin = useSelector(selectOrigin)
  console.log(origin.location)
  return (
    <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    />
  )
}

export default Map

const styles = StyleSheet.create({})