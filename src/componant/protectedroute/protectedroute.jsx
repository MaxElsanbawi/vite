import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { acountContext } from '../../Context/AcountContext'
import Login from '../login/login'


 function ProtectedRoute(props) {


if (localStorage.getItem("token")){
  return props.children  
} 

else{
  return <Navigate to={"/login"}/>
}


}
 export default ProtectedRoute;