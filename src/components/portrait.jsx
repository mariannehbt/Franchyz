import React, { useState, useEffect } from 'react';
import portrait from 'assets/portrait.jpeg'
import {Link} from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import Cookies from 'js-cookie'
import {useSelector, useDispatch} from 'react-redux'
import {myName} from 'helpers/misc.jsx'
import * as UserAPI from 'services/authAPI'


function Portrait() {

  const [name, setName] = useState('d')
  const myId = useSelector(state => state.authReducer.id)
  const myType = useSelector(state => state.authReducer.typeUser)

  useEffect(setupName, [])

  function logout(){
    Cookies.remove('token');
    window.location.pathname = '/'
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
    </div> 

  /*
     <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby='navbarDropdown'>
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
  </div>
</div> 
*/
  )
}

export default Portrait
