import React from 'react'
import '../../App.css'
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'; 

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
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={onSubmit}>
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
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/sign-up">SignUp</Link>
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