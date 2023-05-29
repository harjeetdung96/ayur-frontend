import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''

    })

    const registerData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2000/register', {
            ...data
        })

    }

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (<>
        <form className="row g-3" onSubmit={(e) => { registerData(e) }}>
            <div className="col-md-8">
                <label className="form-label" htmlFor="autoSizingInput">Name</label>
                <input type="text" className="form-control" name='name' id="autoSizingInput" placeholder="Name" onChange={changeHandler}></input>
            </div>
            <div className="col-md-8">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' id="inputEmail4" placeholder="Email" onChange={changeHandler}></input>
            </div>
            <div className="col-md-8">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' id="inputPassword4" placeholder="Password" onChange={changeHandler}></input>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary" onChange={changeHandler}>Register</button>
            </div>
        </form>
    </>
    )
}

export default Register