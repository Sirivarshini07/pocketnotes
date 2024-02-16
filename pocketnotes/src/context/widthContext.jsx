import { createContext, useContext } from "react";

// context is created to share vales across app
const widthContext = createContext("");

export default widthContext.Provider;

export function useWidth(){
    return useContext(widthContext);
}