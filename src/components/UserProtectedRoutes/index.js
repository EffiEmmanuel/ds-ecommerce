import { Outlet, Navigate } from "react-router-dom";
import React from 'react'

function UserProtectedRoutes() {
  const user = sessionStorage.getItem('token')
  if(!user) {
    return <Navigate to='/login' />
  } else {
    return <Outlet />
  }
}

export default UserProtectedRoutes