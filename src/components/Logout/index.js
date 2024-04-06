import { useNavigate } from 'react-router-dom'

import './index.css'

const Logout = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    sessionStorage.removeItem('token')
    window.localStorage.clear()
    navigate('/register-login-form')
  }

  return (
    <div className='logout-container'>
      <button className='logout-button' onClick={onClickLogout}>Logout</button>
    </div>
  )
}

export default Logout