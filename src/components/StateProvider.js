// setUp data layer
//to track the basket

import React, {createContext, useContext, useReducer} from "react";
 
// we need this to track the basket  

//  THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider =({reducer, initialState, children}) =>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);
// this IS HOW WE USE IT
export const useStateValue=() =>useContext(StateContext);