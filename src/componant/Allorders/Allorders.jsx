import axios from 'axios'
import { useEffect, useState } from 'react'
import Lodar from '../../componants/lodar/lodar'



export default function Allorders() {
    const [deta, setdeta] = useState([])
    function order (){
        axios.get('https://ecommerce.routemisr.com/api/v1/orders/').then(data=>setdeta(data.data.data)).catch(error=>error)
       
    }
    useEffect(() => {
      order();
    }, [])
    console.log(deta)

    const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 2000); 

  return () => clearTimeout(timer);
}, []);
  return (
    <div>
    { isVisible?  <div>  <Lodar/>  </div>: 
        <div>
<div className="relative overflow-x-auto container1">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          
paymentMethodType
        </th>
        <th scope="col" className="px-6 py-3">
          
        count of order
        </th>
        <th scope="col" className="px-6 py-3">
        shippingPrice
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
      </tr>
    </thead>
    <tbody>
        {deta.map((item) => (
        
        
      <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item.paymentMethodType}
        </th>
        <td className="px-6 py-4">
         {item.cartItems.length}
        </td>
        <td className="px-6 py-4">
          {item.shippingPrice}
        </td>
        <td className="px-6 py-4">
          {item.totalOrderPrice}
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
