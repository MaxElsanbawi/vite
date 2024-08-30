import{ useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lodar from '../../componants/lodar/lodar';



  function Register() {
    
let navigate= useNavigate();
    const [error, setError] = useState("")
      function handleRegister (values) {
      //call api
      axios .post ("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
     .then((data) =>{ 

      if (data.data.message === "success")
      {
      navigate('/login')
      }
      })
      . catch((error) =>
        setError( error.response.data.message));}




  useEffect(() =>{
    document.title="Register"
    },[]);


    function validateAllInput(values){
      console.log(values)
      let errors = {};
    
      let nameRegex = /^[A-Z][a-z]{3,9}$/;
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      let phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    
      if (values.name ===""){
        errors.name="name is required"
      } else if (!nameRegex.test(values.name)){
        errors.name="name should not contain special characters"
      }
      if(values.email===""){
        errors.email="email is required"
      }else if(!emailRegex.test(formik.values.email)){
        errors.email="Invalid email format"
      }
      if(values.password===""){
        errors.password="password is required"
      }else if(!passwordRegex.test(values.password)){
        errors.password="password should be at least 8 characters long (A) &(numbers) &(a) &(#,&,%)"
      }
      if(values.rePassword===""){
        errors.rePassword="re-password is required"
      }else if(values.rePassword!==values.password){
        errors.rePassword="re-password is not a valid password";
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
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:'',
},
validate:validateAllInput,

onSubmit:handleRegister 

});

let [done ,setDone] = useState(true)

const allIsDone = ()=>
{
  let submitBtn = document.getElementById('submit');
  if(formik.errors.name&& formik.errors.email&& formik.errors.password  &&formik.errors.repassword &&formik.errors.phone==true )  {
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
  }, 5000); 

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
                            <input type="text" id="name" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="name" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userName :</label>
                        </div>
                        {formik.errors.name && formik.touched.name &&( <span className='text-red-700'>
                          {formik.errors.name}

                        </span>)}
                        <div className="relative my-4">
                            <input type="email" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="email" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email :</label>
                        </div>
                        {formik.errors.email && formik.touched.email &&( <span className='text-red-700'>
                          {formik.errors.email}
                          </span>)}
                        <div className="relative my-4">
                            <input type="text" id="password" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="password" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">password :</label>
                        </div>
                        {formik.errors.password && formik.touched.password &&( <span className='text-red-700'>
                          {formik.errors.password}</span>)}
                        <div className="relative my-4">
                            <input type="text" id="rePassword" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="rePassword" placeholder=" "onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword}  />
                            <label htmlFor="rePassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">repassword :</label>
                        </div>
                        {formik.errors.rePassword && formik.touched.rePassword &&( <span className='text-red-700'>
                          {formik.errors.rePassword}
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
                          
                        <button type="submit" id='submit'    className={done ? '  di focus:outline-none  divide-none  text-white  bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500': "focus:outline-none text-black  bg-transparent focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   text-black border-black  border-2 "}>Register</button>
                        </div>
                        
                    </div>
                </div>
            </div></form>
        </section>
 }
  </div>
  )
}
export default Register;
