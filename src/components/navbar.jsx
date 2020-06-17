import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import Portrait from './portrait.jsx'
import '../styles/nav.scss'



function Navbar(){

  const [authNav, setAuthNav] = useState('')
  const isAuth = useSelector(state => state.authReducer.isAuth)

  useEffect(inOrOut,[])


  function inOrOut(){
    let ans
    if (!isAuth) {
      ans = (
      <>
        <Link to="/register"><button type="button" class="btn btn-sm btn-primary"> Register </button> </Link>
        <Link to="/login"><button type="button" class="btn btn-sm btn-primary"> login </button> </Link>
      </>
      )
    } else {
      ans =  (
        <Portrait />
      )
    }
    setAuthNav(ans)
  }
  
  return(
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav d-flex">
          <li className="nav-item active">
            <Link to="/">Home</Link>
    <a class="dropdown-item" href="#">Link 1</a>
          </li>
          <li className="nav-item active">
          </li>
        </ul>
        <div id='authNav'>
          {authNav}
        </div>
      </nav>
    </>
  )
}
export default Navbar
