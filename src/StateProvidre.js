
import React, { createContext, useContext, useReducer } from "react";

//THIS IS THE DATA LAYER// PREPARE THE DATA LAYER
export const StateContext = createContext();

//WRAP OUR APPP ND PROVIDE THE DATA
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children }
    </StateContext.Provider>
);

// this is how use it inside of component//PULL INFORMATION FORM DATA LAYER
export const useStateValue = () =>useContext(StateContext);