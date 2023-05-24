import React from 'react'

const Register = () => {

    return (<>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4"></input>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4"></input>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="inputPassword4"></input>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </>
    )
}

export default Register