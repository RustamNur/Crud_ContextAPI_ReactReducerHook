import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { dataBase as users } from "../mock";


export const DataContext = createContext()

export const Context = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, {
        data: users,
        name: "",
        lastName: "",
        search: "",
        select: null,
    });
    
    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    );

};