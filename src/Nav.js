import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/contact' >Conatct</NavLink>
            <NavLink to='/about' >About</NavLink>
        </>

    )
}

export default Nav;