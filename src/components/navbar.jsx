import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Cookies from 'js-cookie'


function Navbar(){

  const [panel, setPanel] = useState('')
  const isAuth = useSelector(state => state.authReducer.isAuth)

  useEffect(authNav,[])

  function logout(){
    Cookies.remove('token');
    window.location.pathname = '/'
  }

  function authNav(){
    let ans
    if (!isAuth) {
      ans = (
      <>
        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
      </>
      )
    } else {
      ans =  (
        <button type="button" class="btn btn-danger" onClick={logout} >Logout</button>
      )
    }
    setPanel(ans)
  }
  
  return(
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item active">
          </li>
            {panel}
        </ul>
      </nav>
    </>
  )
}
export default Navbar
