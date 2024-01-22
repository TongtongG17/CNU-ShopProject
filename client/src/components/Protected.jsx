import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protected({isAuth}) {
  //로그인시 가는 경로
  return (
    isAuth ? <Outlet/> : <Navigate to={'/login'}/>
  )
}

export default Protected