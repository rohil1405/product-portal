import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedAuth from './services/ProtectedAuth';
import ProductDetails from './components/ProductDetails';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import UserProfile from './components/UserProfile.jsx';

function app() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/reset' element={<ResetPassword />} />
            <Route path='/' element={<ProtectedAuth />}>
                <Route path='/' element={<Home />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path='/profile' element={<UserProfile />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default app
