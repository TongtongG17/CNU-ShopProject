import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function NotAuth({isAuth}) {
  //로그인시 못가는 경로
  return (
    isAuth ? <Navigate to={'/'}/> : <Outlet/>
  )
}

export default NotAuth