import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import *as yup from 'yup'
export default function Verfycode() {

let navigate =  useNavigate( ) 

  const callapi = async (values) => {
    console.log(values)
    try {
      const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values);
      console.log(data)
    navigate('/resitepassword')
    } catch (error) {
      console.log(error)
    }

  }

  const validationSchema = yup.object({
    resetCode: yup.string().required("code is required")
  })


  const vrifyCode = useFormik({


    initialValues: {
      resetCode: ''
    },
    validationSchema,
    onSubmit: callapi
  })

  return (
    <div className='container1 pt-10'>
   <div className='pt-10'>
   <form onSubmit={vrifyCode.handleSubmit}>
      <label htmlFor="resetCode" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
      <input value={vrifyCode.value} type="resetCode" id="resetCode" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="resetCode" placeholder="Verification" onChange={vrifyCode.handleChange} onBlur={vrifyCode.handleBlur} />
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type='submit'>Send code</button>
      </form> {vrifyCode.errors.resetCode && <p> {vrifyCode.errors.resetCode} </p>}
   </div>
    </div> 
  )
}
