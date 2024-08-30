import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export default function Lodarwish() {
    const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 10); 

  return () => clearTimeout(timer);
}, []);


    return (
      <>
           { isVisible?   <div className="container1 p-5">
      <div className="row1 justify-center items-center m-auto pt-64 ms-20">
      <i className="fa-solid fa-spinner fa-spin text-9xl"></i>
      </div>
      </div>  :  
            <Navigate to="/Wishlist" />
        

}
      </>
    )
  }