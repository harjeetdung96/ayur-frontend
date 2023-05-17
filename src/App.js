import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Nav from './Nav';
import Home from './Home';

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/contact' Component={Contact} />
        <Route path='/about' Component={About} />
      </Routes>
    </>
  )
}
export default App;

// import React, { useEffect, useState } from "react"
// import axios from "axios";

// const App = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     return axios.get("http://localhost:2000/get-customer")
//       .then((response) => setUsers(response.data));
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])

//   return (

//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user._id}>{user.name} : {user.email}</li>

//           ))}
//         </ul>
//       )}
//     </div>

//   );

// }

// export default App;