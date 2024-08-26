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
    <div>
      <form onSubmit={resetEmail.handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input value={resetEmail.values.email}
        onChange={resetEmail.handleChange}
        onBlur={resetEmail.handleBlur}
        type="email" id='email' name='email' />
        {resetEmail.errors.email && resetEmail.touched.email && <p>{resetEmail.errors.email}</p>}
        <button type='submit'>Send Verification code</button>
      </form>
    </div>
  )
}

export default forgetPassword
