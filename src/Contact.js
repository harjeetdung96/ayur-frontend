import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ContactUpdate from './ContactUpdate';
import ContactCreate from './ContactCreate';

const Contact = () => {

    const [user, setUser] = useState([]);

    const fetchApi = () => {
        return axios.get('http://localhost:2000/get-customer')
            .then((response) => setUser(response.data));
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const deleteData = async (id) => {
        await axios.delete('http://localhost:2000/delete-customer/' + id)
        fetchApi()
    }

    return (
        // <div>
        //     {
        //         <NavLink to='/create'>
        //             <button>Create Contact</button>
        //         </NavLink>

        //     }
        //     {
        //         user.length > 0 && (
        //             <table>
        //                 <tr>
        //                     <th>Name</th>
        //                     <th>Email</th>
        //                     <th>Phone</th>
        //                     <th>Actions</th>
        //                 </tr>
        //                 {user.map(user => (
        //                     <tr key={user._id}>
        //                         <td>{user.name}</td>
        //                         <td>{user.email}</td>
        //                         <td>{user.phone}</td>
        //                         <td><NavLink to='/update' state={{ id: user._id }}>
        //                             <button>Update</button>
        //                         </NavLink>
        //                             <button onClick={() => deleteData(user._id)}>Delete</button></td>
        //                     </tr>
        //                 ))}
        //             </table>
        //         )
        //     }
        // </div>
        <div className='w-50 p-3'>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"></input>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"></input>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"></input>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"></input>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;