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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-20 py-6 text-left bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <form>
            <div className="mt-4 px-10">
              <div className="mt-4">
              <label className="block">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="username"
                onChange={handleUsernameInputChange}
                value={values.username}
              />
            </div>
            <div className="mt-4">
              <label className="block">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="email"
                onChange={handleEmailInputChange}
                value={values.email}
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="password"
                onChange={handlePasswordInputChange}
                value={values.password}
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="password2"
                onChange={handlePassword2InputChange}
                value={values.password2}
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Register
              </button>
            </div>
            <p className="text-sm text-blue-600 hover:underline pt-5">
            <Link to="/login"> Already have an account? Login</Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    );



}