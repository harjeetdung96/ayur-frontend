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

    const deleteData = (id) => {
        axios.delete('http://localhost:2000/delete-customer/' + id)
        fetchApi()
    }

    return (<div>

        {
            <NavLink to='/create'>
                <button>Create Contact</button>
            </NavLink>

        }
        {
            user.length > 0 && (
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    {user.map(user => (

                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><NavLink to='/update' state={{ id: user._id }}>
                                <button>Update</button>
                            </NavLink>
                                <button onClick={() => deleteData(user._id)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            )
        }
    </div>)
}

export default Contact;