import Cookies from 'js-cookie'

export function save (user) {
  Cookies.set('token', user.token)
  Cookies.set('uuid', user.uuid)
  Cookies.set('nickname', user.nickname)
}

export function remove () {
  Cookies.remove('token')
  Cookies.remove('uuid')
  Cookies.remove('nickname')
}

export function getToken () {
  return Cookies.get('token')
}
