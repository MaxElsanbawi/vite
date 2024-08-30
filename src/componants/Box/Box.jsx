import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup' 
export default function Box() {
  const navigate = useNavigate();
  const [go, setGo] = useState({})
const callApi = async (values) =>{
try{

  const{data} =await axios.put (`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,values);
  console.log(data);
  navigate("/");
}catch(error){
  console.log(error);
}


}
// const validationSchema = Yup.object({
//   newPassword: Yup.string().min(6, 'Password too short').required('Required'),
//   email: Yup.string().email("Invalid email").required("Email is required")
// });

function validateAllInput(values){
  console.log(values)
  let errors = {};


  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/


 
  if(values.email===""){
    errors.email="email is required"
  }else if(!emailRegex.test(values.email)){
    errors.email="Invalid email format"
  }
  if(values.newPassword===""){
    errors.newPassword="password is required"
  }else if(!passwordRegex.test(values.newPassword)){
    errors.newPassword="password should be at least 8 characters long (A) &(numbers) &(a) &(#,&,%)"
  }

   
return errors
}

const resetp = useFormik({
  initialValues :{
    email: '',
    newPassword: '',
  },
  validate:validateAllInput,
  onSubmit:callApi
})



  return (
 <div className='container1'>
    <form onSubmit={resetp.handleSubmit}>

<div className="relative my-4">
                            <input type="email" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="email" placeholder="" onChange={resetp.handleChange} onBlur={resetp.handleBlur} />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email :</label>
                        </div>{resetp.errors.email && resetp.touched.email &&( <span className='text-red-700'>
                          {resetp.errors.email}
                          </span>)}
<div className="relative my-4">
                            <input type="text" id="newPassword" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="newPassword" placeholder="" onChange={resetp.handleChange} onBlur={resetp.handleBlur}/>
                            <label htmlFor="newPassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">password :</label>
                        </div>{resetp.errors.newPassword && resetp.touched.newPassword &&( <span className='text-red-700'>
                          {resetp.errors.newPassword}</span>)}
                        <div>
                        <button   className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type='submit'>Send code</button >
                        </div>
   </form>
 </div>
  )
}
