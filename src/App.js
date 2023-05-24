import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import ContactUpdate from './ContactUpdate';
import ContactCreate from './ContactCreate';
import Register from './Register';


const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/contact' Component={Contact} />
        <Route path='/about' Component={About} />
        <Route path='/update' Component={ContactUpdate} />
        <Route path='/create' Component={ContactCreate} />
        <Route path='/register' Component={Register} />
      </Routes>
    </>
  )
}
export default App;