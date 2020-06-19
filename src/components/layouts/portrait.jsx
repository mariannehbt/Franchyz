import React, { useState, useEffect } from 'react';
import portrait from 'assets/portrait.jpeg'
import {Link} from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import * as UserAPI from 'services/authAPI'
import { logoutSuccess } from 'redux/actions/authActions.jsx'
import { useSelector, useDispatch } from 'react-redux';


function Portrait() {

  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [redirect, setRedirect] = useState('')
  const myId = useSelector(state => state.userReducer.id)
  const myType = useSelector(state => state.authReducer.typeUser)

  useEffect(setupName, [])

  function logout(){
    UserAPI.sign_out(myType)
    dispatch(logoutSuccess())   
    Cookies.remove('token', {sameSite: 'lax'});
    setRedirect(<Redirect to='/' />)
  }

  function setupName() {
    UserAPI.profile(myId, myType).then(response => { setName(response.first_name)
    })
  }

  return(
    <div className="dropdown">
      <div id="navbarDropdownMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <img src={portrait} class="rounded-circle" alt="portrait" id='portrait'/>
      </div>
      <div id="portrait-menu" className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
        <p className="m-0 dropdown-item"> {name} </p>
        <Link className="dropdown-item" to="/"> Profile </Link>
        <p className="m-0 dropdown-item" onClick={logout}> Logout </p>  
      </div>
      {redirect}
    </div> 

  )
}

export default Portrait
