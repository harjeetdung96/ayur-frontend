import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''

    })

    const navigate = useNavigate();

    const registerData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2000/login', {
            ...data
        }).then((response) => {
            sessionStorage.setItem('userName', response.data.response.name)
            sessionStorage.setItem('userType', response.data.response.type)
            navigate('/');
            console.log(response.data)

        }).catch((error) => {

        })

    }


    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    return (<>
        <form className="row g-3" onSubmit={(e) => { registerData(e) }}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" name='email' className="form-control" onChange={changeHandler} id="inputEmail4"></input>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" onChange={changeHandler} id="inputPassword4"></input>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
        <p> Register from here
            <NavLink className="nav-link" to='/register' >Register</NavLink>
        </p>
    </>
    )
}

export default Login