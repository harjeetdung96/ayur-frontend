import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Update = () => {
    const navigate = useNavigate();

    const data = useLocation();
    const { state } = data;

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');


    const [FetchRecord, setFetchRecord] = useState('');

    const updateData = (e) => {
        e.preventDefault();
        axios.put('http://localhost:2000/update-customer/' + state.id, {
            name: Name,
            email: Email,
            phone: Phone,
        })
        navigate(-1);
    }

    const getStoredData = (e) => {
        return axios.get('http://localhost:2000/get-customer/' + state.id)
            .then((response) => {
                setFetchRecord(response.data)
                setName(response.data.name)
                setEmail(response.data.email)
                setPhone(response.data.phone)
            });

    }

    useEffect(() => {
        getStoredData()

    }, [])

    return (
        <div>
            <form className="create-form" onSubmit={(e) => { updateData(e) }}>
                <div>
                    <label>Name</label>
                    <input placeholder='Name' defaultValue={FetchRecord.name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder='Email' defaultValue={FetchRecord.email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Phone</label>
                    <input placeholder='Phone' defaultValue={FetchRecord.phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update;