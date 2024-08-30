import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

let headers = { token: localStorage.getItem('token') };
function CartContextProvider(props) {


    function addToCart(productId) {
        return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, { headers })
        .then((response) => response)
        .catch((error) => error);
    }
    function getcart (){
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers })
       .then((response) => response ).catch((error) => error);
    }
    function remove(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers })
       .then((response) => response).catch((error) => error);
    }
    function removeAll(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
       .then((response) => response).catch((error) => error);
    }
    function addCount (id , count){

        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {count:count}, { headers })
       .then((response) => response).catch((error) => error);
    }
    const [noumber, setNoumber] = useState(0)
async function noOf(){
    let {data} = await getcart()
    setNoumber(data.numOfCartItems)
}

function Online (cartId ,shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, {shippingAddress},{
            headers ,params:{url:"http://localhost:5173"}
        }).then((data)=>window.location.href=data.data.session.url
        ).catch((error)=>error)
    }


useEffect(() => {

  if (localStorage.getItem('token')) { noOf()} 

    
}, [])



return(
    <cartContext.Provider value={{ addToCart ,getcart ,remove ,removeAll ,addCount ,noumber , setNoumber ,Online}}>
        {props.children}
    </cartContext.Provider>
)

}

export default CartContextProvider;