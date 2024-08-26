import { createContext, useEffect, useState } from "react";

export let acountContext =createContext()

function AcountContextProvider(props){
const [token, setToken] = useState(null)


useEffect(()=> {
    if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
    }
})
    return( <acountContext.Provider value={{ token,setToken }}>
        {props.children}  
    </acountContext.Provider>)
}

export default AcountContextProvider;