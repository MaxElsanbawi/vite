import{ useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lodar from '../../componants/lodar/lodar';
import { cartContext } from '../../Context/cartContext/cartContext'

function ChikOut() {
      const {removeAll} = useContext (cartContext)
    const [cartId, setCartId] = useState()
    const{getcart ,Online }=  useContext (cartContext)
    async function getTcart(){
        let {data}=  await getcart()

        setCartId(data. cartId);
        }
        
useEffect(() => {
    getTcart()
}, [])
async function remoA () {
    await removeAll();

   
    
     
   }


;
console.log(cartId)


    const [error, setError] = useState("")


    async  function handleChikout (values) {
        
const {data} = await Online(cartId,values);
window.location=data.config.url
    }



  useEffect(() =>{
    document.title="Register"
    },[]);


function validateAllInput(values){
  console.log(values)
  let errors = {};

  let phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;

 


  if(values.phone===""){
    errors.phone="phone is required"
  }else if(!phoneRegex.test(values.phone)){
    errors.phone="phone is not a valid password";
}  

  if(values.city===""){
    errors.city="city is required"
  } 
  if(values.details===""){
    errors.details="details is required"
  } 

  if(values.phone===""){
    errors.phone="phone is required"
  }else if(!phoneRegex.test(values.phone)){
    errors.phone="phone is not a valid password";
}  
return errors
}
let formik=  useFormik({
initialValues:{
    details:'',
    city:'',

    phone:'',
},
validate:validateAllInput,

onSubmit:handleChikout 

});

let [done ,setDone] = useState(true)

const allIsDone = ()=>
{
  let submitBtn = document.getElementById('submit');
  if(formik.errors.name&& formik.errors.email&& formik.errors.password  &&formik.errors.city &&formik.errors.phone==true )  {
    setDone(false)
    submitBtn.removeAttribute('disabled');
    
  } else {
    setDone(true)
  }
}
window.addEventListener('done',allIsDone)


const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 1000); 

  return () => clearTimeout(timer);
}, []);


  return (

<div>
    { isVisible?   <Lodar/>  :  
 <section className=" textc pb-2">

            

<form  onSubmit={formik.handleSubmit}>
            <div className="container1">
                <div className="row1">
                    
            
                    <div className=" w-3/4 mx-auto  ">
                    <div>
                <h3 className=' flex flex-wrap   text-4xl pt-5'>
                register now
                </h3>
            </div>

                        <div className="relative my-4">
                            <input type="details" id="details" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="details" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details}/>
                            <label htmlFor="details" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">details :</label>
                        </div>
                        {formik.errors.details && formik.touched.details &&( <span className='text-red-700'>
                          {formik.errors.details}
                          </span>)}

                        <div className="relative my-4">
                            <input type="text" id="city" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="city" placeholder=" "onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city}  />
                            <label htmlFor="city" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">city :</label>
                        </div>
                        {formik.errors.city && formik.touched.city &&( <span className='text-red-700'>
                          {formik.errors.city}
                        </span>)}
                        <div className="relative my-4">
                            <input type="text" id="phone" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="phone" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                            <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">phone :</label>
                        </div>
                        {formik.errors.phone && formik.touched.phone &&( <span className='text-red-700'>
                          {formik.errors.phone}
                        </span>)}
                        {error ? <div className='bg-red-500 ps-3 mb-5 rounded text-black m-auto'>{error}</div> : null}
                        <div>
                          
                        <button  onClick={()=>{remoA()}} type="submit" id='submit'    className={done ? '  di focus:outline-none  divide-none  text-white  bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500': "focus:outline-none text-black  bg-transparent focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   text-black border-black  border-2 "}>Register</button>
                        </div>
                        
                    </div>
                </div>
            </div></form>
        </section>
 }
  </div>
  )
}
export default ChikOut;
