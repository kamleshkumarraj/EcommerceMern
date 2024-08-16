/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const homeContext = createContext();

function HomeContext({children}){
    const [scroll , setScroll] = useState(false);

    return (
        <homeContext.Provider value={{scroll , setScroll}}>
            {children}
        </homeContext.Provider>
    )
}
export default HomeContext
