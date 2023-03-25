import { Route, Navigate } from 'react-router-dom'
import { ComponentType } from 'react'

interface PrivateRouteProps {
  isAuthenticated: boolean
  children: JSX.Element
}

export const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  return isAuthenticated ? children : <Navigate to="/login" />
}
