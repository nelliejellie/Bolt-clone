import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: {
        description: "",
        location:{
            lat: 0,
            lng:0
        }
    },
    destination: {
        description: "",
        location:{
            lat: 0,
            lng:0
        }
    },
    travelTimeInformation: {
        description:""
    }
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers :{
        setOrigin: (state, action) =>{
            state.origin = action.payload
        },
        setDestination: (state, action) =>{
            state.destination = action.payload
            console.log('destination', state.destination)
        },
        setTravelTimeInformation: (state, action) =>{
            state.travelTimeInformation = action.payload
        }
    }
})

export const {setOrigin,setDestination,setTravelTimeInformation} = navSlice.actions;

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;