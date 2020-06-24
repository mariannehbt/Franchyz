import * as clubAPI from 'services/clubAPI';
import * as userAPI from 'services/userAPI';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'

const resourcesCalls = {
  createClub: clubAPI.createClub,
  profileUpdate: userAPI.profileUpdate
}

const setUserInfo = (decodedToken) => {
  let userInfo = {
    email: decodedToken['email'],
    firstName: decodedToken['first_name'],
    lastName: decodedToken['last_name'],
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken['club_id'],
    teamId: decodedToken['team_id'],
  }

  Cookies.set('userInfo', userInfo, {sameSite: 'lax'})

}

const authRefresher = () => {
  if (Cookies.get('token') === undefined || Cookies.get('token') === null){
    return {
      loading: false,
      isAuth: false,
      id: null,
      typeUser: '',
      error: '',
    }
  }
  else{
    let decodedToken = jwt_decode(Cookies.get('token'))
    return {
      loading: false,
      isAuth: true,
      error: '',
      typeUser: decodedToken['scp'],
    } 
  }
}

export { resourcesCalls, setUserInfo, authRefresher }
