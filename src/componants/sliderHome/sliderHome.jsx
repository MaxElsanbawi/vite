import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import Slider from "react-slick";

export default function SliderHome() {
  const [slid, setSlid] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 function set(){

  
  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  .then((data) => setSlid(data.data.data))
  .catch((err) => console.log(err))


}
console.log(slid)
 
useEffect(() => {
  set()


}, []);


  return (
    <div>
 <Slider {...settings}>
{ slid.map((category)=> 
  
  <div  key={category._id}>
    <img src={category.image} alt="" className='h-1002'  />
    <h3>{category.name}</h3>
  </div>
  
  )}


      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>

    </div>
  )
}
