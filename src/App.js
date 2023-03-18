import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilPage from './pages/ProfilPage';

function App() {


  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsbscribe;
  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {!user ? (<LoginPage />) :
          (
            <Routes>
              <Route
                index path="/" element={
                  <HomePage />
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilPage />} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}

export default App;