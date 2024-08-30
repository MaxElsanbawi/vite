import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
const forgetPassword = () => {
    const navigate = useNavigate();
    const callAPI = async (values) => {
        console.log(values);
        try {
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,values);
            console.log(data);
            navigate("/Verfycode")
        } catch (error) {
            console.log(error)
        }
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required")
    })
    const resetEmail = useFormik({
        initialValues: {
            email : "",
        },
        validationSchema,
        onSubmit: callAPI,
    })
  return (
    <div className='container1'>
      <form onSubmit={resetEmail.handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        
<div className="relative my-4">
                            <input value={resetEmail.values.email} type="email" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="email" placeholder="" onChange={resetEmail.handleChange} onBlur={resetEmail.handleBlur} />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email :</label>
                        </div>
        {resetEmail.errors.email && resetEmail.touched.email && <p>{resetEmail.errors.email}</p>}
        
        <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Send Verification code</button>

      </form>
    </div>
  )
}

export default forgetPassword
