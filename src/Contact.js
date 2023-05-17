import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
                            <td><button>Update</button><button onClick={() => deleteData(user._id)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            )
        }

    </div>)


}

export default Contact;