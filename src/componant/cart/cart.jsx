import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/cartContext/cartContext'
import Lodar from '../../componants/lodar/lodar'
import { Link,  useNavigate } from 'react-router-dom'

export default function Cart() {
const{getcart}=  useContext (cartContext)
const [data, setData] = useState({})
const [allData, setAllData] = useState([])
const [nombCart, setNombCart] = useState([])
const {remove} = useContext (cartContext)
const {removeAll} = useContext (cartContext)
const {addCount} = useContext (cartContext)
const {setNoumber} = useContext (cartContext)
let navigate =   useNavigate()
 async function getTcart(){
let {data}=  await getcart()
setData(data.data);
setAllData(data.data.products)
setNombCart(data.numOfCartItems)
console.log(data. cartId);
}

console.log(data)
console.log(allData)
  useEffect(() => {
    getTcart()
  }, [])

async function remo (id) {
let {data}=  await remove(id);
setNoumber(data.numOfCartItems)
  setData(data.data);
  setAllData(data.data.products)
  setNombCart(data.numOfCartItems)
  
  
}


async function remoA () {
 await removeAll();
 navigate("/cart.")

 
  
}
async function add (id,count) {
 await addCount(id ,count);
 navigate("/cart.")


 
  
}
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setIsVisible(false);
    },3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=''>
{isVisible ? <div>  <Lodar/>  </div>
:
<div>


    <div className='container1 '>

<div className="mt-24 mb-20 pb-11 overflow-x-auto shadow-md sm:rounded-lg">

<div className="row1 justify-between">
<div className='ps-4 pt-5'>
<div>  <h3 className=' flex flex-wrap   text-black text-4xl  '>
Cart Shop
                </h3> </div>
<div >
  <span className='text-2xl '>total price:  </span> <strong className='text-green-400'>{data.totalCartPrice}</strong>
</div>
</div>

<div className='pe-4 mt-10' >
<div className="flex flex-col">
<div className="mb-6">
<span className='text-2xl '>total number of items: </span>     <strong className='text-green-400'>{nombCart}</strong>
</div>
</div>
<div className="mb-3">
<Link  to="/ChikOut"     className="text-blue-700  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Default</Link>
</div>
</div>
    </div>

<div className="relative ">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

    <tbody>
    {allData.map((det) => (
                <tr 
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                  key={det.product.id} 
                >
                  <td className="p-4">
                    <img 
                      src={det.product.imageCover} 
                      className="w-16 md:w-32 max-w-full max-h-full" 
                      alt={det.product.category.name} 
                    />
                  </td>
                  < >
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {det.product.category.name} 
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {det.price} EGY
                  </td>
                  <td className="px-6 py-4">
                    < button onClick={()=>{
                      remo(det.product.id) 
                    }}  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                  </td>
                  </ >
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button onClick={()=>add(det.product.id,det.count -1)} 
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <div>
                          {det.count}
                        </div>
                      </div>
                      <button onClick={()=>add(det.product.id,det.count + 1)} 
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  
                  
                </tr>

    ) )   }


         

      
    </tbody>
  </table>
</div><div className="row1 justify-center items-center">
  
<button type="button" onClick={()=>{remoA()}}  disabled={allData.length===0 &&"disabled" }  className="text-blue-700  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">DeletAll</button>

  </div></div>


    </div>
</div>

}
    </div>
  )
}
