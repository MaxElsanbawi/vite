import axios from "axios"
import { useEffect, useState } from "react"

export default function Brandes() {
  const [dat, setData] = useState([{}])
 function brands(){
   return  axios.get ('https://ecommerce.routemisr.com/api/v1/brands')
        .then(response=> 
          response
        ).catch(error => error)
    }
    useEffect(() => {
      open()
    }, [])

    
 async function open() {
  let {data} =  await brands()
 setData(data.data)
 }

let [imgOne,setImgOne] = useState(false)
  return (

 <section className="textc">
<div>
  <h1 className=' flex flex-wrap justify-center font-bold text-5xl e pt-5'>
  portfolio component
  </h1>
</div>
<div className=' flex flex-wrap justify-center p-5 '><div className="b-r1 m-3"></div>
  <div>
    <i className="fa-solid fa-star "></i>
  </div><div className="b-r1 m-3"></div>
</div>

<div className="container1">
    <div className="row1">
{dat?.map((data )=>(

<>
<div key={data._id} className="md:w-1/4 p-5 port " onClick={()=>
setImgOne(true)
}> 
<div className="  relative truncate" >
<div className="lear ">  </div>
<img src={data?.image} className=' rounded  w-100 truncate  ' alt="Portfolio1" />
</div>

</div> 
<div className={imgOne ?'  bg-black fixed inset-0 -ps-28    flex  bg-opacity-5    justify-center items-center z-50 ':" hidden" } >
<div className='ero  gap-6'
><div>
<i onClick={()=>
  setImgOne(false)
}   className=" font-bold  text-lg fa-solid fa-x ero flex justify-end items-end ms-96 ps-20 me-3 mt-3" />

</div >
      <div className="p-10">
      <div className=" row1 ">
      <div className="w-1/2">
      <div className="  pb-14 ">{data.name}</div>
      <div className=" text-green-500 font-bold ">{data.name}</div>
      </div>
      <img src={data?.image } className="w-40s  rounded  w-1/2" alt="" />
      </div>
      </div>

      </div>
</div>


</>

))}
    </div>
</div>


</section> 


  )
}


{/* <section className="textc">
<div>
  <h1 className=' flex flex-wrap justify-center font-bold text-5xl e pt-5'>
  portfolio component
  </h1>
</div>
<div className=' flex flex-wrap justify-center p-5 '><div className="b-r1 m-3"></div>
  <div>
    <i className="fa-solid fa-star "></i>
  </div><div className="b-r1 m-3"></div>
</div>

<div className="container1">
    <div className="row1">
{dat?.map((data )=>(

<>
<div key={data?.data?._id} className="md:w-1/3 p-5 port " onClick={()=>
setImgOne(true)
}> 
<div className="  relative truncate" >
<div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
<img src={data?.data?.image} className=' rounded  w-100 truncate  ' alt="Portfolio1" />
</div>

</div>
<div className={imgOne ?'fixed inset-0   flex bg-black bg-opacity-25   backdrop-blur-sm justify-center items-center z-50 ':" hidden" } 
onClick={()=>
  setImgOne(false)
}>
      <img src={data?.data?.image} className="w-40s rounded" alt="" />

      </div>

</>

))}
    </div>
</div>


</section> */}







//hii



// <section className="textc">
//         <div>
//           <h1 className=' flex flex-wrap justify-center font-bold text-5xl e pt-5'>
//           portfolio component
//           </h1>
//         </div>
//         <div className=' flex flex-wrap justify-center p-5 '><div className="b-r1 m-3"></div>
//           <div>
//             <i className="fa-solid fa-star "></i>
//           </div><div className="b-r1 m-3"></div>
//         </div>
      
//         <div className="container1">
//             <div className="row1">

//               <div className="md:w-1/3 p-5 port " onClick={()=>
//                 setImgOne(true)
//               }> 
//                 <div className="  relative truncate" >
//                   <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
//                 <img src={Img1} className=' rounded  w-100 truncate  ' alt="Portfolio1" />
//                 </div>
              
//               </div>
            
//             </div>
//         </div>
// {/* model */}
//         <div className={imgOne ?'fixed inset-0   flex bg-black bg-opacity-25   backdrop-blur-sm justify-center items-center z-50 ':" hidden" } 
//         onClick={()=>
//           setImgOne(false)
//         }>
//               <img src={Img1} className="w-40s rounded" alt="" />

//               </div>
      
//         </section>