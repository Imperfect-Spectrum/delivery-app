import { Route, Routes } from 'react-router-dom'
import { Documents } from './components/content/documents'
import { Orders } from './components/content/orders'
import { LoginForm } from './components/login-form'
import { MainPage } from './components/main-page'
import { PrivateRoute } from './components/private-route'

function App() {
  const isAuthenticated = true

  return (
    <Routes>
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
      </Route>
      <Route path="login" element={<LoginForm />} />
    </Routes>
  )
}

export default App
