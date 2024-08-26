

import { useEffect, useState } from "react"
import styles from "./prodactHome.module.css"
import axios from 'axios'
import Lodar from "../lodar/lodar"
import { Link, NavLink } from "react-router-dom"

export default function ProdactHome() {
  const [prodacte, setProdacte] = useState([])
  function predact() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

      .then((data) => setProdacte(data.data.data))
      .catch((err) => console.log(err))


  }

  console.log(prodacte)
  useEffect(() => {

    predact();

  }, [])


  return (

      <div  className="container1">
    <div className="row1">
    {
      prodacte.length>0?
      
      prodacte.map((prodact) => (
      
        <Link     to={`prodactDitals/${prodact._id}`}   className="lg:w-1/4 md:w-1/2  p-5" key={prodact._id} >
          <div className="hover:border-green-500 hover:border-2  rounded hover:shadow-xl hover:shadow-green-300  ">
          <div className="  m-3 ">
            <div className="imges ">
              <img src={prodact.imageCover}  alt="" />
            </div>
            <div>
              <h3>
                {prodact.category.name}
              </h3>
              <h5>
                {prodact.title.split(' ').slice(0,2).join(' ')}
              </h5>
            </div>
            <div className="row1 justify-between">
            <strong>
              ${prodact.price}
            </strong>
            <p>
              {prodact.ratingsAverage}<i className="fa-solid fa-star text-yellow-500" ></i>
            </p>
            </div>
          </div>
          </div>
        </Link>
      ))
    :  <div>
      <Lodar/>
      <p>Loading...</p>
    </div>
    };
    </div>
  </div>    
  );
}
