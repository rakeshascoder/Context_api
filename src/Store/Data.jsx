import { createContext } from "react";

export const storeData=createContext()

const ContextUse=({children})=>{
    return <storeData.Provider value={"rakesh"}>
        {children}
    </storeData.Provider>
}
export default ContextUse
