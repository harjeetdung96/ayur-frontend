import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Nav from './Nav';
import Home from './Dashboard';
import ContactUpdate from './ContactUpdate';
import ContactCreate from './ContactCreate';
import Register from './Register';
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const App = () => {
  var authUserName = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  const logouts = () => {
    sessionStorage.setItem('userName', '')
    navigate('/login')
  }

  const checkAuth = () => {
    if (!authUserName) {
      navigate('/login')
    }
  }
  useEffect(() => {
    checkAuth()
  }, [])

  if (authUserName != '') {
    return (
      <>
        <Nav />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/contact' Component={Contact} />
          <Route path='/about' Component={About} />
          <Route path='/update' Component={ContactUpdate} />
          <Route path='/create' Component={ContactCreate} />
          {/* <Route path='/register' Component={Register} /> */}
          {/* <Route path='/login' Component={Login} /> */}
          <Route path='/logout' Component={() => { logouts() }} />
        </Routes>

      </>
    )
  }
  else {
    return (
      <>
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} /> 
        </Routes>
      </>
    )
  }


}
export default App;