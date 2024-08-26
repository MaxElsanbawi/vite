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
    <div>
      <form onSubmit={vrifyCode.handleSubmit}>
        <label htmlFor="resetCode">  restcode </label>
        <input type="text" id='resetCode' name='resetCode' value={vrifyCode.value} onChange={vrifyCode.handleChange} onBlur={vrifyCode.handleBlur} />
        <button type='submit'>Send code</button>
      </form> {vrifyCode.errors.resetCode && <p> {vrifyCode.errors.resetCode} </p>}
    </div>
  )
}
