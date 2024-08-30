import axios from "axios";
import { createContext } from "react";

export  const  Wishcontext=createContext()

function WishContextProvider(props){
    
let headers = { token: localStorage.getItem('token') };
    function addToWish(productId) {
        return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId }, { headers })
        .then((response) => response)
        .catch((error) => error);
    }
    async  function getwish (){
        return await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', { headers })
       .then((data) =>  data)  .catch((error) => error);
       
    }
    function remove(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, { headers })
       .then((response) => response).catch((error) => error);
    }
    return(
        <Wishcontext.Provider value={{addToWish , getwish ,remove }}>{props.children}</Wishcontext.Provider>
    )
}

export default WishContextProvider;