
import { useContext, useEffect, useState } from "react";
import { Wishcontext } from "../../Context/wishContext/wishContext";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Context/cartContext/cartContext";
import Lodar from "../../componants/lodar/lodar";



export default function Wishlist() {
const [data, setData] = useState([])
let nave=    useNavigate()
    let {getwish} =useContext(Wishcontext)
    let {remove} =useContext(Wishcontext)
    async function remo(id){
        await  remove(id);
        nave("/Wishlist.")
}

    async function get(){
    let {data} = await  getwish();
    setData(data.data);
    }
    console.log(data)
    useEffect(() => {
        get()
    }, [])

    const { addToCart} =useContext (cartContext)

    async function addtoCartBtn(id){
await  addToCart(id)
await  remove(id);
nave("/Wishlist.")
}
 
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 5000); 

  return () => clearTimeout(timer);
}, []);

    return (
<div>
    { isVisible?   <Lodar/>  :  

        <div className="container1 bg-slate-200 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className=" text-4xl pb text-black">
                    <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                My wish List
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
            </tr>
                    </thead>
                    <tbody>
                        {data?.map((dets)=>(

<tr key={dets?.id}  className=" bg-slate-200 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
<td  className="p-4">
    <img src={dets.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
</td>
<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">

</td>
<td className="px-6 py-4">
    <div className="flex items-center">
        
    </div>
</td>
<td className="px-6 py-4">
    <button onClick={()=>{remo(dets.id)}} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
</td>
<td className="px-6 py-4 font-semibold  text-green-500 dark:text-white">
    {dets.price} EGY
</td>
<td className="px-6 py-4 font-semibold  text-green-500 dark:text-white">
<button type="button" onClick={() => addtoCartBtn(dets.id)}    className="text-green-700 border border-2 border-green-500   border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">add to cart</button>

</td>
</tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
 }
  </div>

    )
}
