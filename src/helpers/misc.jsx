import jwt_decode from 'jwt-decode';

function pluralyzeType(type) {
  if(type === 'coach')
    return 'coaches'
  else if(type === 'player')
    return 'players'
}

export {pluralyzeType}
