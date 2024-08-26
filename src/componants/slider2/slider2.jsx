import React from 'react'
import img1 from "../../assets/photo/bag.jpg"
import img2 from "../../assets/photo/sher.jpg"
import img3 from "../../assets/photo/ring.jpg"
import img5 from "../../assets/photo/up.jpg"
import img6 from "../../assets/photo/down.jpg"
import Slider from 'react-slick'

export default function Slider2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };



  return (
    <>
    <div className="container1 pb-32 ">
    <div className="inear ">
      <div className=" flex flex-row" >
      <div  className='container12  ' >
       <Slider {...settings}  className=' w-1/2 ms-40'><div className=' '>
      
       <img src={img1} className='w-100' alt="img1"/>
      </div>
      
      <div>
        <img src={img2}className='w-100' alt="img2"/>
      </div>
      <div>
        <img src={img3}className='w-100' alt="img3"/>
      </div>
      

    </Slider>
</div>

  <div className=' container1 w-96'>

      <div>
        <img src={img5} alt="img5"/>
      </div>
      <div>
        <img src={img6} alt="img6"/>
      </div>
    
    </div>
      </div>
    </div>
    </div>
    
    </>
  )
}
