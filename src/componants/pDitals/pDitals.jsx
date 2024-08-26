import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Lodar from '../lodar/lodar'
import Slider from 'react-slick'

export default function PDitals() {
const [det, setDet] = useState({})
let {id} = useParams()

function getD(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then((data)=>setDet(data.data.data))
  .catch((error)=>console.log(error))
}
console.log(det)
 

useEffect(() =>{
  document.title="prodact"
  },[]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,};

useEffect(() => {
  getD();
}, []);console.log(id)

const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  },3000); 

  return () => clearTimeout(timer);
}, []);


  return (

<div>
    { isVisible?   <Lodar/>  :  
      <div className="mt-32">
      <div className='container12 '>
      
      <div className="row1 lg:flex-row md:flex-col">
      <div className=' lg:w-1/4 bg-red-600'>fffffffff
      
      <Slider {...settings}>

        {det?.images?.map((image)=> (
<div key={det.image} >  <img src={image} alt="" /> </div>

        )) };

  

    </Slider>
          
      </div>
      <div className='lg:w-3/4 md:w-auto p-3'>
      <h1 className=' text-2xl'>
        {det.title}
      </h1>
      <p>
        {det.description}
      </p>
      <div className='row1 justify-between'>
        <strong> ${ det.price }  </strong>
        <p><i className="fa-solid fa-star text-yellow-500"></i>  { det.ratingsAverage }  </p>
      </div>
      <div>  <button type="submit" id='submit'    className="focus:outline-none text-white ps-60 pe-60 mt-6  bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500"> + add</button> </div>
      </div>
      </div>
    </div>
  </div>
 }
  </div>
  )
}
