import { Outlet, Navigate } from "react-router-dom";
import React from 'react'

function AdminProtectedRoutes() {
  const user = sessionStorage.getItem('admin-token')
  if(!user) {
    return <Navigate to='/admin/login' />
  } else {
    return <Outlet />
  }
}

export default AdminProtectedRoutes