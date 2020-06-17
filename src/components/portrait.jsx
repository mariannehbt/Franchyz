import React from 'react';
import portrait from 'assets/portrait.jpeg'
import {Link} from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import Cookies from 'js-cookie'


function Portrait() {

  function logout(){
    Cookies.remove('token');
    window.location.pathname = '/'
  }

  return(
    <div className="dropdown">
      <div id="navbarDropdownMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <img src={portrait} class="rounded-circle" alt="portrait" id='portrait'/>
      </div>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item-text" to="/"> Profile </Link>
        <p className="texcenter" onClick={logout}> Logout </p>  
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
