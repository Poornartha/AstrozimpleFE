import React from 'react'
import '../../App.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleUsernameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            username: event.target.value,
        }));
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const handlePassword2InputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password2: event.target.value,
        }));
    };

    return (
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleUsernameInputChange}
                value={values.username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleEmailInputChange}
                value={values.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handlePasswordInputChange}
                value={values.password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={handlePassword2InputChange}
                value={values.password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );



}