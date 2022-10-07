import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null 
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer:{
        setOrigin: (state, action) =>{
            state.origin = action.payload
        },
        setDestination: (state, action) =>{
            state.origin = action.payload
        },
        setTravelTimeInformation: (state, action) =>{
            state.origin = action.payload
        }
    }
})

export const {setOrigin,setDestination,setTravelTimeInformation} = navSlice.actions;

//selectors
export const selectOrigin = () => state.new.origin;
export const selectDestination = () => state.new.destination;
export const selectTravelTimeInformation = () => state.new.travelTimeInformation;

export default navSlice.reducer;