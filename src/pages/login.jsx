import React from 'react';
import '../styles/form.scss'
import { login } from '../redux/middlewares/authMiddlewares'
import {useSelector, useDispatch} from 'react-redux'

function Login() {

  const error = useSelector(state => state.authReducer.error)
  console.log(error)

  function setupAlert() {
    let ans
    if (error !== undefined) {
      console.log('eee')
      ans = (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )
    } else {
      ans = null
    }
    console.log(ans)

    return ans
  }

  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    dispatch(login(email, password, 'coach'))   
  }

  return(
    <>
        {setupAlert()}
    <form className="form p-4 mt-3 mb-3 rounded" action="/action_page.php" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="username">username:</label>
        <input type="text" className="form-control" placeholder="Enter email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" placeholder="Enter password" id="password" />
      </div>
      <div className="form-group form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </>
  )
}

export default Login
