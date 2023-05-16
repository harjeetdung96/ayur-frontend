import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <>
            <NavLink to='/' >About</NavLink>
            <NavLink to='/contact' >Conatct</NavLink>
        </>

    )
}

export default Nav;