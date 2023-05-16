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


    return (<div>
        {
            user.length > 0 && (
                <ul>
                    {user.map(user => (
                        <li key={user._id}>{user.name} : {user.email}</li>

                    ))}
                </ul>
            )
        }

    </div>)


}

export default Contact;