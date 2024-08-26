import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup' 
export default function Box() {
const callApi = async (values) =>{
try{

  const{data} =await axios.put (`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,values);
  console.log(data);

}catch(error){
  console.log(error);
}


}
const validationSchema = Yup.object({
  newPassword: Yup.string().min(6, 'Password too short').required('Required'),
  email: Yup.string().email("Invalid email").required("Email is required")
});



const resetp = useFormik({
  initialValues :{
    email: '',
    newPassword: '',
  },
  validationSchema,
  onSubmit:callApi
})



  return (
   <form onSubmit={resetp.handleSubmit}>

<div className="relative my-4">
                            <input type="email" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="email" placeholder="" onChange={resetp.handleChange} onBlur={resetp.handleBlur} />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email :</label>
                        </div>
<div className="relative my-4">
                            <input type="text" id="newPassword" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="newPassword" placeholder="" onChange={resetp.handleChange} onBlur={resetp.handleBlur}/>
                            <label htmlFor="newPassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">password :</label>
                        </div>
                        <button type='submit'>Send code</button>
   </form>
  )
}
