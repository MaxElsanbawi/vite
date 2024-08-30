

import { useContext, useEffect, useState } from "react"

import axios from 'axios'
import Lodar from "../lodar/lodar"
import { Link } from "react-router-dom"
import { cartContext } from "../../Context/cartContext/cartContext"
import toast from "react-hot-toast"
import { Wishcontext } from "../../Context/wishContext/wishContext"

export default function ProdactHome() {
  const [prodacte, setProdacte] = useState([])
  const {setNoumber} = useContext (cartContext)
  function predact() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

      .then((data) => setProdacte(data.data.data))
      .catch((err) => console.log(err))


  }

  console.log(prodacte)
  useEffect(() => {

    predact();

  }, [])
 
  
  const {addToWish}=  useContext(Wishcontext)
  async function Addwish(id){
  let {data}= await addToWish(id)
  
  toast.success(data.message ,{
    position:"top-right" ,
 style: {background:"#008000"},
  icon:'❤'
  });
  }

  const { addToCart} =useContext (cartContext)

  async function addtoCartBtn(i){
    let{data}= await  addToCart(i)
    toast.success(data.message ,{
     position:"top-right" ,
     style: {background:"#008000"},
   });
   setNoumber(data.numOfCartItems)
   
     }
  return (

    <div className="container1">
    <div className="row1 ">
      {prodacte.length > 0 ? (
        prodacte.map((product) => (
          <div className=" lg:w-1/4 md:w-1/2 p-5 prodact relative" key={product._id}>
            <div className="hover:border-green-500 hover:border-2 rounded hover:shadow-xl hover:shadow-green-300">
              <Link to={`/prodactDitals/${product._id}`}>
                <div className="m-3 pb-10">
                  <div className="images">
                    <img src={product.imageCover} alt={product.title} />
                  </div>
                  <div>
                    <h3>{product.category.name}</h3>
                    <h5>{product.title.split(' ').slice(0, 2).join(' ')}</h5>
                  </div>
                  <div className="row1 justify-between">
                    <div>
                    <strong>${product.price}</strong>
                    </div>
                    <div>
                    <p className=" relative"> 
                      {product.ratingsAverage}
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </p>
                    </div>
                  </div>
                </div>
              </Link>
              <button  onClick={()=>Addwish(product.id)}  className=" absolute right-20  bottom-16 text-2xl">   <i className="fa-solid fa-heart" /></button>
              <button onClick={() => addtoCartBtn(product.id)} className="bg-green-500 lg:px-28 lg:py-1   md:px-40 md:ms-2 ms:px-52 sm:ms-5          py-1 btn lg:ms-4 rounded absolute text-white bottom-2"> + Add</button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <Lodar/>
          <p>Loading...</p>
        </div>
      )}
    </div>
  </div>
);
}
