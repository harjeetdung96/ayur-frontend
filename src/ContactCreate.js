import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');

    const createData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2000/insert-customer', {
            name: Name,
            email: Email,
            phone: Phone,
            appointment_datetime: 11 / 2 / 2023
        });
        navigate(-1);
    }


    return (
        <div>
            <form className="create-form" onSubmit={(e) => { createData(e) }}>
                <div>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Phone</label>
                    <input placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create;