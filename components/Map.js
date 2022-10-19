import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../store/slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env"
import axios from 'axios';


const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(origin.location == 0 || destination.location == 0){
      return
    }else{
      mapRef.current.fitToSuppliedMarkers(["origin","destination"])
    }
  },[origin,destination])

  useEffect(()=>{
    if(origin.location.lat == 0) return;

    const getTravelTime = () =>{
      axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}
      &key=${GOOGLE_MAPS_APIKEY}`)
      .then(res => dispatch(setTravelTimeInformation(res.data.rows[0].elements[0])))
      .catch(err => console.log(err))
    }

    getTravelTime()
  }, [origin,destination,GOOGLE_MAPS_APIKEY])

  return (
    <MapView
        ref={mapRef}
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
          title="origin"
          description={origin.description}
          identifier="origin"
        />
      
      }
      {
        destination.location.lat !== 0 &&

        <Marker 
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="destination"
          description={destination.description}
          identifier="destination"
        />
      
      }
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})