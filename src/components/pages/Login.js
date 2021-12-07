import React from 'react'
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'; 
import './Login.css';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

const Login = (props) => {
    
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const handleUsernameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            username: event.target.value,
        }));
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault()
        props.login(values.username, values.password)
    }

    if(props.isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-20 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block">Username</label>
              <input 
              type="text"
              name="username"
              onChange={handleUsernameInputChange}
              value={values.username}
              className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div className="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="password"
                onChange={handlePasswordInputChange}
                value={values.password}
              />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Login
            </button>
          </div>
            <p className="text-sm text-blue-600 hover:underline pt-2">
            <Link to="/sign-up"> Don't have an account? Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    );

}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps, {login})(Login)