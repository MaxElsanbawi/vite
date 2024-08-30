import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Lodar from '../lodar/lodar'
export default function Categories() {
  const [slid, setSlid] = useState([])
  function set(){

  
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  
    .then((data) => setSlid(data.data.data))
    .catch((err) => console.log(err))
  
  
  }
  console.log(slid)
   
  useEffect(() => {
    set()
  
  
  }, []);
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

    <div className=' container1'>
      <div className="row1">
      { slid.map((category)=> 
            <div className=" lg:w-1/4 md:w-1/2 w-full p-5 prodact relative" key={category._id}>
            <div className="hover:border-green-500 hover:border-2 rounded hover:shadow-xl hover:shadow-green-300">
  <div  >
    <img src={category.image} alt="" className='h-1002'  />
    <h3  className='p-10 rounded' >{category.name}</h3>
  </div>
  </div>
  </div>
  )}
  </div>
    </div>
 }
  </div>
  )
}
