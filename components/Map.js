import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../store/slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env"


const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
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
    >
      {
        origin.location.lat !== 0 && destination.location.lat !== 0 &&
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="green"
        />
      }
      {
        origin.location.lat !== 0 &&

        <Marker 
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Starting Point"
          description={origin.description}
          identifier="Starting point"
        />
      
      }
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})