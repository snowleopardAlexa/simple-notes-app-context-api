import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    animalTransfers: [
        { id: 1, text: 'Macaw', animalNumber: -20 },
        { id: 2, text: 'Salary', animalNumber: 300 },
        { id: 3, text: 'Book', animalNumber: -10 },
        { id: 4, text: 'Camera', animalNumber: 150 },
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ( { children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

// actions
function deleteAnimalTransfer(id) {
    dispatch({
        type: 'DELETE_ANIMALTRANSFER',
        payload: id
    });
}   

   return(<GlobalContext.Provider value={{
       animalTransfers: state.animalTransfers,
       deleteAnimalTransfer
   }}>
       {children}
   </GlobalContext.Provider>);
}