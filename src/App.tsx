import { Navigate, Route, Routes } from 'react-router-dom'
import { Contacts } from './components/content/contacts'
import { Documents } from './components/content/documents'
import { Statistics } from './components/content/statistics'
import { Orders } from './components/content/orders'
import { LoginForm } from './components/login-form'
import { MainPage } from './components/main-page'
import { PrivateRoute } from './components/private-route'
import { Profile } from './components/content/profile'
import { Appeals } from './components/content/appeals'

function App() {
  const isAuthenticated = true

  return (
    <Routes>
      <Route path="/" element={<Navigate to="page/orders" />} />
      <Route
        path="*"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <MainPage />
          </PrivateRoute>
        }
      >
        <Route path="page/orders" element={<Orders />} />
        <Route path="page/documents" element={<Documents />} />
        <Route path="page/contacts" element={<Contacts />} />
        <Route path="page/statistics" element={<Statistics />} />
        <Route path="page/profile" element={<Profile />} />
        <Route path="page/appeals" element={<Appeals />} />
      </Route>

      <Route path="login" element={<LoginForm />} />
    </Routes>
  )
}

export default App
